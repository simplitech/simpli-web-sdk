const template = `
  <input type="text"
         v-if="collection"
         class="adap-searchfield form-control"
         v-model="collection.querySearch"
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
  collection?: PageCollection<Resource>
  @Prop({ default: 500 })
  debounceTimer?: number

  get debounce() {
    const { collection } = this

    if (collection) {
      const fetch = async () => await $.await.run(() => collection.searchByQuery(), 'query')
      return debounce(fetch, this.debounceTimer)
    }
  }
}
