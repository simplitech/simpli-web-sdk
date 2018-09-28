import {HttpOptions, HttpResponse} from 'vue-resource'
import { $, call, clone, apiFullURL } from '../../helpers'
import { Resp } from '../../types'

export class HttpBody {
  private cls?: any

  constructor(cls?: any) {
    if (cls) this.cls = cls
    else delete this.cls
  }

  /**
   * Serializes the response body of a call to the WebServer
   * @param promise Any call of VUE RESOURCE
   */
  async call(promise: PromiseLike<HttpResponse>): Promise<Resp<any>> {
    if (this.cls) return await call(this.cls, promise)
    return await call(this, promise)
  }

  /**
   * Serializes the response body of GET method to the WebServer
   * @param uri URI endpoint
   * @param options
   * @param endpoint
   */
  async GET(uri: string, options?: HttpOptions, endpoint: boolean = true): Promise<Resp<any>> {
    return this.call($.http.get(endpoint ? apiFullURL(uri) : uri, options))
  }

  /**
   * Serializes the response body of POST method to the WebServer
   * @param uri URI endpoint
   * @param body payload
   * @param options
   * @param endpoint
   */
  async POST(uri: string, body?: any, options?: HttpOptions, endpoint: boolean = true): Promise<Resp<any>> {
    return this.call($.http.post(endpoint ? apiFullURL(uri) : uri, body, options))
  }

  /**
   * Serializes the response body of PUT method to the WebServer
   * @param uri URI endpoint
   * @param body payload
   * @param options
   * @param endpoint
   */
  async PUT(uri: string, body?: any, options?: HttpOptions, endpoint: boolean = true): Promise<Resp<any>> {
    return this.call($.http.put(endpoint ? apiFullURL(uri) : uri, body, options))
  }

  /**
   * Serializes the response body of DELETE method to the WebServer
   * @param uri URI endpoint
   * @param endpoint
   * @param options
   */
  async DELETE(uri: string, endpoint: boolean = true, options?: HttpOptions): Promise<Resp<any>> {
    return this.call($.http.delete(endpoint ? apiFullURL(uri) : uri, options))
  }

  /**
   * Clone a given entity
   * @param entity
   */
  clone(entity: any) {
    clone(this, entity)
  }
}
