import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { plainToClass, plainToClassFromExist } from 'class-transformer'
import { Request } from './Request'
import { $ } from '../../simpli'
import { ClassType, ResponseType } from '../../interfaces'

export class Response<T = any> {
  constructor(axiosConfig: AxiosRequestConfig, responseType?: ResponseType<T>) {
    this.request = new Request(axiosConfig)
    this.responseType = responseType
  }

  readonly request: Request
  readonly responseType?: ResponseType<T>

  get axiosConfig() {
    return this.request.axiosConfig
  }

  get requestName() {
    return this.request.requestName
  }

  get requestDelay() {
    return this.request.requestDelay
  }

  get endpoint() {
    return this.request.endpoint
  }

  name(requestName: string) {
    this.request.requestName = requestName
    return this
  }

  delay(requestDelay: number) {
    this.request.requestDelay = Math.max(requestDelay, 0)
    return this
  }

  async getData() {
    return (await this.getResponse()).data
  }

  /**
   * Call an API using axios then serialize the response
   */
  async getResponse(): Promise<AxiosResponse<T>> {
    const { axiosConfig, responseType, requestName, requestDelay, endpoint } = this

    const request = () => $.axios.request(axiosConfig)
    const resp = await $.await.run(request, requestName || endpoint, requestDelay)

    if (resp.data === undefined) {
      resp.data = JSON.parse(resp.request.response || '{}')
    }

    if (responseType === undefined) {
      return resp
    }

    if (typeof responseType === 'object') {
      // ClassObject instance
      resp.data = plainToClassFromExist(responseType as T, resp.data)
    } else if (typeof responseType === 'function') {
      // Class (Number, String, Boolean, etc.)
      resp.data = plainToClass(responseType as ClassType<T>, resp.data)
    } else throw Error('Error: Entity should be either a Class or ClassObject')

    return resp
  }
}
