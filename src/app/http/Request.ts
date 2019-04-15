import { AxiosRequestConfig } from 'axios'
import { classToPlain } from 'class-transformer'
import { ResponseType } from '../../interfaces'
import { Response } from './Response'

/**
 * Invokes a request with the following methods:
 * get, delete, head, post, put, patch
 */
export class Request {
  constructor(axiosConfig: AxiosRequestConfig) {
    this.axiosConfig = axiosConfig
  }

  readonly axiosConfig: AxiosRequestConfig

  requestName?: string
  requestDelay?: number

  static get(url: string, axiosConfig?: AxiosRequestConfig) {
    const localConfig: AxiosRequestConfig = { method: 'GET', url }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  static delete(url: string, axiosConfig?: AxiosRequestConfig) {
    const localConfig: AxiosRequestConfig = { method: 'DELETE', url }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  static head(url: string, axiosConfig?: AxiosRequestConfig) {
    const localConfig: AxiosRequestConfig = { method: 'HEAD', url }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  static post(url: string, data?: any, axiosConfig?: AxiosRequestConfig) {
    const localConfig: AxiosRequestConfig = { method: 'POST', url, data: classToPlain(data) }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  static put(url: string, data?: any, axiosConfig?: AxiosRequestConfig) {
    const localConfig: AxiosRequestConfig = { method: 'PUT', url, data: classToPlain(data) }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  static patch(url: string, data?: any, axiosConfig?: AxiosRequestConfig) {
    const localConfig: AxiosRequestConfig = { method: 'PATCH', url, data: classToPlain(data) }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  /**
   * Transforms this 'https://example.com/foo/bar/foobar?id=0' into this '/foo/bar/foobar'
   */
  get endpoint() {
    const url = this.axiosConfig.url || ''
    return url.replace(/^(?:https?:)?\/\/.*(?=\.)[^\/]*/g, '').replace(/(?=\?).*/g, '')
  }

  name(requestName: string) {
    this.requestName = requestName
    return this
  }

  delay(requestDelay: number) {
    this.requestDelay = Math.max(requestDelay, 0)
    return this
  }

  as<T = any>(responseType?: ResponseType<T>) {
    return new Response<T>(this.axiosConfig, responseType)
  }

  asArrayOf<T = any>(responseType?: ResponseType<T>) {
    return new Response<T[]>(this.axiosConfig, responseType as ResponseType<any>)
  }

  asAny() {
    return new Response<any>(this.axiosConfig)
  }

  asVoid() {
    return new Response<void>(this.axiosConfig)
  }

  asString() {
    return new Response<string>(this.axiosConfig)
  }

  asNumber() {
    return new Response<number>(this.axiosConfig)
  }

  asBoolean() {
    return new Response<boolean>(this.axiosConfig)
  }
}
