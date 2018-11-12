const template = `
  <div class="resource-render">
    <template v-if="contentData">
      <component v-if="isComponent" :is="contentData.component" v-bind="contentData.props || {}"/>
      <span v-else v-html="contentData"></span>
    </template>
  </div>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { Resource } from '../../app'
import { SchemaContent } from '../../misc'

@Component({ template })
export class ResourceRender extends Vue {
  @Prop({ type: Object })
  value?: Resource
  @Prop({ type: String })
  field?: string
  @Prop({ type: Number, default: 0 })
  index?: number

  get contentData() {
    const { value, field, index } = this

    if (value && field) {
      return value.resolveSchema({ field, index }) as SchemaContent
    }

    return null
  }

  get isComponent() {
    const contentData = this.contentData
    return (
      contentData &&
      typeof contentData === 'object' &&
      contentData.component &&
      contentData.component.prototype instanceof Vue
    )
  }
}
