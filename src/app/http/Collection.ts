import { chain, values, mapKeys } from 'lodash'
import { HttpResponse } from 'vue-resource/types/vue_resource'
import { unparse } from 'papaparse'
import { Type } from 'class-transformer'
import { Resource } from './Resource'
import { HttpBody } from './HttpBody'
import {
  ID,
  Resp,
  ClassType,
  SchemaOptions,
  Schema,
  SchemaVal,
  SchemaRow,
  SchemaContent,
  SchemaData,
  ResourceObject,
} from '../../misc'
import { $, apiFullURL, nullableItems, getResource, filterResource, call, createCsvFile } from '../../helpers'

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
  readonly type: ClassType<R>

  /**
   * Collection ClassObject of list
   */
  get resource() {
    return new this.type()
  }

  constructor(type: ClassType<R>) {
    super()
    this.type = type
  }

  /**
   * Prepends a empty value into the resource list
   */
  nullableItems(val: R | ResourceObject | string | null = null): R[] {
    return nullableItems(this.items, val) as R[]
  }

  /**
   * Get Resource by ID
   * @param id
   */
  getResource(id: ID | null): R | null {
    return getResource(this.items, id) as R | null
  }

  /**
   * Filter Resource by IDs
   * @param ids
   */
  filterResource(ids: ID[]): R[] {
    return filterResource(this.items, ids) as R[]
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
   * Returns all schemas
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
  get headerValues(): string[] {
    return values(this.header)
  }

  /**
   * Returns formatted data
   */
  get data(): SchemaData[] {
    return this.renderSchema() as SchemaData[]
  }

  /**
   * Returns formatted CSV data
   */
  get textData(): SchemaData[] {
    return this.renderSchema({ asText: true }) as SchemaData[]
  }

  /**
   * Transform all schemas into data
   * @param options SchemaOptions
   */
  renderSchema(options: SchemaOptions = {}): (SchemaData | SchemaContent)[] {
    return this.items.map((item: R) => item.renderSchema(options))
  }

  /**
   * Downloads CSV file from its collection
   */
  downloadCsv() {
    if (this.items.length <= 0) return

    const title = $.t(`classes.${this.resource.$name}.title`) as string
    const data = this.textData.map((schema: SchemaData) =>
      // Translate the keys
      mapKeys(schema, (val: SchemaVal, key: string) => $.t(`classes.${this.resource.$name}.columns.${key}`) as string)
    )

    createCsvFile(title, unparse(data))
  }
}
