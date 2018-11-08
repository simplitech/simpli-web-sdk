import { HttpOptions, HttpResponse } from 'vue-resource/types/vue_resource'
import { HttpBody } from './HttpBody'
import { Validator } from '../Validator'
import { IValidator, Resp } from '../../misc'

export abstract class Model extends HttpBody<Model> implements IValidator {
  /**
   * Name of entity
   */
  readonly $name: string = this.constructor.name

  async call(promise: PromiseLike<HttpResponse>): Promise<Resp<this>> {
    return super.call(promise) as Promise<Resp<this>>
  }

  async GET(uri: string, options?: HttpOptions, endpoint: boolean = true): Promise<Resp<this>> {
    return super.GET(uri, options, endpoint) as Promise<Resp<this>>
  }

  async POST(uri: string, body?: any, options?: HttpOptions, endpoint: boolean = true): Promise<Resp<this>> {
    return super.POST(uri, body, options, endpoint) as Promise<Resp<this>>
  }

  async PUT(uri: string, body?: any, options?: HttpOptions, endpoint: boolean = true): Promise<Resp<this>> {
    return super.PUT(uri, body, options, endpoint) as Promise<Resp<this>>
  }

  async DELETE(uri: string, endpoint: boolean = true, options?: HttpOptions): Promise<Resp<this>> {
    return super.DELETE(uri, endpoint, options) as Promise<Resp<this>>
  }

  /**
   * Validates resource. Shows toast if there are errors and interrupts the code
   * @returns {Promise<void>}
   */
  async validate(): Promise<void> {
    await Validator.toastValidate(this)
  }
}
