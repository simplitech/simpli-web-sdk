import values from 'lodash/values'
import mapValues from 'lodash/mapValues'
import mapKeys from 'lodash/mapKeys'
import { HttpResponse } from 'vue-resource/types/vue_resource'
import { unparse } from 'papaparse'
import { Type } from 'class-transformer'
import { Resource } from './Resource'
import { HttpBody } from './HttpBody'
import { Resp, Scheme } from '../../misc'
import { $, apiFullURL, call, createCsvFile } from '../../helpers'

export class Collection<R extends Resource> extends HttpBody<Collection<R>> {
  /**
   * Items of the collection
   * @type {Array}
   */
  @Type(options => (options!.newObject as Collection<R>).type)
  items: R[] = []

  /**
   * Collection Class of list
   */
  readonly type: typeof Resource

  /**
   * Collection ClassObject of list
   */
  get resource() {
    const entity = this.type as any
    return new entity() as R
  }

  // Set R as type
  constructor(type: typeof Resource) {
    super()
    this.type = type
  }

  /**
   * Serializes the response body of a call to the WebServer
   * @param promise Any call of VUE RESOURCE
   */
  async call(promise: PromiseLike<HttpResponse>): Promise<Resp<this>> {
    const resp = await call(this.type, promise)
    this.items = resp.data
    return resp
  }

  /**
   * Lists resource from WebServer
   * @param params
   * @param spinner
   */
  async query(params?: any, spinner?: string): Promise<Resp<R[]>> {
    const fetch = async () => await this.call($.resource(apiFullURL(this.resource.$endpoint)).query(params))
    return await $.await.run(fetch, spinner || `query${this.resource.$name}`)
  }

  /**
   * Return headers with translate
   */
  get headers() {
    return mapValues(
      this.resource.scheme(),
      (val: any, key: string) => $.t(`classes.${this.resource.$name}.columns.${key}`) as string
    )
  }

  /**
   * Returns a matrix of rows and columns
   */
  get rows() {
    return this.items.map((item: R) => item.scheme()).map((scheme: Scheme) => values(scheme))
  }

  /**
   * Returns the values of a given row
   * @param i
   */
  values(i: number) {
    return this.items[i].scheme()
  }

  /**
   * Downloads CSV file from its collection
   */
  downloadCsv() {
    if (this.items.length <= 0) {
      return
    }
    const title = $.t(`classes.${this.resource.$name}.title`) as string
    const data: Scheme[] = this.items
      .map((item: R) => item.csvScheme())
      .map((scheme: Scheme) =>
        mapKeys(scheme, (val: any, key: string) => $.t(`classes.${this.resource.$name}.columns.${key}`) as string)
      )
    createCsvFile(title, unparse(data))
  }
}
