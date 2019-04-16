import { chain, values, mapKeys, snakeCase } from 'lodash'
import { unparse } from 'papaparse'
import { Type } from 'class-transformer'
import { Resource } from './Resource'
import {
  ID,
  TAG,
  ClassType,
  SchemaOptions,
  Schema,
  SchemaVal,
  SchemaRow,
  SchemaContent,
  SchemaData,
  ICollection,
} from '../../interfaces'
import { $ } from '../../simpli'
import { Helper } from '../../main'

export class Collection<R extends Resource> implements ICollection {
  constructor(classType: ClassType<R>, items: R[] = []) {
    this.classType = classType
    this.instance = new classType()
    this.items = items
  }

  /**
   * Items of the collection
   * @type {Array}
   */
  @Type(options => (options!.newObject as Collection<R>).classType)
  private readonly items: R[]

  /**
   * The class type of the collection items
   */
  readonly classType: ClassType<R>

  /**
   * The instance of the collection items
   */
  readonly instance: R

  /**
   * Resource to use actions
   */
  get $action() {
    return this.instance.$action
  }

  /**
   * Lists resource from WebServer
   * @param params
   */
  async $query(params?: any) {
    return await this.$action
      .query(params)
      .name(`query${this.instance.$spinnerSuffixName || this.instance.$name}`)
      .as(this.items)
      .getResponse()
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
   * Returns the underlying array represented by the collection
   */
  all() {
    return this.items
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
  shuffle() {
    Helper.shuffleResource(this.items)
    return this
  }

  /**
   * Reverse a list of Resource
   */
  reverse() {
    Helper.reverseResource(this.items)
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
