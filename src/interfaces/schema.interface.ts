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

export interface FieldComponent {
  is: typeof Vue
  name?: any
  bind?: any
  on?: any
}
