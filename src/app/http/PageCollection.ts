import { HttpResponse } from 'vue-resource/types/vue_resource'
import { omitBy } from 'lodash'
import { classToPlain } from 'class-transformer'
import { Collection } from './Collection'
import { Resource } from './Resource'
import { call } from '../../helpers'
import { Resp, QueryRequest, ClassType } from '../../misc'

export class PageCollection<R extends Resource> extends Collection<R> {
  filter: object = {}
  currentPage: number | null = null
  perPage: number | null = null
  total: number = 0
  querySearch: string = ''
  orderBy: string = ''
  asc: boolean = true
  searchFunction: (() => Promise<Resp<R[]>>) | null = null

  // Set T as type
  constructor(type: ClassType<R>, filter = {}, perPage: number | null = 20, currentPage: number | null = 0) {
    super(type)
    this.filter = filter
    this.perPage = perPage
    this.currentPage = currentPage
  }

  /**
   * gets the last page
   */
  get lastPage() {
    return Math.floor(Math.max(this.total - 1, 0) / (this.perPage || 1))
  }

  /**
   * Serializes the response body of a call to the WebServer
   * @param promise Any call of VUE RESOURCE
   */
  async call(promise: PromiseLike<HttpResponse>): Promise<Resp<this>> {
    return await call(this, promise)
  }

  /**
   * Lists and Paginates the collection according to the config
   */
  async search(): Promise<Resp<R[]>> {
    const { querySearch, currentPage, perPage, orderBy, asc, filter } = this

    // Custom search function
    if (this.searchFunction) {
      return this.searchFunction()
    }

    const filterParams = omitBy(classToPlain(filter), (item: any) => item === null || item === '')

    const params: QueryRequest = {
      query: querySearch,
      page: currentPage !== null ? currentPage : undefined,
      limit: perPage || undefined,
      orderBy: orderBy,
      ascending: asc,
    }

    return await this.query({ ...params, ...filterParams })
  }

  /**
   * Changes the orderby
   */
  async setOrderBy(column: string) {
    if (this.orderBy === column) {
      this.asc = !this.asc
    } else {
      this.asc = true
    }
    this.orderBy = column
    return await this.search()
  }

  /**
   * Changes the current page
   * @param val
   */
  async setCurrentPage(val: number) {
    if (val > this.lastPage) {
      this.currentPage = this.lastPage
    } else if (val < 0) {
      this.currentPage = 0
    } else this.currentPage = val
    return await this.search()
  }

  /**
   * Searches using query conditions
   */
  async searchByQuery() {
    if (!this.querySearch || !this.querySearch.length || this.querySearch.length > 2) {
      this.currentPage = 0
      return await this.search()
    }
  }

  /**
   * Moves to the previous page
   */
  async prevPage() {
    if (this.currentPage !== null && this.currentPage > 0) {
      this.currentPage--
      return await this.search()
    }
  }

  /**
   * Moves to the next page
   */
  async nextPage() {
    if (this.currentPage !== null && this.currentPage < this.lastPage) {
      this.currentPage++
      return await this.search()
    }
  }
}
