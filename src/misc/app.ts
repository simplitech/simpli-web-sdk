import { Vue } from 'vue-property-decorator'
import { InputType } from '../enums'

/**
 * Resource ID
 */
export type ID = number | string

/**
 * Resource TAG
 */
export type TAG = string

/**
 * Resource Schema
 */
export interface Schema {
  readonly [key: string]: SchemaVal
}

/**
 * Resource Schema Values
 */
export type SchemaVal = SchemaRow | SchemaContent

/**
 * Resource Schema Row
 */
export interface SchemaRow {
  // For <resource-render>
  content?: SchemaContent
  textContent?: string | null
  hidden?: boolean

  // For <resource-input>
  inputType?: InputType
  editable?: boolean
  model?: string // if undefined then use the key value as model

  // Custom data
  meta?: {
    readonly [key: string]: any
  }
}

/**
 * Resource Schema Content
 */
export type SchemaContent = string | number | null | undefined | SchemaVue

/**
 * Resource Schema Content Component
 */
export interface SchemaVue {
  component: typeof Vue
  props: object
}

/**
 * Standard format of paged request
 */
export interface QueryRequest {
  query?: string
  page?: number
  limit?: number
  orderBy?: string
  ascending?: boolean
}

/**
 * Response format for all http requests
 */
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
