import { HttpOptions, HttpResponse } from 'vue-resource/types/vue_resource'
import { Exclude, Expose, plainToClass, classToPlain, plainToClassFromExist, Type } from 'class-transformer'
import { Resp, ClassType } from '../misc'
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
 * Get the full API URL
 * @param {string} uri
 * @returns {string}
 */
export function apiFullURL(uri: string): string {
  return `${$.apiURL}${uri}`
}

/**
 * Call an API using Vue-Resource then serialize the response
 * @param classOrObject
 * @param {PromiseLike<HttpResponse>} promise
 * @returns {PromiseLike<Resp<any>>}
 */
export function call(classOrObject: any, promise: PromiseLike<HttpResponse>): PromiseLike<any> {
  return promise.then((resp: HttpResponse) => {
    let data

    if (typeof classOrObject === 'object') {
      // ClassObject

      // Fix issue when the response item is undefined, but the current item data has a value
      const entity = new (classOrObject as any).constructor()
      const nullKeys = Object.keys(entity).filter((key: string) => entity[key] === null)
      Object.keys(nullKeys).forEach((key: string) => {
        // @ts-ignore
        if (resp.data[key] === undefined) classOrObject[key] = null
      })

      data = plainToClassFromExist(classOrObject, resp.data)
    } else if (typeof classOrObject === 'function') {
      // Class (Number, String, Boolean, etc.)
      if ((classOrObject as Function).name === 'String') {
        // Special case for func 'String'
        // @ts-ignore
        data = resp['bodyText']
      } else {
        data = plainToClass(classOrObject, resp.data)
      }
    } else throw TypeError('Error: Entity should be either Class or ClassObject')

    return {
      data,
      ok: resp.ok,
      status: resp.status,
      statusText: resp.statusText,
      headers: resp.headers,
      text: resp.text,
      json: resp.json,
      blob: resp.blob,
    }
  })
}

/**
 * Call an API with GET method
 * @param classOrObject
 * @param {string} uri
 * @param {module:vue-resource.HttpOptions} options
 * @returns {PromiseLike<Resp<any>>}
 * @constructor
 */
export function GET<T>(classOrObject: ClassType<T>, uri: string, options?: HttpOptions): PromiseLike<Resp<T>> {
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
export function POST<T>(
  classOrObject: ClassType<T>,
  uri: string,
  body?: any,
  options?: HttpOptions
): PromiseLike<Resp<T>> {
  return call(classOrObject, $.http.post(apiFullURL(uri), classToPlain(body), options))
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
export function PUT<T>(
  classOrObject: ClassType<T>,
  uri: string,
  body?: any,
  options?: HttpOptions
): PromiseLike<Resp<T>> {
  return call(classOrObject, $.http.put(apiFullURL(uri), classToPlain(body), options))
}

/**
 * Call an API with DELETE method
 * @param classOrObject
 * @param {string} uri
 * @param {module:vue-resource.HttpOptions} options
 * @returns {PromiseLike<Resp<any>>}
 * @constructor
 */
export function DELETE<T>(classOrObject: ClassType<T>, uri: string, options?: HttpOptions): PromiseLike<Resp<T>> {
  return call(classOrObject, $.http.delete(apiFullURL(uri), options))
}
