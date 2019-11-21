import { Schema } from '../'
import { FieldComponent, FieldContent, FieldData, FieldValidation, SchemaResult } from '../../interfaces'

export class SchemaBuilder<M = any> implements SchemaResult<M> {
  constructor(schema: Schema, model: M, fieldName: string) {
    this.schema = schema
    this.model = model
    this.fieldName = fieldName
  }

  setAttrs(val: Record<string, string>) {
    this.attrs = val
    return this
  }

  setListeners(val: Record<string, Function | Function[]>) {
    this.listeners = val
    return this
  }

  schema: Schema
  model: M
  fieldName: string
  attrs?: Record<string, string>
  listeners?: Record<string, Function | Function[]>

  get(): FieldContent {
    const { model, fieldName, attrs, listeners } = this
    return this.schema.fieldSet[this.fieldName]({ model, fieldName, attrs, listeners })
  }

  getData(): FieldData {
    const fieldContent = this.get()
    if (typeof fieldContent === 'string' || typeof fieldContent === 'number') {
      return fieldContent
    }
    return null
  }

  getComponent<V>(): FieldComponent<V> | null {
    const fieldContent = this.get()
    if (typeof fieldContent === 'object') {
      return fieldContent
    }
    return null
  }

  getAjv<V>(): FieldValidation<V> | null {
    const component = this.getComponent<V>()
    return component && component.ajv ? component.ajv : null
  }
}
