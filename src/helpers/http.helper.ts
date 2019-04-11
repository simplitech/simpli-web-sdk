import { classToPlain, Exclude, Expose, plainToClass, plainToClassFromExist, Type } from 'class-transformer'
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
import { $ } from '../simpli'
import { ResponseType, ClassType, RequestCaller, ResourceAction, ResourceActionConfig } from '../interfaces'

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
 * Transforms this 'https://example.com/foo/bar/foobar?id=0' into this '/foo/bar/foobar'
 * @param route
 */
export function getEndpoint(url?: string) {
  if (!url) return
  return url.replace(/^(?:https?:)?\/\/.*(?=\.)[^\/]*/g, '').replace(/(?=\?).*/g, '')
}

/**
 * Call an API using axios then serialize the response
 * @param axiosPromise
 * @param responseType the class of response or the the instance class to be injected the response
 */
export function call(axiosPromise: AxiosPromise): Promise<AxiosResponse>
export function call<T>(axiosPromise: AxiosPromise<T>, responseType?: ResponseType<T>): Promise<AxiosResponse<T>>
export async function call<T>(axiosPromise: AxiosPromise<T>, responseType?: ResponseType<T>) {
  const resp = await axiosPromise

  if (resp.data === undefined) {
    resp.data = JSON.parse(resp.request.response || '{}')
  }

  if (responseType === undefined) {
    return resp as AxiosResponse
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
 * Invokes a request with the following methods:
 * call(generic), get, delete, head, post, put, patch
 *
 * @param responseType the class of response or the the instance class to be injected the response
 */
export function request(): RequestCaller
export function request<T>(responseType?: ResponseType<T>): RequestCaller<T>
export function request<T>(responseType?: ResponseType<T>) {
  return {
    async call(axiosConfig: AxiosRequestConfig) {
      const fetch = () => call($.axios.request(axiosConfig), responseType)
      return await $.await.run(fetch, getEndpoint(axiosConfig.url))
    },
    async get(url: string, axiosConfig?: AxiosRequestConfig) {
      const fetch = () => call($.axios.get(url, axiosConfig), responseType)
      return await $.await.run(fetch, getEndpoint(url))
    },
    async delete(url: string, axiosConfig?: AxiosRequestConfig) {
      const fetch = () => call($.axios.delete(url, axiosConfig), responseType)
      return await $.await.run(fetch, getEndpoint(url))
    },
    async head(url: string, axiosConfig?: AxiosRequestConfig) {
      const fetch = () => call($.axios.head(url, axiosConfig), responseType)
      return await $.await.run(fetch, getEndpoint(url))
    },
    async post(url: string, data?: any, axiosConfig?: AxiosRequestConfig) {
      const fetch = () => call($.axios.post(url, classToPlain(data), axiosConfig), responseType)
      return await $.await.run(fetch, getEndpoint(url))
    },
    async put(url: string, data?: any, axiosConfig?: AxiosRequestConfig) {
      const fetch = () => call($.axios.put(url, classToPlain(data), axiosConfig), responseType)
      return await $.await.run(fetch, getEndpoint(url))
    },
    async patch(url: string, data?: any, axiosConfig?: AxiosRequestConfig) {
      const fetch = () => call($.axios.patch(url, classToPlain(data), axiosConfig), responseType)
      return await $.await.run(fetch, getEndpoint(url))
    },
  }
}

/**
 * Create resource like object
 *
 * Default Actions
 *   query: {method: 'GET', url: endpoint}
 *   save: {method: 'POST', url: endpoint}
 *   update: {method: 'PUT', url: endpoint}
 *   remove: {method: 'DELETE', url: endpoint}
 *
 * @param endpoint the resource path
 * @param customActionConfig
 * @param axiosConfig
 * @param responseType the class of response or the the instance class to be injected the response
 */
export function resource(endpoint: string): ResourceAction
export function resource<T>(
  endpoint: string,
  customActionConfig?: ResourceActionConfig,
  axiosConfig?: AxiosRequestConfig,
  responseType?: ResponseType<T>
): ResourceAction<T>
export function resource<T>(
  endpoint: string,
  customActionConfig: ResourceActionConfig = {},
  axiosConfig: AxiosRequestConfig = {},
  responseType?: ResponseType<T>
) {
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
          if (['post', 'put', 'patch'].includes(method)) {
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

      axiosConfig.params = {}

      const buildedUrl = buildUrl(url, params)
      Object.assign(axiosConfig.params, params)

      const fetch = () => {
        // @ts-ignore
        if (data) return request(responseType)[method](buildedUrl, data, axiosConfig) as Promise<AxiosResponse<T>>
        // @ts-ignore
        return request(responseType)[method](buildedUrl, axiosConfig) as Promise<AxiosResponse<T>>
      }
      return $.await.run(fetch, key)
    }

    action[key] = func
  }

  return action as ResourceAction<T>
}
