const template = `
  <div v-if="collection" class="adap-header horiz items-left-center gutter-10 px-30 py-10">
    <h1 class="m-0">
      {{title}}
    </h1>

    <adap-searchfield v-if="hasSearch"
                      :collection="collection"
                      :placeholder="$t('app.search')"
                      class="search w-200 ml-10"/>

    <await name="adapTable"></await>

    <div class="weight-1"></div>

    <small v-if="collection.items.length">
      {{ $t("app.totalLines", {total: collection.total}) }}
    </small>

    <await name="downloadCsv" spinnerPadding="10px" :spinnerScale="0.5">
      <button v-if="hasCsv" @click="downloadCsv">
          {{ $t("app.downloadCsv") }}
      </button>
    </await>

    <router-link v-if="persistUrl"
                 :to="persistUrl"
                 class="btn primary">
      {{ $t("app.add") }}
    </router-link>
  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'
import { PageCollection, Resource } from '../../app'
import { $ } from '../../simpli'

@Component({ template })
export class AdapHeader extends Vue {
  @Prop({ required: true })
  collection?: PageCollection<Resource>
  @Prop({ default: '' })
  title?: string
  @Prop({ default: '' })
  persistUrl?: string
  @Prop({ default: false })
  hasSearch?: boolean
  @Prop({ default: false })
  hasCsv?: boolean

  async downloadCsv() {
    const type = this.collection!.type
    const csv = new PageCollection(type)
    csv.clone(this.collection)
    csv.currentPage = undefined
    csv.perPage = undefined

    await $.await.run(async () => await csv.search(), 'downloadCsv')

    csv.downloadCsv()
  }
}
