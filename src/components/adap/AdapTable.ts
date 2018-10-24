const template = `
  <transition name="fade" mode="out-in" v-if="collection">
    <div class="m-20" v-if="!collection.items.length" :key="0">
      <await name="query" spinner="MoonLoader">
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

import { Component, Prop, Watch, Mixins, Vue } from 'vue-property-decorator'
import { PageCollection, Resource } from '../../app'
import { MixinQueryRouter } from '../mixins/MixinQueryRouter'

@Component({ template })
export class AdapTable extends Mixins<MixinQueryRouter>(MixinQueryRouter) {
  @Prop({ required: true })
  collection?: PageCollection<Resource>

  async mounted() {
    await this.query()
  }
}
