import { Component, Watch, Vue } from 'vue-property-decorator'
import { $ } from '../../simpli'
import { PageCollection, Resource } from '../../app'

@Component
export class MixinQueryRouter extends Vue {
  collection?: PageCollection<Resource>

  async query(query = this.$route.query) {
    const { q, page, name, asc } = query
    if (!this.collection) return

    this.collection.querySearch = q || ''
    this.collection.currentPage = (Number(page) || 1) - 1
    this.collection.orderBy = name || ''
    this.collection.asc = !!Number(asc)

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

    this.$router.push({ query })
  }

  @Watch('collection.currentPage')
  currentPageEvent(currentPage?: number) {
    const query = { ...this.$route.query }

    if (currentPage) query.page = `${currentPage + 1}`
    else delete query.page

    this.$router.push({ query })
  }

  @Watch('collection.orderBy')
  orderByEvent(orderBy?: string) {
    const query = { ...this.$route.query }

    if (orderBy) query.name = `${orderBy}`
    else {
      delete query.name
      delete query.asc
    }

    this.$router.push({ query })
  }

  @Watch('collection.asc')
  ascEvent(asc?: boolean) {
    const query = { ...this.$route.query }

    if (query.name) query.asc = `${asc ? 1 : 0}`
    else delete query.asc

    this.$router.push({ query })
  }
}
