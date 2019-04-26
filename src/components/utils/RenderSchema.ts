const template = `
  <div class="render-schema">
    <component
      v-if="isObject"
      :is="is"
      v-model="value[fieldName]"
      v-bind="vBind"
      v-on="vOn"
    />
    <div v-else-if="fieldContent !== undefined && fieldContent !== null" v-html="fieldContent"></div>
  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'
import { Schema } from '../../app'
import { FieldComponent, ISchema } from '../../interfaces'

@Component({ template })
export class RenderSchema extends Vue {
  @Prop({ type: Object, required: true })
  value!: ISchema

  @Prop({ type: [String, Object], required: true })
  schema!: string | Schema

  @Prop({ type: String, required: true })
  field!: string

  get fieldContent() {
    const { value, schema, field, attrs, listeners } = this
    if (typeof schema === 'string') {
      return value.$schemaSet[schema].fieldSet[field](field, attrs, listeners)
    }
    return schema.fieldSet[field](field, attrs, listeners)
  }

  get isObject() {
    return typeof this.fieldContent === 'object'
  }

  get is() {
    if (this.isObject) {
      const fieldContent = this.fieldContent as FieldComponent
      return fieldContent.is
    }
  }

  get fieldName() {
    if (this.isObject) {
      const fieldContent = this.fieldContent as FieldComponent
      return fieldContent.name || this.field
    }
  }

  get attrs() {
    return { ...this.$attrs }
  }

  get listeners() {
    const listeners = { ...this.$listeners }
    delete listeners.input
    return listeners
  }

  get vBind() {
    if (this.isObject) {
      const fieldContent = this.fieldContent as FieldComponent
      return Object.assign({}, fieldContent.bind, this.attrs)
    }
  }

  get vOn() {
    if (this.isObject) {
      const fieldContent = this.fieldContent as FieldComponent
      return Object.assign({}, fieldContent.on, this.listeners)
    }
  }
}
