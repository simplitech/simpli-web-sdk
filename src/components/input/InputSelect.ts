const template = `
  <div class="form-group" :class="{ required: !!required }">
    <label class="multiselect-label">
      {{ label }}
      <slot></slot>
    </label>
    <div>
      <multiselect v-model="computedModel"
                   :options="computedItems"
                   track-by="$id"
                   label="$tag"
                   :multiple="multiple"
                   :close-on-select="!multiple"
                   :hide-selected="multiple"
                   :placeholder="$t('app.select')"
                   :disabled="disabled"
                   selectLabel=""
                   selectedLabel=""
                   deselectLabel=""
      >
        <div slot="noResult"></div>
      </multiselect>
    </div>
  </div>
`

import includes from 'lodash/includes'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ID } from '../../misc'
import { Resource } from '../../app'
import { plainToClassFromExist } from 'class-transformer'

@Component({ template })
export class InputSelect extends Vue {
  @Prop({ type: Boolean })
  required?: boolean
  @Prop({ type: String })
  label?: string
  @Prop({ type: Boolean })
  disabled?: boolean
  @Prop({ type: [Array, Object] })
  value?: Resource[] | Resource
  @Prop({ default: () => [] })
  items?: Resource[]

  multiple: boolean = false

  created() {
    if (this.value instanceof Array) {
      this.multiple = true
    }
  }

  get computedModel() {
    if (this.value instanceof Array) {
      const resource = (this.value || []) as Resource[]
      const ids = resource.map((item: Resource) => item.$id) as ID[]
      const selected = (this.items || []).filter((item: Resource) => includes(ids, item.$id))
      return selected.map((item: Resource) => ({
        $id: item.$id,
        $tag: item.$tag,
      }))
    }
    const resource = (this.value || {}) as Resource
    const selected = (this.items || []).find((item: Resource) => item.$id === resource.$id)
    if (selected) {
      return {
        $id: selected.$id,
        $tag: selected.$tag,
      }
    }
    return {}
  }

  set computedModel(val: object[] | object) {
    if (this.value instanceof Array) {
      const values = val as Resource[]
      const ids = values.map((item: Resource) => item.$id) as ID[]
      const selected = (this.items || []).filter((item: Resource) => includes(ids, item.$id))
      this.$emit('input', selected)
    } else {
      const nullOption = {
        $id: 0,
        $tag: '',
      }
      this.$emit('input', plainToClassFromExist(this.value!, val || nullOption))
    }
  }

  get computedItems() {
    return (this.items || []).map((item: Resource) => ({
      $id: item.$id,
      $tag: item.$tag,
    })) as object[]
  }
}
