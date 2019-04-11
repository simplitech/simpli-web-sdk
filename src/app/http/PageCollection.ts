import { omitBy } from 'lodash'
import { classToPlain } from 'class-transformer'
import { Collection } from './Collection'
import { Resource } from './Resource'
import { ResourceAction, ResponseType, QueryRequest, ClassType } from '../../interfaces'
import { $ } from '../../simpli'

export class PageCollection<R extends Resource> extends Collection<R> {
  filter: object = {}
  currentPage: number | null = null
  perPage: number | null = null
  total: number = 0
  querySearch: string = ''
  orderBy: string = ''
  asc: boolean = true

  // Set T as type
  constructor(type: ClassType<R>, filter = {}, perPage: number | null = 20, currentPage: number | null = 0) {
    super(type)
    this.filter = filter
    this.perPage = perPage
    this.currentPage = currentPage
  }

  /**
   * Resource to use actions
   */
  $resource(): ResourceAction<this>
  $resource<T>(responseType?: ResponseType<T>): ResourceAction<T>
  $resource() {
    return this.instance.$resource(this)
  }

  /**
   * gets the last page
   */
  get lastPage() {
    return Math.floor(Math.max(this.total - 1, 0) / (this.perPage || 1))
  }

  /**
   * Lists and Paginates the collection according to the config
   */
  async search() {
    const { querySearch, currentPage, perPage, orderBy, asc, filter } = this

    const filterParams = omitBy(classToPlain(filter), (item: any) => item === null || item === '')

    const params: QueryRequest = {
      query: querySearch,
      page: currentPage !== null ? currentPage : undefined,
      limit: perPage || undefined,
      orderBy: orderBy,
      ascending: asc,
    }

    return await this.$query({ ...params, ...filterParams })
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
