import { ClassType } from '../interfaces'
import { Request } from '../app'

export type ResponseType<T> = ClassType<T> | T

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
