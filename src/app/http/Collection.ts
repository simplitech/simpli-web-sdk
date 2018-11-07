import { chain, keys, values, mapKeys, mapValues, pickBy } from 'lodash'
import { HttpResponse } from 'vue-resource/types/vue_resource'
import { unparse } from 'papaparse'
import { Type } from 'class-transformer'
import { Resource } from './Resource'
import { HttpBody } from './HttpBody'
import { Resp, Schema, SchemaVal, SchemaRow, SchemaContent } from '../../misc'
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
   * Returns translated header
   */
  get header(): object {
    return (
      chain(this.resource.$schema)
        // Hide hidden properties
        .pickBy((val: SchemaVal) => (val ? (val as SchemaRow).hidden !== true : true))
        // Translate the keys
        .mapValues((val: SchemaRow, key: string) => $.t(`classes.${this.resource.$name}.columns.${key}`) as string)
        // Get the result
        .value()
    )
  }

  /**
   * Returns translated header keys
   */
  get headerKeys(): string[] {
    return (
      chain(this.header)
        // Get the keys
        .keys()
        // Translate the keys
        .map((key: string) => $.t(`classes.${this.resource.$name}.columns.${key}`) as string)
        // Get the result
        .value()
    )
  }

  /**
   * Returns all schemas from the matrix [row] [column]
   */
  get schemas(): Schema[] {
    return this.items.map((item: R) => item.$schema)
  }

  /**
   * Returns all schemas values from the matrix [row] [column]
   */
  get schemasValues(): SchemaVal[][] {
    return this.items.map((item: R) => values(item.$schema))
  }

  /**
   * Returns all values from the matrix [row] [column]
   */
  get values(): SchemaContent[][] {
    const getContent = (val: SchemaRow): SchemaContent => val && val.content

    return this.schemasValues.map((row: SchemaVal[]) =>
      row
        // Hide hidden properties
        .filter((val: SchemaVal) => (val ? (val as SchemaRow).hidden !== true : true))
        // Map the schema to get only the content
        .map((val: SchemaVal) => getContent(val as SchemaRow) || (val as SchemaContent))
        // Transform the null content
        .map((val: SchemaContent) => (typeof val === 'object' ? '' : val))
    )
  }

  /**
   * Returns CSV data
   */
  get csvData(): Schema[] {
    const getContent = (val: SchemaRow): SchemaContent => (val && val.csvContent) || val.content

    return this.schemas.map((schema: Schema) =>
      chain(schema)
        // Translate the keys
        .mapKeys((val: SchemaVal, key: string) => $.t(`classes.${this.resource.$name}.columns.${key}`) as string)
        // Hide null content
        .pickBy((val: SchemaVal, key: string) => val && (val as SchemaRow).csvContent !== null)
        // Hide hidden properties
        .pickBy((val: SchemaVal) => (val ? (val as SchemaRow).hidden !== true : true))
        // Map the schema to get only the content
        .mapValues((val: SchemaVal) => getContent(val as SchemaRow) || (val as SchemaContent))
        // Transform the null content
        .mapValues((val: SchemaContent) => (typeof val === 'object' ? '' : val))
        // Get the result
        .value()
    )
  }

  /**
   * Downloads CSV file from its collection
   */
  downloadCsv() {
    if (this.items.length <= 0) return

    const title = $.t(`classes.${this.resource.$name}.title`) as string
    const data = this.csvData

    createCsvFile(title, unparse(data))
  }
}
