import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { ClassType } from '../interfaces'

export type ResponseType<T> = ClassType<T> | T

export interface RequestCaller<T = any> {
  call(config: AxiosRequestConfig): Promise<AxiosResponse<T>>
  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
  delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
  head(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
  post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
  put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
  patch(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
}

export interface ResourceAction<T = any> {
  [action: string]: (paramsOrData?: any, data?: any) => Promise<AxiosResponse<T>>
}

export interface ResourceActionConfig {
  [action: string]: { method: string; url: string }
}
