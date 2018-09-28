const template = `
  <transition name="fade" mode="out-in" v-if="collection">
    <div class="m-20" v-if="!collection.items.length" :key="0">
      <await name="adapTable" spinner="MoonLoader">
        <h3 class="text-center">
          {{ $t("app.noDataToShow") }}
        </h3>
      </await>
    </div>

    <div class="m-20" v-else :key="1">
      <div class="elevated p-0 x-scroll">
        <table>
          <thead>
          <tr>
            <th></th>

            <th v-for="(value, key) in collection.headers" :key="key">
              <adap-orderby :collection="collection" :name="key">
                {{ value }}
              </adap-orderby>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, i) in collection.items">
            <td>
              <slot name="options" :item="item" :i="i"></slot>
            </td>

            <td v-for="value in collection.values(i)" v-html="value"></td>
          </tr>
          </tbody>
        </table>
      </div>

      <adap-pagination :collection="collection"></adap-pagination>
    </div>
  </transition>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { PageCollection, Resource } from '../../app'
import { $ } from '../../simpli'

export interface Dictionary<T> { [key: string]: T }

@Component({ template })
export class AdapTable extends Vue {
  @Prop({ required: true })
  collection?: PageCollection<Resource>

  async queryEvent(query: Dictionary<string>) {
    const {q, page, name, asc} = query

    this.collection!.querySearch = q || ''
    this.collection!.currentPage = (Number(page) || 1) - 1
    this.collection!.orderBy = name || ''
    this.collection!.asc = !!(Number(asc))

    await $.await.run(() => this.collection!.search(), 'adapTable')
  }

  @Watch('collection.querySearch')
  querySearchEvent(querySearch?: string) {
    const query = { ...this.$route.query }

    if (querySearch) query.q = `${querySearch}`
    else delete query.q

    this.$router.push({ query })
  }

  @Watch('collection.currentPage')
  currentPageEvent(currentPage?: number) {
    const query = { ...this.$route.query }

    if (currentPage) query.page = `${currentPage + 1}`
    else delete query.page

    this.$router.push({ query })
  }

  @Watch('collection.orderBy')
  orderByEvent(orderBy?: string) {
    const query = { ...this.$route.query }

    if (orderBy) query.name = `${orderBy}`
    else {
      delete query.name
      delete query.asc
    }

    this.$router.push({ query })
  }

  @Watch('collection.asc')
  ascEvent(asc?: boolean) {
    const query = { ...this.$route.query }

    if (query.name) query.asc = `${asc ? 1 : 0}`
    else delete query.asc

    this.$router.push({ query })
  }

  async mounted() {
    await this.queryEvent(this.$route.query)
  }
}
