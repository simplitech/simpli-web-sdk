const template = `
  <ul v-if="collection" class="adap-pagination">
    <li>
      <a @click="prev">
        <i class="icon icon-arrow-left"></i>
      </a>
    </li>

    <li :class="current === first ? 'active' : ''">
      <a @click="goto(first)">{{first}}</a>
    </li>

    <li v-if="current > first + gap + 1"><a>...</a></li>

    <li v-for="n in gap*2 + 1" v-if="index(n) > first && index(n) < last" :class="current === index(n) ? 'active' : ''">
      <a @click="goto(index(n))">{{ index(n) }}</a>
    </li>

    <li v-if="current < last - gap - 1"><a>...</a></li>

    <li :class="current === last ? 'active' : ''" v-if="last !== 1">
      <a @click="goto(last)">{{last}}</a>
    </li>

    <li>
      <a @click="next">
        <i class="icon icon-arrow-right"></i>
      </a>
    </li>
  </ul>
`

import { Component, Prop, Vue } from 'vue-property-decorator'
import { PageCollection, Resource } from '../../app'
import { $ } from '../../simpli'

@Component({ template })
export class AdapPagination extends Vue {
  @Prop({ required: true })
  collection!: PageCollection<Resource>

  @Prop({ type: Number, default: 2 })
  gap!: number

  @Prop({ type: String, default: 'adapQuery' })
  spinner!: string

  get first() {
    return 1
  }

  get current() {
    return (this.collection.currentPage || 0) + 1
  }

  get last() {
    return this.collection.lastPage + 1
  }

  async goto(n: number) {
    await this.$await.run(this.spinner, () => this.collection.$queryCurrentPage(n - 1))
  }

  async next() {
    await this.$await.run(this.spinner, () => this.collection.$queryNextPage())
  }

  async prev() {
    await this.$await.run(this.spinner, () => this.collection.$queryPrevPage())
  }

  index(n: number) {
    let pos = this.current

    if (this.current < 1 + this.gap!) {
      pos = 1 + this.gap!
    } else if (this.current > this.last - this.gap!) {
      pos = this.last - this.gap!
    }

    return n + pos - this.gap - 1
  }
}
