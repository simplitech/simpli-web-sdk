import { AxiosResponse } from 'axios'
import { Type } from 'class-transformer'
import { ResourceCollection } from './ResourceCollection'
import { Resource } from '..'
import { ClassType } from '../../interfaces'
import { HttpExclude, RequestExpose, ResponseExpose } from '../../decorators'

@HttpExclude()
export class PageCollection<R extends Resource> extends ResourceCollection<R> {
  constructor(classType: ClassType<R>) {
    super(classType)
    this.addFilter(this)
  }

  static defaultMinCharToSearch = 3
  static defaultCurrentPage = 0
  static defaultPerPage = 20

  @RequestExpose('query')
  search: string | null = null

  @RequestExpose('page')
  currentPage: number | null = PageCollection.defaultCurrentPage

  @RequestExpose('limit')
  perPage: number | null = PageCollection.defaultPerPage

  @RequestExpose('orderBy')
  orderBy: string | null = null

  @RequestExpose('ascending')
  asc: boolean | null = null

  @Type(options => (options!.newObject as PageCollection<R>).classType)
  @ResponseExpose('items')
  protected items: R[] = []

  @ResponseExpose('total')
  readonly total: number | null = null

  get lastPage() {
    return Math.floor(Math.max((this.total || 0) - 1, 0) / (this.perPage || 1))
  }

  noPagination() {
    return this.setCurrentPage(null).setPerPage(null)
  }

  /**
   * @deprecated Use noPagination instead
   */
  whole() {
    return this.setCurrentPage(null).setPerPage(null)
  }

  setSearch(val: string | null) {
    this.search = val
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

  setOrderBy(val: string | null) {
    this.orderBy = val
    return this
  }

  setAsc(val: boolean | null) {
    this.asc = val
    return this
  }

  async queryAsPage(): Promise<AxiosResponse<this>> {
    return await this.instance.$action
      .query(this.params)
      .name(this.spinnerName)
      .as(this)
      .getResponse()
  }

  async querySearch(): Promise<AxiosResponse<this> | void> {
    if (!this.search || !this.search.length || this.search.length >= PageCollection.defaultMinCharToSearch) {
      this.currentPage = 0
      return await this.queryAsPage()
    }
    return Promise.resolve()
  }

  async queryOrderBy(column: string): Promise<AxiosResponse<this>> {
    if (this.orderBy === column) {
      this.asc = !this.asc
    } else {
      this.asc = true
    }
    this.orderBy = column
    return await this.queryAsPage()
  }

  async queryCurrentPage(val: number): Promise<AxiosResponse<this>> {
    if (val > this.lastPage) {
      this.currentPage = this.lastPage
    } else if (val < 0) {
      this.currentPage = 0
    } else this.currentPage = val
    return await this.queryAsPage()
  }

  async queryPrevPage(): Promise<AxiosResponse<this> | void> {
    if (this.currentPage !== null && this.currentPage > 0) {
      this.currentPage--
      return await this.queryAsPage()
    }
    return Promise.resolve()
  }

  async queryNextPage(): Promise<AxiosResponse<this> | void> {
    if (this.currentPage !== null && this.currentPage < this.lastPage) {
      this.currentPage++
      return await this.queryAsPage()
    }
    return Promise.resolve()
  }
}
