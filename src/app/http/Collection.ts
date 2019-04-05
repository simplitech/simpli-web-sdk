import { chain, values, mapKeys, snakeCase } from 'lodash'
import { unparse } from 'papaparse'
import { Type } from 'class-transformer'
import { Resource } from './Resource'
import {
  ID,
  TAG,
  ClassType,
  ResponseType,
  ResourceAction,
  SchemaOptions,
  Schema,
  SchemaVal,
  SchemaRow,
  SchemaContent,
  SchemaData,
  ICollection,
} from '../../interfaces'
import { $ } from '../../simpli'
import * as Helper from '../../helpers'

export class Collection<R extends Resource> implements ICollection {
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
   * The instance of the collection items
   */
  get instance() {
    return new this.type()
  }

  /**
   * Resource to use actions
   */
  $resource(): ResourceAction<R[]>
  $resource<T>(responseType?: ResponseType<T>): ResourceAction<T>
  $resource<T>(responseType?: ResponseType<T>) {
    if (responseType) {
      return this.instance.$resource(responseType)
    }
    return this.instance.$resource(this.items)
  }

  constructor(type: ClassType<R>) {
    this.type = type
  }

  /**
   * Lists resource from WebServer
   * @param params
   */
  async query(params?: any) {
    const fetch = () => this.$resource().query(params)
    return await $.await.run(fetch, `query${this.instance.$spinnerSuffixName || this.instance.$name}`)
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
      chain(this.instance.$schema)
        // Hide hidden properties
        .pickBy((val: SchemaVal) => (val ? (val as SchemaRow).hidden !== true : true))
        // Translate the keys
        .mapValues((val: SchemaRow, key: string) => $.t(`classes.${this.instance.$name}.columns.${key}`) as string)
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
  downloadCsv(customTitle?: string) {
    if (this.items.length <= 0) return

    const title = this.instance.translateTitle()
    const data = this.textData.map((schema: SchemaData) =>
      // Translate the keys
      mapKeys(schema, (val: SchemaVal, key: string) => this.instance.translateColumn(key))
    )

    Helper.createCsvFile(customTitle ? `${customTitle}.csv` : `${snakeCase(title)}.csv`, unparse(data))
  }

  /**
   * Prepends a empty value into the resource list
   * @param placeholder
   */
  nullableItems(placeholder: string | null = null): Array<R | null> {
    return Helper.nullableItems(this.items, placeholder) as Array<R | null>
  }

  /**
   * Get Resource by ID
   * @param id
   */
  getOne(id: ID | null): R | null {
    return Helper.getResource(this.items, id) as R | null
  }

  /**
   * Filter Resource by IDs
   * @param ids
   */
  getMany(ids: ID[]): R[] {
    return Helper.getManyResource(this.items, ids) as R[]
  }

  /**
   * Add a null item into the begin of the list
   * @param tag
   * @param useI18n
   */
  prependNull(tag: TAG, useI18n = true): this {
    return this.prepend(0, useI18n ? ($.t(tag) as string) : tag)
  }

  /**
   * Add an item into the begin of the list
   * @param id
   * @param tag
   */
  prepend(id: ID, tag: TAG): this {
    Helper.prependResource(this.items, Helper.buildResource(id, tag))
    return this
  }

  /**
   * Add an item into the end of the list
   * @param id
   * @param tag
   */
  append(id: ID, tag: TAG): this {
    Helper.appendResource(this.items, Helper.buildResource(id, tag))
    return this
  }

  /**
   * Get the first item of the list
   */
  first(): R | null {
    return Helper.firstResource(this.items) as R | null
  }

  /**
   * Get the last item of the list
   */
  last(): R | null {
    return Helper.lastResource(this.items) as R | null
  }

  /**
   * Shuffle a list of Resource
   */
  shuffle(): this {
    this.items = Helper.shuffleResource(this.items) as R[]
    return this
  }

  /**
   * Reverse a list of Resource
   */
  reverse(): this {
    this.items = Helper.reverseResource(this.items) as R[]
    return this
  }

  /**
   * Add a Resource
   * @param id
   * @param tag
   * @param index
   */
  add(id: ID, tag: TAG, index?: number) {
    Helper.addResource(this.items, Helper.buildResource(id, tag), index)
  }

  /**
   * Remove a Resource by ID
   * @param id
   */
  remove(id: ID) {
    Helper.removeResource(this.items, id)
  }
}
