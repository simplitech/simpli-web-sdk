import { omitBy } from 'lodash'
import { classToPlain } from 'class-transformer'
import { Collection } from './Collection'
import { Resource } from './Resource'
import { QueryPage } from '../../interfaces'

export class PageCollection<R extends Resource> extends Collection<R> {
  filter: any = {}
  currentPage: number | null = 0
  perPage: number | null = 20
  total: number = 0
  search: string | null = null
  orderBy: string | null = null
  asc: boolean | null = null

  /**
   * gets the last page
   */
  get lastPage() {
    return Math.floor(Math.max(this.total - 1, 0) / (this.perPage || 1))
  }

  get params() {
    const { search, currentPage, perPage, orderBy, asc, filter } = this

    const filterParams = omitBy(classToPlain(filter), (item: any) => item === null || item === '')

    const params: QueryPage = {
      query: search,
      page: currentPage,
      limit: perPage,
      orderBy: orderBy,
      ascending: asc,
    }

    return { ...params, ...filterParams } as QueryPage
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

  setSearch(val: string | null) {
    this.search = val
    return this
  }

  setOrderBy(val: string | null) {
    this.orderBy = val
    return this
  }

  setAsc(val: boolean | null) {
    this.asc = val
    return this
  }

  whole() {
    return this.setFilter({})
      .setCurrentPage(null)
      .setPerPage(null)
  }

  /**
   * Lists and Paginates the collection according to the config
   */
  async $queryPage() {
    return await this.$action
      .query(this.params)
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
      return await this.$queryPage()
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
    return await this.$queryPage()
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
    return await this.$queryPage()
  }

  /**
   * Moves to the previous page
   */
  async $queryPrevPage() {
    if (this.currentPage !== null && this.currentPage > 0) {
      this.currentPage--
      return await this.$queryPage()
    }
  }

  /**
   * Moves to the next page
   */
  async $queryNextPage() {
    if (this.currentPage !== null && this.currentPage < this.lastPage) {
      this.currentPage++
      return await this.$queryPage()
    }
  }
}
