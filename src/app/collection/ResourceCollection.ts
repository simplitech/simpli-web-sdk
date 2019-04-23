import { AxiosResponse } from 'axios'
import { omitBy, mapKeys, snakeCase } from 'lodash'
import { unparse } from 'papaparse'
import { classToPlain } from 'class-transformer'
import { Collection } from './Collection'
import { Resource } from '..'
import {
  ID,
  TAG,
  ClassType,
  Dictionary,
  FieldData,
  IResourceCollection,
  QueryFilter,
  ResponseType,
} from '../../interfaces'
import { $ } from '../../simpli'
import { Helper } from '../../main'

export class ResourceCollection<R extends Resource> extends Collection<R> implements IResourceCollection {
  constructor(classType: ClassType<R>, items?: R[]) {
    super(items)
    this.classType = classType
    this.instance = new classType()
  }

  protected items: R[] = []

  protected readonly filters: QueryFilter[] = []

  readonly classType: ClassType<R>

  readonly instance: R

  get params(): Dictionary<any> {
    const result: QueryFilter = {}

    for (const filter of this.filters) {
      const params = omitBy(classToPlain(filter), item => item === null) as QueryFilter
      Object.assign(result, params)
    }

    return result
  }

  get spinnerName() {
    return this.instance.$getSpinnerName('query')
  }

  async queryAsArray(): Promise<AxiosResponse<R[]>> {
    return await this.instance.$action
      .query(this.params)
      .name(this.spinnerName)
      .as(this.items)
      .getResponse(() => (this.items = []))
  }

  async queryAs<T>(responseType: ResponseType<T>): Promise<AxiosResponse<T>> {
    return await this.instance.$action
      .query(this.params)
      .name(this.spinnerName)
      .as(responseType)
      .getResponse()
  }

  addFilter(filter: QueryFilter) {
    this.filters.push(filter)
    return this
  }

  headerFrom(schemaRef: string): Dictionary<string> {
    return this.instance.$headerFrom(schemaRef)
  }

  dataFrom(schemaRef: string): Array<Dictionary<FieldData>> {
    const data: Array<Dictionary<FieldData>> = []

    for (const item of this.items) {
      data.push(item.$dataFrom(schemaRef))
    }

    return data
  }

  downloadCsv(customTitle?: string, schemaRef = 'csv') {
    if (this.items.length <= 0) return

    const title = this.instance.$getSchemaName(schemaRef) || 'document'
    const data = this.dataFrom(schemaRef).map(data =>
      // Translate the keys
      mapKeys(data, (val, fieldName) => this.instance.$translateFrom(schemaRef, fieldName))
    )

    Helper.createCsvFile(customTitle ? `${customTitle}.csv` : `${snakeCase(title)}.csv`, unparse(data))
  }

  allWithPlaceholder(placeholder: string | null = null): Array<R | null> {
    return Helper.allWithPlaceholder(this.items, placeholder) as Array<R | null>
  }

  getResource(id: ID | null): R | null {
    return Helper.getResource(this.items, id) as R | null
  }

  getManyResource(ids: ID[]): R[] {
    return Helper.getManyResource(this.items, ids) as R[]
  }

  addResource(id: ID, tag: TAG, index?: number) {
    Helper.addResource(this.items, Helper.buildResource(id, tag), index)
  }

  removeResource(id: ID) {
    Helper.removeResource(this.items, id)
  }

  prependResource(id: ID, tag: TAG): this {
    Helper.prependResource(this.items, Helper.buildResource(id, tag))
    return this
  }

  prependNullResource(tag: TAG, useI18n = true): this {
    return this.prependResource(0, useI18n ? ($.t(tag) as string) : tag)
  }

  appendResource(id: ID, tag: TAG): this {
    Helper.appendResource(this.items, Helper.buildResource(id, tag))
    return this
  }
}
