import { Component, Watch, Vue } from 'vue-property-decorator'
import { $ } from '../../simpli'
import { PageCollection, Resource } from '../../app'
import { QueryRouter } from '../../misc'

@Component
export class MixinQueryRouter extends Vue {
  collection?: PageCollection<Resource>

  async query(query?: QueryRouter) {
    const { q, page, order, asc } = query || this.$route.query
    if (!this.collection) return

    this.collection.querySearch = (q as string) || ''
    this.collection.currentPage = (Number(page) || 1) - 1
    this.collection.orderBy = (order as string) || ''
    this.collection.asc = asc !== undefined ? !!Number(asc) : true

    const fetch = async () => {
      if (this.collection) return await this.collection.search()
    }

    return await $.await.run(fetch, 'query')
  }

  @Watch('collection.querySearch')
  querySearchEvent(querySearch?: string) {
    const query = { ...this.$route.query }

    if (querySearch) query.q = `${querySearch}`
    else delete query.q

    this.$router.replace({ query })
  }

  @Watch('collection.currentPage')
  currentPageEvent(currentPage?: number) {
    const query = { ...this.$route.query }

    if (currentPage) query.page = `${currentPage + 1}`
    else delete query.page

    this.$router.replace({ query })
  }

  @Watch('collection.orderBy')
  orderByEvent(orderBy?: string) {
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
  ascEvent(asc?: boolean) {
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
