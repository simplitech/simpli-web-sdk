import { Component, Watch, Vue } from 'vue-property-decorator'
import { AxiosResponse } from 'axios'
import { $ } from '../../simpli'
import { PageCollection } from '../../app'
import { QueryRouter } from '../../interfaces'

@Component
export class MixinQueryRouter extends Vue {
  collection?: PageCollection<any>

  async query(query?: QueryRouter): Promise<AxiosResponse<PageCollection<any>> | null> {
    const { q, page, order, asc } = query || (this.$route.query as QueryRouter)
    const { collection } = this

    if (!collection) return null

    collection
      .setSearch(q || '')
      .setCurrentPage((Number(page) || 1) - 1)
      .setOrderBy(order || '')
      .setAsc(asc !== undefined ? !!Number(asc) : true)

    return await $.await.run('query', () => collection.queryAsPage())
  }

  @Watch('collection.search')
  private async querySearchEvent(querySearch?: string) {
    const query = { ...this.$route.query }

    if (querySearch) query.q = `${querySearch}`
    else delete query.q

    try {
      await this.$router.replace({ query })
    } catch (e) {
      /**/
    }
  }

  @Watch('collection.currentPage')
  private async currentPageEvent(currentPage?: number) {
    const query = { ...this.$route.query }

    if (currentPage) query.page = `${currentPage + 1}`
    else delete query.page

    try {
      await this.$router.replace({ query })
    } catch (e) {
      /**/
    }
  }

  @Watch('collection.orderBy')
  private async orderByEvent(orderBy?: string) {
    const query = { ...this.$route.query }
    const asc = this.collection ? this.collection.asc : false

    if (orderBy) {
      query.order = `${orderBy}`
      query.asc = `${asc ? 1 : 0}`
    } else {
      delete query.order
      delete query.asc
    }

    try {
      await this.$router.replace({ query })
    } catch (e) {
      /**/
    }
  }

  @Watch('collection.asc')
  private async ascEvent(asc?: boolean) {
    const query = { ...this.$route.query }
    const orderBy = this.collection ? this.collection.orderBy : ''

    if (orderBy) {
      query.asc = `${asc ? 1 : 0}`
    } else {
      delete query.asc
    }

    try {
      await this.$router.replace({ query })
    } catch (e) {
      /**/
    }
  }
}
