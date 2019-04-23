import { Request } from '../app'

export type ID = number | string

export type TAG = string

export interface IResource {
  $id: ID
  $tag: TAG
}

export interface ResourceAction {
  query: (params?: any) => Request
  save: (paramsOrData?: any, data?: any) => Request
  update: (paramsOrData?: any, data?: any) => Request
  remove: (params?: any) => Request
  [action: string]: (paramsOrData?: any, data?: any) => Request
}

export interface ResourceActionConfig {
  [action: string]: { method: string; url: string }
}

export interface IResourceCollection {
  allWithPlaceholder(placeholder: string | null): Array<IResource | null>

  getResource(id: ID | null): IResource | null

  getManyResource(ids: ID[]): IResource[]

  addResource(id: ID, tag: TAG, index?: number): void

  removeResource(id: ID): void

  prependResource(id: ID, tag: TAG): this

  prependNullResource(tag: TAG, useI18n: boolean): this

  appendResource(id: ID, tag: TAG): this
}
