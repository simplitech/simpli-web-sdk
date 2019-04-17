import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { plainToClass, plainToClassFromExist } from 'class-transformer'
import { Request } from './Request'
import { $ } from '../../simpli'
import { ClassType, ResponseType } from '../../interfaces'

export class Response<T = any> {
  constructor(request: Request, responseType?: ResponseType<T>) {
    this.request = request
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

  /**
   * Get the data response from axios request
   */
  async getData() {
    return (await this.getResponse()).data
  }

  /**
   * Get the response from axios request
   */
  async getResponse(onResponse?: (resp: AxiosResponse<T>) => void): Promise<AxiosResponse<T>> {
    const { axiosConfig, responseType, requestName, requestDelay, endpoint } = this

    const request = () => $.axios.request(axiosConfig)
    const resp = await $.await.run(requestName || endpoint, request, requestDelay)

    if (onResponse) onResponse(resp)

    if (resp.data === undefined) {
      resp.data = JSON.parse(resp.request.response || '{}')
    }

    if (responseType === undefined) {
      return resp
    }

    if (typeof responseType === 'object') {
      // Class object instance from constructor (new CustomClass())
      // The instance will be automatically populated
      resp.data = plainToClassFromExist(responseType as T, resp.data)
    } else if (typeof responseType === 'function') {
      // Class constructor (CustomClass, Number, String, Boolean, etc.)
      resp.data = plainToClass(responseType as ClassType<T>, resp.data)
    } else throw Error('Error: Entity should be either a Class or ClassObject')

    return resp
  }
}
