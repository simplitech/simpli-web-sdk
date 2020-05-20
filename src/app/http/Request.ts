import { AxiosRequestConfig } from 'axios'
import { classToPlain, ClassTransformOptions } from 'class-transformer'
import { ResponseType } from '../../interfaces'
import { Response } from './Response'

/**
 * The Request class is responsible to make HTTP requests and serialize the response.
 * It uses [Axios](https://github.com/axios/axios) to request; therefore, you may configure an Axios instance.
 *
 * This class and [[Response]] class work together in order to make HTTP requests.
 *
 * ## Example of configuration
 * ```typescript
 * import Simpli from 'simpli-web-sdk'
 * import axios from 'axios'
 *
 * const axiosInstance = axios.create({
 *  baseURL: 'http://example.com/api'
 * })
 *
 * Simpli.axios = axiosInstance
 *
 * Simpli.install()
 * ```
 *
 * ## Example of a common usage
 * ```typescript
 * import {Request} from 'simpli-web-sdk'
 * import {User} from './User'
 *
 * async function example() {
 *   return await Request.get('path/to/url')
 *     .name('myRequest') // request name which is used in the Await component
 *     .delay(1000) // delay of the request in milliseconds
 *     .as(User) // returns a response instance which is typed as User class
 *     .getResponse() // response result which its data is a User
 * }
 * ```
 */
export class Request {
  /**
   * Assigns a new request instance which may have a custom Axios configuration.
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await new Request({url: '/path/to/url', method: 'GET'})
   *     .asAny()
   *     .getResponse()
   * }
   * ```
   * @param axiosConfig Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config)
   */
  constructor(axiosConfig: AxiosRequestConfig) {
    this.axiosConfig = axiosConfig
  }

  /**
   * Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config)
   * @hidden
   */
  readonly axiosConfig: AxiosRequestConfig

  /**
   * The name of this request which is used in [[Await]] component.
   * @hidden
   */
  requestName?: string

  /**
   * The delay of this request.
   * @hidden
   */
  requestDelay?: number

