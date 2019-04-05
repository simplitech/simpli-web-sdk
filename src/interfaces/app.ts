import { Vue } from 'vue-property-decorator'
import { InputType } from '../enums'

/**
 * ClassType
 */
export { ClassType } from 'class-transformer/ClassTransformer'

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
  asText?: boolean
}

/**
 * Resource Schema
 */
export interface Schema {
  readonly [field: string]: SchemaVal
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
  input?: SchemaInput // use default inputs or create a custom one
  model?: string // if undefined then use the key value as model
  editable?: boolean

  // Custom data
  meta?: {
    readonly [key: string]: any
  }
}

/**
 * Resource Schema Content
 */
export type SchemaContent = SchemaTextContent | SchemaVue

/**
 * Resource Schema Text Content
 */
export type SchemaTextContent = string | number | null | undefined

/**
 * Resource Schema Input
 */
export type SchemaInput = InputType | SchemaVue | typeof Vue

/**
 * Resource Schema Content Component
 */
export interface SchemaVue {
  component: typeof Vue
  props: object
}

/**
 * Resource Schema normalized as data
 */
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
 * Paged request for router
 */
export interface QueryRouter {
  q?: string
  page?: string
  order?: string
  asc?: string
}

/**
 * This type represent any Enum type
 */
export type Enum<E> = Record<keyof E, number | string> & { [k: number]: string }

/**
 * Dictionary
 */
export interface Dictionary<T> {
  [k: string]: T
}

/**
 * Data blueprint
 */
export interface DataBlueprint {
  [key: string]: string[]
}

/**
 * Normalized item
 */
export type NormalizedItem<B extends DataBlueprint> = Record<keyof B, string> & { [k: number]: string }

export interface IValidator {
  validateFirstError?(): Promise<void>
  validate(): Promise<void>
}
