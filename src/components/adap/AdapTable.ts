const template = `
  <div class="adap-table">
    <transition name="fade-up" mode="out-in" v-if="collection">
      <div v-if="!collection.items.length" :key="0">
        <await name="query" spinner="MoonLoader">
          <div class="table-empty">
            <h3 class="text-center">
              {{ $t("app.noDataToShow") }}
            </h3>
          </div>
        </await>
      </div>

      <div v-else :key="1">
        <div class="table-scroll">
          <table>
            <thead>
            <tr>
              <th></th>

              <th v-for="(value, key) in collection.header" :key="key">
                <adap-orderby :collection="collection" :name="key" :label="value"/>
              </th>
            </tr>
            </thead>
            
            <tbody>
            <tr v-for="(item, i) in collection.items" :key="i">
              <td>
                <slot name="options" :item="item" :i="i"></slot>
              </td>

              <td v-for="(field, j) in collection.schemaValidKeys[i]" :key="j">
                <resource-render v-model="collection.items[i]" :field="field"/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <adap-pagination :collection="collection"/>
      </div>
    </transition>
  </div>
`

import { Component, Prop, Watch, Mixins, Vue } from 'vue-property-decorator'
import { flatten } from 'lodash'
import { PageCollection, Resource } from '../../app'
import { MixinQueryRouter } from '../mixins/MixinQueryRouter'
import { sleep } from '../../main'

@Component({ template })
export class AdapTable extends Mixins<MixinQueryRouter>(MixinQueryRouter) {
  @Prop({ required: true })
  collection?: PageCollection<Resource>

  async mounted() {
    await this.query()
  }
}
