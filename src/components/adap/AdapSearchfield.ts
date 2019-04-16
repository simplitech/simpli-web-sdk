const template = `
  <input type="text"
         v-if="collection"
         class="adap-searchfield form-control"
         v-model="collection.search"
         @keyup="debounce()"
  />
`

import debounce from 'lodash/debounce'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { PageCollection, Resource } from '../../app'
import { $ } from '../../simpli'

@Component({ template })
export class AdapSearchfield extends Vue {
  @Prop({ required: true })
  collection!: PageCollection<Resource>

  @Prop({ type: Number, default: 500 })
  debounceTimer!: number

  @Prop({ type: String, default: 'adapQuery' })
  spinner!: string

  get debounce() {
    const fetch = async () => await $.await.run(this.spinner, () => this.collection.$querySearch())
    return debounce(fetch, this.debounceTimer)
  }
}
