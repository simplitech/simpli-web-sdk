/**
 * ClassType
 */
export { ClassType } from 'class-transformer/ClassTransformer'

/**
 * This type represent any Enum type
 */
export type EnumType<E> = Record<keyof E, number | string> & { [k: number]: string }

/**
 * Resource ID
 */
export type ID = number | string

/**
 * Resource TAG
 */
export type TAG = string

/**
 * Dictionary
 */
export interface Dictionary<T> {
  [k: string]: T
}

/**
 * Standard format of paged request
 */
export interface QueryPage {
  query: string | null
  page: number | null
  limit: number | null
  orderBy: string | null
  ascending: boolean | null
  [param: string]: any
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
 * Data blueprint
 */
export interface DataBlueprint {
  [key: string]: string[]
}

/**
 * Normalized item
 */
export type NormalizedItem<B extends DataBlueprint> = Record<keyof B, string> & { [k: number]: string }
