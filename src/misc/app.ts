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
 * Resource Schema Options
 */
export interface SchemaOptions {
  field?: string
  index?: number
  textContent?: boolean
}

/**
 * Resource Schema
 */
export interface Schema {
  readonly [key: string]: SchemaVal
}

/**
 * Resource Schema Values
 */
export type SchemaVal = SchemaRow | SchemaContent | SchemaContent[]

/**
 * Resource Schema Row
 */
export interface SchemaRow {
  // For <resource-render>
  content?: SchemaContent | SchemaContent[]
  textContent?: SchemaTextContent // used for csv
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
 * Resource Schema Text Content
 */
export type SchemaTextContent = string | number | null | undefined

/**
 * Resource Schema Content
 */
export type SchemaContent = SchemaTextContent | SchemaVue

/**
 * Resource Schema Content Component
 */
export interface SchemaVue {
  component: typeof Vue
  props: object
}

export interface SchemaData {
  [field: string]: SchemaContent
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
