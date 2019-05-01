import { Vue } from 'vue-property-decorator'
import { Schema } from '../app'

export interface ISchema {
  $schemaSet: SchemaSet
}

export interface SchemaSet {
  [schemaRef: string]: Schema
}

export interface SchemaResult<M> {
  model: M
  fieldName: string
  attrs?: Record<string, string>
  listeners?: Record<string, Function | Function[]>
}

export interface FieldSet<M> {
  [fieldName: string]: FieldController<M>
}

export type FieldController<M> = (schema: SchemaResult<M>) => FieldContent

export type FieldContent = FieldComponent | FieldData

export type FieldData = string | number | null

export interface FieldComponent<V = any> {
  is: typeof Vue
  name?: string
  bind?: any
  on?: any
  ajv?: FieldValidation<V>
}

export type FieldValidation<V = any> = V extends string
  ? ValidationString
  : V extends number
    ? ValidationNumber
    : V extends any[] ? ValidationArray : (ValidationString | ValidationNumber | ValidationArray)

export interface ValidationNumber {
  type: 'number' | 'integer' | 'null' | Array<'number' | 'integer' | 'null'>
  min?: number
  max?: number
  exclusiveMinimum?: boolean
  exclusiveMaximum?: boolean
  multipleOf?: number
}

export interface ValidationString {
  type: 'string' | 'null' | Array<'string' | 'null'>
  minLength?: number
  maxLength?: number
  pattern?: string
  format?:
    | 'date'
    | 'datetime'
    | 'phone'
    | 'cpf'
    | 'cnpj'
    | 'cpfCnpj'
    | 'rg'
    | 'uri'
    | 'email'
    | 'hostname'
    | 'ipv4'
    | 'ipv6'
    | string
  formatMinimum?: string
  formatMaximum?: string
  formatExclusiveMinimum?: boolean
  formatExclusiveMaximum?: boolean
}

export interface ValidationArray {
  type: 'array' | 'null' | Array<'array' | 'null'>
  minItems?: number
  maxItems?: number
  uniqueItems?: boolean
  additionalItems?: boolean
}

export interface DictionaryOfValidation<T> {
  properties: {
    [k: string]: T
  }
}
