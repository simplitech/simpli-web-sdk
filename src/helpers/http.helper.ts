import { HttpOptions, HttpResponse } from 'vue-resource/types/vue_resource'
import { Exclude, Expose, plainToClass, plainToClassFromExist, Type } from 'class-transformer'
import { Resp } from '../misc'
import { $ } from '../simpli'

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
 * @constructor
 */
export function ResponseFill(name?: string) {
  return Expose({ name })
}

/**
 * Hide a property during the serialization
 * @returns {(object: (Object | Function), propertyName?: string) => void}
 * @constructor
 */
export function ResponseHidden() {
  return Exclude()
}

/**
 * Get the full API URL
 * @param {string} uri
 * @returns {string}
 */
export const apiFullURL = (uri: string): string => {
  return `${$.apiURL}${uri}`
}

/**
 * Call an API using Vue-Resource then serialize the response
 * @param classOrObject
 * @param {PromiseLike<HttpResponse>} promise
 * @returns {PromiseLike<Resp<any>>}
 */
export const call = (classOrObject: any, promise: PromiseLike<HttpResponse>): PromiseLike<Resp<typeof classOrObject>> =>
  promise.then((resp: HttpResponse) => {
    const response = {
      data: undefined,
      ok: resp.ok,
      status: resp.status,
      statusText: resp.statusText,
      headers: resp.headers,
      text: resp.text,
      json: resp.json,
      blob: resp.blob,
    }

    if (typeof classOrObject === 'object') {
      // ClassObject
      response.data = plainToClassFromExist(classOrObject, resp.data) as typeof classOrObject
    } else if (typeof classOrObject === 'function') {
      // Class (Number, String, Boolean, etc.)

      if ((classOrObject as Function).name === 'String') {
        // Special case for func 'String'
        response.data = resp['bodyText'] as typeof classOrObject
      } else {
        response.data = plainToClass(classOrObject, resp.data) as typeof classOrObject
      }
    } else throw TypeError('Error: Entity should be either Class or ClassObject')

    return response
  })

/**
 * Call an API with GET method
 * @param classOrObject
 * @param {string} uri
 * @param {module:vue-resource.HttpOptions} options
 * @returns {PromiseLike<Resp<any>>}
 * @constructor
 */
export const GET = (
  classOrObject: any,
  uri: string,
  options?: HttpOptions
): PromiseLike<Resp<typeof classOrObject>> => {
  return call(classOrObject, $.http.get(apiFullURL(uri), options))
}

/**
 * Call an API with POST method
 * @param classOrObject
 * @param {string} uri
 * @param body
 * @param {module:vue-resource.HttpOptions} options
 * @returns {PromiseLike<Resp<any>>}
 * @constructor
 */
export const POST = (
  classOrObject: any,
  uri: string,
  body?: any,
  options?: HttpOptions
): PromiseLike<Resp<typeof classOrObject>> => {
  return call(classOrObject, $.http.post(apiFullURL(uri), body, options))
}

/**
 * Call an API with PUT method
 * @param classOrObject
 * @param {string} uri
 * @param body
 * @param {module:vue-resource.HttpOptions} options
 * @returns {PromiseLike<Resp<any>>}
 * @constructor
 */
export const PUT = (
  classOrObject: any,
  uri: string,
  body?: any,
  options?: HttpOptions
): PromiseLike<Resp<typeof classOrObject>> => {
  return call(classOrObject, $.http.put(apiFullURL(uri), body, options))
}

/**
 * Call an API with DELETE method
 * @param classOrObject
 * @param {string} uri
 * @param {module:vue-resource.HttpOptions} options
 * @returns {PromiseLike<Resp<any>>}
 * @constructor
 */
export const DELETE = (
  classOrObject: any,
  uri: string,
  options?: HttpOptions
): PromiseLike<Resp<typeof classOrObject>> => {
  return call(classOrObject, $.http.delete(apiFullURL(uri), options))
}
