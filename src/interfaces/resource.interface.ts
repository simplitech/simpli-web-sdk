import { AxiosResponse } from 'axios'
import { ClassType, ID, TAG } from '../interfaces'

export type ResponseType<T> = ClassType<T> | T

export interface IResource {
  $id: ID
  $tag: TAG
}

export type ResourceActionMethod<T> = (paramsOrData?: any) => Promise<AxiosResponse<T>>

export type ResourceActionMethodExtended<T> = (params?: any, data?: any) => Promise<AxiosResponse<T>>

export interface ResourceAction<T> {
  [action: string]: ResourceActionMethod<T> | ResourceActionMethodExtended<T>
}

export interface ResourceActionConfig {
  [action: string]: {
    method: string
    url: string
  }
}
