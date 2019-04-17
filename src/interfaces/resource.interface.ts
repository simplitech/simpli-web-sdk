import { Dictionary } from './general.interface'

/**
 * Resource ID
 */
export type ID = number | string

/**
 * Resource TAG
 */
export type TAG = string

/**
 * Represents a filter
 */
export type QueryFilter = Dictionary<any>

/**
 * Paged request for router
 */
export interface QueryRouter {
  q?: string
  page?: string
  order?: string
  asc?: string
}