  /**
   * Creates a Request instance with the HTTP GET methods preset.
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.get('/path/to/url')
   *     .asAny()
   *     .getResponse()
   * }
   * ```
   * @param url The URL(or endpoint) of the request
   * @param axiosConfig Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config)
   */
  static get(url: string, axiosConfig?: AxiosRequestConfig) {
    const localConfig: AxiosRequestConfig = { method: 'GET', url }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  /**
   * Creates a Request instance with the HTTP DELETE methods preset.
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.delete('/path/to/url')
   *     .asAny()
   *     .getResponse()
   * }
   * ```
   * @param url The URL(or endpoint) of the request
   * @param axiosConfig Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config)
   */
  static delete(url: string, axiosConfig?: AxiosRequestConfig) {
    const localConfig: AxiosRequestConfig = { method: 'DELETE', url }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  /**
   * Creates a Request instance with the HTTP HEAD methods preset.
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.head('/path/to/url')
   *     .asAny()
   *     .getResponse()
   * }
   * ```
   * @param url The URL(or endpoint) of the request
   * @param axiosConfig Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config)
   */
  static head(url: string, axiosConfig?: AxiosRequestConfig) {
    const localConfig: AxiosRequestConfig = { method: 'HEAD', url }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  /**
   * Creates a Request instance with the HTTP POST methods preset.
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.post('/path/to/url', {})
   *     .asAny()
   *     .getResponse()
   * }
   * ```
   * @param url The URL(or endpoint) of the request
   * @param data The body params
   * @param axiosConfig Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config)
   * @param classTransformOptions
   */
  static post(
    url: string,
    data?: any,
    axiosConfig?: AxiosRequestConfig,
    classTransformOptions?: ClassTransformOptions
  ) {
    const localConfig: AxiosRequestConfig = { method: 'POST', url, data: classToPlain(data, classTransformOptions) }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  /**
   * Creates a Request instance with the HTTP PUT methods preset.
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.put('/path/to/url', {})
   *     .asAny()
   *     .getResponse()
   * }
   * ```
   * @param url The URL(or endpoint) of the request
   * @param data The body params
   * @param axiosConfig Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config)
   * @param classTransformOptions
   */
  static put(url: string, data?: any, axiosConfig?: AxiosRequestConfig, classTransformOptions?: ClassTransformOptions) {
    const localConfig: AxiosRequestConfig = { method: 'PUT', url, data: classToPlain(data, classTransformOptions) }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  /**
   * Creates a Request instance with the HTTP PATCH methods preset.
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.patch('/path/to/url', {})
   *     .asAny()
   *     .getResponse()
   * }
   * ```
   * @param url The URL(or endpoint) of the request
   * @param data The body params
   * @param axiosConfig Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config)
   * @param classTransformOptions
   */
  static patch(
    url: string,
    data?: any,
    axiosConfig?: AxiosRequestConfig,
    classTransformOptions?: ClassTransformOptions
  ) {
    const localConfig: AxiosRequestConfig = { method: 'PATCH', url, data: classToPlain(data, classTransformOptions) }
    return new Request(Object.assign(localConfig, axiosConfig))
  }

  /**
   * Returns the endpoint of the URL of this instance.
   * @hidden
   */
  get endpoint() {
    const url = this.axiosConfig.url || ''
    return url.replace(/^(?:https?:)?\/\/.*(?=\.)[^\/]*/g, '').replace(/(?=\?).*/g, '')
  }

  /**
   * Gives a name of this request which is used in [[Await]] component.
   *
   * ```typescript
   * // js file
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.get('/path/to/url')
   *     .name('foo')
   *     .asAny()
   *     .getResponse()
   * }
   * ```
   * ```html
   * <!-- html file -->
   * <await name="foo">
   *   <!-- the content is shown after the response is provided -->
   * </await>
   * ```
   * @param requestName The request name
   */
  name(requestName: string) {
    this.requestName = requestName
    return this
  }

  /**
   * Provides a delay of any request from this instance.
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.get('/path/to/url')
   *     .delay(1000)
   *     .asAny()
   *     .getResponse()
   * }
   * ```
   * @param requestDelay The delay in milliseconds
   */
  delay(requestDelay: number) {
    this.requestDelay = Math.max(requestDelay, 0)
    return this
  }

  /**
   * Creates a response instance from [[Response]] and states its type as `a given param`.
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   * import {User} from './User'
   *
   * async function example() {
   *   return await Request.get('/path/to/url')
   *     .as(User)
   *     .getResponse()
   *
   *   // or
   *
   *   const instance = new User()
   *
   *   return await Request.get('/path/to/url')
   *     .as(instance)
   *     .getResponse() // the response data will populate the instance
   * }
   * ```
   * @param responseType The response type. You may use either an instance object or a class definition.
   * If it is an instance, then the response will populate it.
   * @typeparam T Response type class for type `T`
   */
  as<T = any>(responseType?: ResponseType<T>) {
    return new Response<T>(this, responseType)
  }

  /**
   * Creates a response instance from [[Response]] and states its type as `array of a given param`.
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   * import {User} from './User'
   *
   * async function example() {
   *   return await Request.get('/path/to/url')
   *     .asArrayOf(User)
   *     .getResponse()
   *
   *   // or
   *
   *   const users: User[] = []
   *
   *   return await Request.get('/path/to/url')
   *     .asArrayOf(users)
   *     .getResponse() // the response data will populate the instance
   * }
   * ```
   * @param responseType The response type. You may use either an instance object or a class definition.
   * If it is an instance, then the response will populate it.
   * @typeparam T Response type class for type `T`
   */
  asArrayOf<T = any>(responseType?: ResponseType<T>) {
    return new Response<T[]>(this, responseType as ResponseType<any>)
  }

  /**
   * Creates a response instance from [[Response]] and states its type as `any`.
   * This is an alias of `as<any>()`
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.get('/path/to/url')
   *     .asAny()
   *     .getResponse()
   * }
   * ```
   */
  asAny() {
    return new Response<any>(this)
  }

  /**
   * Creates a response instance from [[Response]] and states its type as `void`.
   * This is an alias of `as<void>()`
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.get('/path/to/url')
   *     .asVoid()
   *     .getResponse()
   * }
   * ```
   */
  asVoid() {
    return new Response<void>(this)
  }

  /**
   * Creates a response instance from [[Response]] and states its type as `string`.
   * This is an alias of `as<string>()`
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.get('/path/to/url')
   *     .asString()
   *     .getResponse()
   * }
   * ```
   */
  asString() {
    return new Response<string>(this)
  }

  /**
   * Creates a response instance from [[Response]] and states its type as `number`.
   * This is an alias of `as<number>()`
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.get('/path/to/url')
   *     .asNumber()
   *     .getResponse()
   * }
   * ```
   */
  asNumber() {
    return new Response<number>(this)
  }

  /**
   * Creates a response instance from [[Response]] and states its type as `boolean`.
   * This is an alias of `as<boolean>()`
   *
   * ```typescript
   * import {Request} from 'simpli-web-sdk'
   *
   * async function example() {
   *   return await Request.get('/path/to/url')
   *     .asBoolean()
   *     .getResponse()
   * }
   * ```
   */
  asBoolean() {
    return new Response<boolean>(this)
  }
}
