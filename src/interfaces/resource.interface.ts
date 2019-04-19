import { Dictionary } from './general.interface'

export type ID = number | string

export type TAG = string

export type QueryFilter = Dictionary<any>

export interface QueryRouter {
  q?: string
  page?: string
  order?: string
  asc?: string
}
