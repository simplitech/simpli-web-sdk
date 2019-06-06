const template = `
  <div v-if="collection"
       @click="orderBy"
       class="adap-orderby"
       :class="{ 'asc': collection.asc, 'desc': !collection.asc }">
    {{ label }}
    <slot></slot>
    <span :class="{ 'caret': collection.orderBy === name }"></span>
  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'
import { PageCollection, Resource } from '../../app'

@Component({ template })
export class AdapOrderby extends Vue {
  @Prop({ required: true })
  collection!: PageCollection<Resource>

  @Prop({ required: true })
  name!: string

  @Prop({ type: String, default: '' })
  label!: string

  @Prop({ type: String, default: 'adapQuery' })
  spinner!: string

  async orderBy() {
    await this.$await.run(this.spinner, () => this.collection.queryOrderBy(this.name))
  }
}
