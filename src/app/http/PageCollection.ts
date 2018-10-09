import { HttpResponse } from 'vue-resource'
import { Collection } from './Collection'
import { Resource } from './Resource'
import { Query } from '../params/Query'
import { call } from '../../helpers'
import { Resp } from '../../misc'

export class PageCollection<T extends Resource> extends Collection<T> {
  total: number = 0
  querySearch: string = ''
  currentPage?: number = 0
  perPage?: number = 20
  orderBy: string = ''
  asc: boolean = true
  filter: object = {}

  // Set T as type
  constructor(type: any, filter?: object) {
    super(type)
    if (filter) this.filter = filter
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
  async call(promise: PromiseLike<HttpResponse>): Promise<Resp<any>> {
    return await call(this, promise)
  }

  /**
   * Lists and Paginates the collection according to the config
   */
  async search(): Promise<Resp<any>> {
    const { filter } = this
    const params = new Query(this.querySearch, this.currentPage, this.perPage, this.orderBy, this.asc)
    return await this.query({ ...(params as object), ...(filter as object) })
  }

  /**
   * Changes the orderby
   */
  async setOrderBy(column: string): Promise<Resp<any>> {
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
  async setCurrentPage(val: number): Promise<Resp<any>> {
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
  async searchByQuery(): Promise<Resp<any>> {
    if (!this.querySearch || !this.querySearch.length || this.querySearch.length > 2) {
      this.currentPage = 0
      return await this.search()
    }
    return Promise.reject('Can\'t search at this condition')
  }

  /**
   * Moves to the previous page
   */
  async prevPage(): Promise<Resp<any>> {
    if (this.currentPage !== undefined && this.currentPage > 0) {
      this.currentPage--
      return await this.search()
    }
    return Promise.reject('First page')
  }

  /**
   * Moves to the next page
   */
  async nextPage(): Promise<Resp<any>> {
    if (this.currentPage !== undefined && this.currentPage < this.lastPage) {
      this.currentPage++
      return await this.search()
    }
    return Promise.reject('Last page')
  }
}
