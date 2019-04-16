import { Component, Watch, Vue } from 'vue-property-decorator'
import { $ } from '../../simpli'
import { PageCollection, Resource } from '../../app'
import { QueryRouter } from '../../interfaces'

@Component
export class MixinQueryRouter extends Vue {
  collection?: PageCollection<Resource>

  async query(query?: QueryRouter) {
    const { q, page, order, asc } = query || (this.$route.query as QueryRouter)
    const { collection } = this

    if (!collection) return

    collection
      .setSearch(q || '')
      .setCurrentPage((Number(page) || 1) - 1)
      .setOrderBy(order || '')
      .setAsc(asc !== undefined ? !!Number(asc) : true)

    return await $.await.run('query', () => collection.$queryPage())
  }

  @Watch('collection.querySearch')
  private querySearchEvent(querySearch?: string) {
    const query = { ...this.$route.query }

    if (querySearch) query.q = `${querySearch}`
    else delete query.q

    this.$router.replace({ query })
  }

  @Watch('collection.currentPage')
  private currentPageEvent(currentPage?: number) {
    const query = { ...this.$route.query }

    if (currentPage) query.page = `${currentPage + 1}`
    else delete query.page

    this.$router.replace({ query })
  }

  @Watch('collection.orderBy')
  private orderByEvent(orderBy?: string) {
    const query = { ...this.$route.query }
    const asc = this.collection ? this.collection.asc : false

    if (orderBy) {
      query.order = `${orderBy}`
      query.asc = `${asc ? 1 : 0}`
    } else {
      delete query.order
      delete query.asc
    }

    this.$router.replace({ query })
  }

  @Watch('collection.asc')
  private ascEvent(asc?: boolean) {
    const query = { ...this.$route.query }
    const orderBy = this.collection ? this.collection.orderBy : ''

    if (orderBy) {
      query.asc = `${asc ? 1 : 0}`
    } else {
      delete query.asc
    }

    this.$router.replace({ query })
  }
}
