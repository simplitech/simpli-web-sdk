import { classToPlain, Exclude, Expose, plainToClass, plainToClassFromExist, Type } from 'class-transformer'
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
import { $ } from '../simpli'
import {
  ResponseType,
  ClassType,
  ResourceAction,
  ResourceActionConfig,
  ResourceActionMethod,
  ResourceActionMethodExtended,
} from '../interfaces'

/**
 * Serialize nested objects
 * @param {Function} func
 * @returns {(target: any, key: string) => void}
 * @constructor
 */
export function ResponseSerialize(func: Function) {
  return Type(() => func)
}

/**
 * Show a property during the serialization
 * Note: this decorator is set by default
 * @param {string} name
 * @returns {(object: (Object | Function), propertyName?: string) => void}
 */
export function ResponseFill(name?: string) {
  return Expose({ name })
}

/**
 * Exclude a property during the serialization
 * @returns {(object: (Object | Function), propertyName?: string) => void}
 */
export function RequestExclude() {
  return Exclude({ toPlainOnly: true })
}

/**
 * Hide a property during the deserialization
 * @returns {(object: (Object | Function), propertyName?: string) => void}
 */
export function ResponseHidden() {
  return Exclude({ toClassOnly: true })
}

/**
 * Ignore the request and response of a property
 * @returns {(object: (Object | Function), propertyName?: string) => void}
 */
export function HttpIgnore() {
  return Exclude()
}

/**
 * Call an API using axios then serialize the response
 * @param responseType
 * @param axiosPromise
 */
export async function call<T>(
  axiosPromise: AxiosPromise<T>,
  responseType?: ResponseType<T>
): Promise<AxiosResponse<T>> {
  const resp = await axiosPromise

  if (resp.data === undefined) {
    resp.data = JSON.parse(resp.request.response || '{}')
  }

  if (responseType === undefined) {
    return resp as AxiosResponse<any>
  }

  if (typeof responseType === 'object') {
    // ClassObject instance
    resp.data = plainToClassFromExist(responseType as T, resp.data)
  } else if (typeof responseType === 'function') {
    // Class (Number, String, Boolean, etc.)
    resp.data = plainToClass(responseType as ClassType<T>, resp.data)
  } else throw TypeError('Error: Entity should be either a Class or ClassObject')

  return resp
}

/**
 * Call an API with GET method
 * @param responseType
 * @param url
 * @param config
 */
export function GET<T>(url: string, config?: AxiosRequestConfig, responseType?: ResponseType<T>) {
  return call($.axios.get(url, config), responseType)
}

/**
 * Call an API with POST method
 * @param responseType
 * @param url
 * @param data
 * @param config
 */
export function POST<T>(url: string, data?: any, config?: AxiosRequestConfig, responseType?: ResponseType<T>) {
  return call($.axios.post(url, classToPlain(data), config), responseType)
}

/**
 * Call an API with PUT method
 * @param responseType
 * @param url
 * @param data
 * @param config
 */
export function PUT<T>(url: string, data?: any, config?: AxiosRequestConfig, responseType?: ResponseType<T>) {
  return call($.axios.put(url, classToPlain(data), config), responseType)
}

/**
 * Call an API with DELETE method
 * @param responseType
 * @param url
 * @param config
 */
export function DELETE<T>(url: string, config?: AxiosRequestConfig, responseType?: ResponseType<T>) {
  return call($.axios.delete(url, config), responseType)
}

/**
 * Invoke a request with 4 types of methods which is:
 * GET
 * POST
 * PUT
 * DELETE
 *
 * @param responseType the class of response or the the instance class to be injected the response
 * @returns the request object
 */
export function request<T>(responseType?: ResponseType<T>) {
  return {
    get(url: string, config?: AxiosRequestConfig) {
      return GET(url, config, responseType)
    },
    post(url: string, data?: any, config?: AxiosRequestConfig) {
      return POST(url, data, config, responseType)
    },
    put(url: string, data?: any, config?: AxiosRequestConfig) {
      return PUT(url, data, config, responseType)
    },
    delete(url: string, config?: AxiosRequestConfig) {
      return DELETE(url, config, responseType)
    },
  }
}

/**
 * Create resource like object
 *
 * Default Actions
 *   get: {method: 'GET'}
 *   query: {method: 'GET'}
 *   save: {method: 'POST'}
 *   update: {method: 'PUT'}
 *   remove: {method: 'DELETE'}
 *
 * @param responseType
 * @param endpoint the resource path
 * @param actions custom actions
 * @returns the resource object
 */
export function resource<T>(
  endpoint: string,
  customActionConfig?: ResourceActionConfig,
  config: AxiosRequestConfig = {},
  responseType?: ResponseType<T>
): ResourceAction<T> {
  const action: ResourceAction<T> = {}

  const defaultActionConfig: ResourceActionConfig = {
    query: { method: 'GET', url: endpoint },
    save: { method: 'POST', url: endpoint },
    update: { method: 'PUT', url: endpoint },
    remove: { method: 'DELETE', url: endpoint },
  }

  // convert URL model into a genuine URL
  // e.g. /foo{/id1}/bar{/id2} -> /foo/10/bar/20
  const buildUrl = (url: string, params?: any) => {
    let urlResult = `${url}`

    // extract bracket params ({/id1}, {/id2}, etc.)
    const bracketParams = url.match(/{\/\w+}/g) || []
    for (const param of bracketParams) {
      const result = /{\/(\w+)}/g.exec(param)
      const paramKey = result ? result[1] : null
      const value = params && paramKey && params[paramKey] ? `/${params[paramKey]}` : ''
      urlResult = urlResult.replace(param, value)
      if (params && paramKey && params[paramKey] !== undefined) {
        delete params[paramKey]
      }
    }

    return urlResult
  }

  const actionConfig = Object.assign(defaultActionConfig, customActionConfig)
  for (const key in actionConfig) {
    const url = actionConfig[key].url
    const method = actionConfig[key].method.toLowerCase()

    const func = (...args: any[]) => {
      let params: any = {}
      let data: any = undefined

      switch (args.length) {
        case 2:
          params = args[0]
          data = args[1]
          break
        case 1:
          if (['post', 'put'].includes(method)) {
            data = args[0]
          } else {
            params = args[0]
          }
          break
        case 0:
          break
        default:
          throw Error(`Expected up to 2 arguments [params, data], got ${args.length} arguments`)
      }

      config.params = {}

      const buildedUrl = buildUrl(url, params)
      Object.assign(config.params, params)

      const fetch = () => {
        // @ts-ignore
        if (data) return request(responseType)[method](buildedUrl, data, config)
        // @ts-ignore
        return request(responseType)[method](buildedUrl, config)
      }
      return $.await.run(fetch, key)
    }

    action[key] = func as ResourceActionMethod<T> | ResourceActionMethodExtended<T>
  }

  return action
}
