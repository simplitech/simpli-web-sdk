const template = `
  <div v-if="collection"
       @click="orderBy"
       class="adap-orderby"
       :class="{ 'asc': collection.asc, 'desc': !collection.asc }">
    <slot></slot>
    <span :class="{ 'caret': collection.orderBy === name }"></span>
  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'
import { PageCollection, Resource } from '../../app'
import { $ } from '../../simpli'

@Component({ template })
export class AdapOrderby extends Vue {
  @Prop({ required: true })
  collection?: PageCollection<Resource>
  @Prop({ required: true })
  name?: string

  async orderBy() {
    await $.await.run(() => this.collection!.setOrderBy(this.name!), 'adapTable')
  }
}
