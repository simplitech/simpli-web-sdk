import { Vue } from 'vue-property-decorator'
import { Schema } from '../app'

export interface ISchema {
  $schemaSet: SchemaSet
}

export interface SchemaSet {
  [schemaName: string]: Schema
}

export interface FieldSet {
  [fieldName: string]: FieldController
}

export type FieldController = (fieldName: string, customBind?: any, customOn?: any) => FieldContent

export type FieldContent = FieldComponent | FieldData

export type FieldData = string | number | null

export interface FieldComponent<T = any> {
  is: typeof Vue
  name?: any
  bind?: any
  on?: any
  ajv?: FieldValidation<T>
}

export type FieldValidation<T = any> = T extends string
  ? ValidationString
  : T extends number
    ? ValidationNumber
    : T extends any[] ? ValidationArray : (ValidationString | ValidationNumber | ValidationArray)

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
    | 'cep'
    | 'rg'
    | 'cpf'
    | 'cnpj'
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
