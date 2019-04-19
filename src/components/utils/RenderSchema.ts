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
import { ISchema, FieldComponent } from '../../interfaces'

@Component({ template })
export class RenderSchema extends Vue {
  @Prop({ type: Object, required: true })
  value!: ISchema

  @Prop({ type: [String, Object], required: true })
  schema!: string | Schema

  @Prop({ type: String, required: true })
  field!: string

  @Prop({ type: Object })
  bind?: any

  @Prop({ type: Object })
  on?: any

  get fieldContent() {
    const { value, schema, field, bind, on } = this
    if (typeof schema === 'string') {
      return value.$schemaSet[schema].fieldSet[field](field, bind, on)
    }
    return schema.fieldSet[field](field, bind, on)
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

  get vBind() {
    if (this.isObject) {
      const fieldContent = this.fieldContent as FieldComponent
      return Object.assign({}, fieldContent.bind, this.bind)
    }
  }

  get vOn() {
    if (this.isObject) {
      const fieldContent = this.fieldContent as FieldComponent
      return Object.assign({}, fieldContent.on, this.on)
    }
  }
}
