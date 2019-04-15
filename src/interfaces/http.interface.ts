import { ClassType } from '../interfaces'
import { Request } from '../app'

export type ResponseType<T> = ClassType<T> | T

export interface ResourceAction {
  [action: string]: (paramsOrData?: any, data?: any) => Request
}

export interface ResourceActionConfig {
  [action: string]: { method: string; url: string }
}
