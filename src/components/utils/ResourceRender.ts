const template = `
  <div class="resource-render">
    <template v-if="content && !isHidden">
      <component v-if="isComponent" :is="content.component" v-bind="content.props || {}"/>
      <span v-else v-html="content"></span>
    </template>
  </div>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { Resource } from '../../app'
import { SchemaVal, SchemaRow, SchemaContent } from '../../misc'

@Component({ template })
export class ResourceRender extends Vue {
  @Prop({ type: Object, required: true })
  value?: Resource
  @Prop({ type: String, required: true })
  field?: string

  schemaVal: SchemaVal | null = null
  content: SchemaContent | null = null

  @Watch('value')
  @Watch('field')
  inputEvent() {
    const { value, field } = this

    if (!value || !field) {
      return console.warn(`[warn] The resource and field must be defined in <ResourceOutput>`)
    }

    this.schemaVal = value.$schema[field]

    if (!this.schemaVal) {
      return console.warn(`[warn] The field '${field}' of the schema from resource '${value.$name}' was not found`)
    }

    if (typeof this.schemaVal === 'object') {
      this.content = (this.schemaVal as SchemaRow).content
    } else {
      this.content = this.schemaVal as SchemaContent
    }
  }

  get isHidden() {
    const { schemaVal } = this
    if (schemaVal) {
      return (schemaVal as SchemaRow).hidden === true
    }
    return false
  }

  get isComponent() {
    const { content } = this
    return content && typeof content === 'object' && content.component && content.component.prototype instanceof Vue
  }

  created() {
    this.inputEvent()
  }
}
