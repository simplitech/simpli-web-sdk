const template = `
  <component
    v-if="isComponent"
    :is="is"
    v-model="value[fieldName]"
    v-bind="vBind"
    v-on="vOn"
  >
    <slot></slot>
  </component>
  <div v-else-if="fieldContent !== undefined && fieldContent !== null" v-html="fieldContent"></div>
`

import { Component, Prop, Vue, Inject } from 'vue-property-decorator'
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

  @Inject({ from: 'validator', default: null })
  validator: any

  get fieldContent() {
    const { value, schema, field, attrs, listeners } = this

    if (typeof schema === 'string') {
      const schemaObject = value.$schemaSet[schema]
      if (schemaObject) {
        return schemaObject
          .build(value, field)
          .setAttrs(attrs)
          .setListeners(listeners)
          .get()
      }
      return null
    }

    return schema
      .build(value, field)
      .setAttrs(attrs)
      .setListeners(listeners)
      .get()
  }

  get isComponent() {
    return typeof this.fieldContent === 'object'
  }

  get is() {
    if (this.isComponent) {
      const fieldContent = this.fieldContent as FieldComponent
      return fieldContent.is
    }
  }

  get fieldName() {
    if (this.isComponent) {
      const fieldContent = this.fieldContent as FieldComponent
      return fieldContent.name || this.field
    }
  }

  get vBind() {
    if (this.isComponent) {
      const fieldContent = this.fieldContent as FieldComponent
      return Object.assign({}, fieldContent.bind, this.attrs)
    }
  }

  get vOn() {
    if (this.isComponent) {
      const fieldContent = this.fieldContent as FieldComponent
      return Object.assign({}, fieldContent.on, this.listeners)
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
}
