import { omitBy } from 'lodash'
import { Type, classToPlain } from 'class-transformer'
import { Collection } from './Collection'
import { Resource } from './Resource'
import { QueryRequest, ClassType } from '../../interfaces'

export class PageCollection<R extends Resource> {
  constructor(classType: ClassType<R>) {
    this.classType = classType
    this.instance = new classType()
  }

  filter: object = {}
  currentPage: number | null = 0
  perPage: number | null = 20
  total: number = 0
  search: string = ''
  orderBy: string = ''
  asc: boolean = true

  /**
   * Items of the collection
   * @type {Array}
   */
  @Type(options => (options!.newObject as Collection<R>).classType)
  items: R[] = []

  /**
   * The class type of the collection items
   */
  readonly classType: ClassType<R>

  /**
   * The instance of the collection items
   */
  readonly instance: R

  /**
   * gets the last page
   */
  get lastPage() {
    return Math.floor(Math.max(this.total - 1, 0) / (this.perPage || 1))
  }

  /**
   * Resource to use actions
   */
  get $action() {
    return this.instance.$action
  }

  setFilter(val: any) {
    this.filter = val
    return this
  }

  setCurrentPage(val: number | null) {
    this.currentPage = val
    return this
  }

  setPerPage(val: number | null) {
    this.perPage = val
    return this
  }

  setTotal(val: number) {
    this.total = val
    return this
  }

  setSearch(val: string) {
    this.search = val
    return this
  }

  setOrderBy(val: string) {
    this.orderBy = val
    return this
  }

  setAsc(val: boolean) {
    this.asc = val
    return this
  }

  /**
   * Lists and Paginates the collection according to the config
   */
  async $query() {
    const { search, currentPage, perPage, orderBy, asc, filter } = this

    const filterParams = omitBy(classToPlain(filter), (item: any) => item === null || item === '')

    const params: QueryRequest = {
      query: search,
      page: currentPage !== null ? currentPage : undefined,
      limit: perPage || undefined,
      orderBy: orderBy,
      ascending: asc,
    }

    return await this.$action
      .query({ ...params, ...filterParams })
      .name(`query${this.instance.$spinnerSuffixName || this.instance.$name}`)
      .as(this)
      .getResponse()
  }

  /**
   * Searches using query conditions
   */
  async $querySearch() {
    if (!this.search || !this.search.length || this.search.length > 2) {
      this.currentPage = 0
      return await this.$query()
    }
  }

  /**
   * Changes the orderby
   */
  async $queryOrderBy(column: string) {
    if (this.orderBy === column) {
      this.asc = !this.asc
    } else {
      this.asc = true
    }
    this.orderBy = column
    return await this.$query()
  }

  /**
   * Changes the current page
   * @param val
   */
  async $queryCurrentPage(val: number) {
    if (val > this.lastPage) {
      this.currentPage = this.lastPage
    } else if (val < 0) {
      this.currentPage = 0
    } else this.currentPage = val
    return await this.$query()
  }

  /**
   * Moves to the previous page
   */
  async $queryPrevPage() {
    if (this.currentPage !== null && this.currentPage > 0) {
      this.currentPage--
      return await this.$query()
    }
  }

  /**
   * Moves to the next page
   */
  async $queryNextPage() {
    if (this.currentPage !== null && this.currentPage < this.lastPage) {
      this.currentPage++
      return await this.$query()
    }
  }
}
