import { InputType } from '../enums'

export type ID = number | string
export type TAG = string

export interface Schema {
  readonly [key: string]: SchemaVal
}

export type SchemaVal = SchemaRow | SchemaContent

export interface SchemaRow {
  content?: SchemaContent
  csvContent?: SchemaContent
  hidden?: boolean
  editable?: boolean
  model?: string
  inputType?: InputType
  meta?: {
    readonly [key: string]: any
  }
}

export type SchemaContent = string | number | null | undefined

export interface Resp<T> {
  data: T
  ok: boolean
  status: number
  statusText: string
  headers: Function
  text(): string
  json(): any
  blob(): Blob
}

export interface IValidator {
  validateFirstError?(): Promise<void>
  validate(): Promise<void>
}
