import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { Validator } from './Validator'
import { $ } from '../../simpli'
import { IValidator } from '../../interfaces'
import * as Helper from '../../helpers'

export abstract class Model implements IValidator {
  /**
   * Name of entity
   */
  readonly $name: string = this.constructor.name

  /**
   * Serializes the response body of GET method to the WebServer
   * @param url
   * @param config
   */
  async GET(url: string, config?: AxiosRequestConfig) {
    return Helper.request(this).get(url, config)
  }

  /**
   * Serializes the response body of POST method to the WebServer
   * @param url
   * @param data
   * @param config
   */
  async POST(url: string, data?: any, config?: AxiosRequestConfig) {
    return Helper.request(this).post(url, data, config)
  }

  /**
   * Serializes the response body of PUT method to the WebServer
   * @param url
   * @param data
   * @param config
   */
  async PUT(url: string, data?: any, config?: AxiosRequestConfig) {
    return Helper.request(this).put(url, data, config)
  }

  /**
   * Serializes the response body of DELETE method to the WebServer
   * @param url
   * @param config
   */
  async DELETE(url: string, config?: AxiosRequestConfig) {
    return Helper.request(this).delete(url, config)
  }

  /**
   * Clone this entity
   */
  clone() {
    return Helper.clone(this)
  }

  /**
   * Validates resource. Shows toast if there are errors and interrupts the code
   * @returns {Promise<void>}
   */
  async validate(): Promise<void> {
    await Validator.toastValidate(this)
  }

  /**
   * Translate the title in the dictionary
   */
  translateTitle() {
    return $.t(`classes.${this.$name}.title`) as string
  }

  /**
   * Translate a column indicated in the dictionary
   * @param column
   */
  translateColumn(column: string) {
    return $.t(`classes.${this.$name}.columns.${column}`) as string
  }
}
