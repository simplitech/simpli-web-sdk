import { omitBy, chain, values, mapKeys, snakeCase } from 'lodash'
import { unparse } from 'papaparse'
import { classToPlain } from 'class-transformer'
import { Collection } from './Collection'
import { Resource } from '..'
import {
  ID,
  TAG,
  ClassType,
  IResourceCollection,
  QueryFilter,
  ResponseType,
  SchemaOptions,
  Schema,
  SchemaVal,
  SchemaRow,
  SchemaContent,
  SchemaData,
} from '../../interfaces'
import { $ } from '../../simpli'
import { Helper } from '../../main'

export class ResourceCollection<R extends Resource> extends Collection<R> implements IResourceCollection {
  constructor(classType: ClassType<R>, items?: R[]) {
    super(items)
    this.classType = classType
    this.instance = new classType()
  }

  /**
   * Filters
   */
  protected readonly filters: QueryFilter[] = []

  /**
   * The class type of the collection items
   */
  readonly classType: ClassType<R>

  /**
   * The instance of the collection items
   */
  readonly instance: R

  /**
   * Params
   */
  get params() {
    const result: QueryFilter = {}

    for (const filter of this.filters) {
      const params = omitBy(classToPlain(filter), item => item === null) as QueryFilter
      Object.assign(result, params)
    }

    return result
  }

  /**
   * Spinner name
   */
  get spinnerName() {
    return `query${this.instance.$spinnerSuffixName || this.instance.$name}`
  }

  /**
   * Query as array of items
   */
  async queryAsArray() {
    return await this.instance.$action
      .query(this.params)
      .name(this.spinnerName)
      .as(this.items)
      .getResponse()
  }

  /**
   * Query as
   * @param responseType
   */
  async queryAs<T>(responseType: ResponseType<T>) {
    return await this.instance.$action
      .query(this.params)
      .name(this.spinnerName)
      .as(responseType)
      .getResponse()
  }

  /**
   * Add filter
   * @param filter
   */
  addFilter(filter: QueryFilter) {
    this.filters.push(filter)
    return this
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
    return this.items.map((item: R) => item.$renderSchema(options))
  }

  /**
   * Downloads CSV file from its collection
   */
  downloadCsv(customTitle?: string) {
    if (this.items.length <= 0) return

    const title = this.instance.$translateTitle()
    const data = this.textData.map((schema: SchemaData) =>
      // Translate the keys
      mapKeys(schema, (val: SchemaVal, key: string) => this.instance.$translateColumn(key))
    )

    Helper.createCsvFile(customTitle ? `${customTitle}.csv` : `${snakeCase(title)}.csv`, unparse(data))
  }

  /**
   * Prepends a empty value into the resource list
   * @param placeholder
   */
  allWithPlaceholder(placeholder: string | null = null): Array<R | null> {
    return Helper.allWithPlaceholder(this.items, placeholder) as Array<R | null>
  }

  /**
   * Get Resource by ID
   * @param id
   */
  getResource(id: ID | null): R | null {
    return Helper.getResource(this.items, id) as R | null
  }

  /**
   * Filter Resource by IDs
   * @param ids
   */
  getManyResource(ids: ID[]): R[] {
    return Helper.getManyResource(this.items, ids) as R[]
  }

  /**
   * Add a Resource
   * @param id
   * @param tag
   * @param index
   */
  addResource(id: ID, tag: TAG, index?: number) {
    Helper.addResource(this.items, Helper.buildResource(id, tag), index)
  }

  /**
   * Remove a Resource by ID
   * @param id
   */
  removeResource(id: ID) {
    Helper.removeResource(this.items, id)
  }

  /**
   * Add an item into the begin of the list
   * @param id
   * @param tag
   */
  prependResource(id: ID, tag: TAG): this {
    Helper.prependResource(this.items, Helper.buildResource(id, tag))
    return this
  }

  /**
   * Add a null item into the begin of the list
   * @param tag
   * @param useI18n
   */
  prependNullResource(tag: TAG, useI18n = true): this {
    return this.prependResource(0, useI18n ? ($.t(tag) as string) : tag)
  }

  /**
   * Add an item into the end of the list
   * @param id
   * @param tag
   */
  appendResource(id: ID, tag: TAG): this {
    Helper.appendResource(this.items, Helper.buildResource(id, tag))
    return this
  }
}
