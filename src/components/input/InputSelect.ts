const template = `
  <div class="form-group" :class="{ required: !!required }">
    <label class="multiselect-label">
      {{ label }}
      <slot></slot>
    </label>
    <multiselect v-model="computedModel"
                 :options="options"
                 track-by="$id"
                 label="$tag"
                 :placeholder="placeholder"
                 :tagPlaceholder="tagPlaceholder"
                 :selectLabel="selectLabel"
                 :selectedLabel="selectedLabel"
                 :deselectLabel="deselectLabel"
                 :multiple="isMultiple"
                 :taggable="isTaggable"
                 :disabled="isDisabled"
                 :close-on-select="isCloseOnSelect"
                 :hide-selected="isHideSelected"
                 @tag="tagEvent"
                 @remove="removeEvent"
    />
  </div>
`

import { plainToClassFromExist } from 'class-transformer'
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { ID, TAG } from '../../misc'
import { Resource } from '../../app'
import { buildResource, objectCollect } from '../../helpers'

type InputModel = Resource | null | Resource[]
type InputItems = Array<Resource | null>

const build = ($id: ID, $tag: TAG) => buildResource($id, $tag) as Resource

@Component({ template })
export class InputSelect extends Vue {
  @Prop({ type: Boolean })
  required?: boolean
  @Prop({ type: String })
  label?: string
  @Prop({ type: Boolean })
  disabled?: boolean
  @Prop({ type: [Array, Object] })
  value?: InputModel
  @Prop({ type: Array, default: () => [] })
  items!: InputItems
  @Prop({ type: Boolean })
  taggable?: boolean
  @Prop({ type: String, default: '' })
  placeholder?: boolean
  @Prop({ type: String, default: '' })
  tagPlaceholder?: boolean
  @Prop({ type: String, default: '' })
  selectLabel?: boolean
  @Prop({ type: String, default: '' })
  selectedLabel?: boolean
  @Prop({ type: String, default: '' })
  deselectLabel?: boolean

  readonly emptyResource = build(0, '')

  model: Resource | Resource[] = []
  options: InputItems = []

  @Watch('value', { immediate: true })
  valueEvent(val: InputItems) {
    if (val instanceof Array) {
      this.model = val as Resource[]
    } else {
      this.model = (val as Resource) || this.emptyResource
    }
  }

  @Watch('items', { immediate: true })
  itemsEvent(val: InputItems) {
    if (!this.isTaggable) {
      this.options = val.map((item: Resource | null) => {
        return item ? (buildResource(item.$id, item.$tag) as Resource) : this.emptyResource
      })
    }
  }

  get computedModel() {
    const model = this.model
    const options = this.options.filter((item: Resource | null) => !!item) as Resource[]

    if (this.isTaggable) {
      return model
    }

    if (model instanceof Array) {
      const ids = (model as Resource[]).map((item: Resource) => item.$id)
      return objectCollect(options).getMany(ids) as Resource[]
    }

    const id = (model as Resource).$id
    return objectCollect(options).get(id) as Resource | null
  }

  set computedModel(val: InputModel) {
    this.model = val || this.emptyResource
    const options = this.options.filter((item: Resource | null) => !!item) as Resource[]

    if (this.isTaggable) {
      this.$emit('input', plainToClassFromExist(this.value, val || null))
      return
    }

    const model = this.model

    if (model instanceof Array) {
      const ids = (model as Resource[]).map((item: Resource) => item.$id)
      const resources = objectCollect(options).getMany(ids) as Resource[]
      this.$emit('input', plainToClassFromExist(this.value, resources))
      return
    }

    const id = (model as Resource).$id
    const resource = objectCollect(options).get(id) as Resource | null
    this.$emit('input', plainToClassFromExist(this.value, resource))
  }

  get isMultiple() {
    return this.isMultipleNotTaggable || this.isTaggable
  }

  get isMultipleNotTaggable() {
    return this.value instanceof Array && !this.isTaggable
  }

  get isTaggable() {
    return !!this.taggable
  }

  get isDisabled() {
    return !!this.disabled
  }

  get isCloseOnSelect() {
    return !this.isMultipleNotTaggable
  }

  get isHideSelected() {
    return this.isMultipleNotTaggable
  }

  tagEvent(val: string) {
    if (!(this.model instanceof Array)) throw Error('The v-model must be an Array for taggable selects')

    const model = this.model as Resource[]

    const items: Resource[] = val
      .split(',')
      .map((value: string) => build(value.trim(), value.trim()))
      .filter((item: Resource) => !model.find((value: Resource) => value.$id === item.$id))

    model.push(...items)
    this.options.push(...items)

    this.$emit('tag', items, this.options)
    this.$emit('input', this.model)
  }

  removeEvent(val: Resource) {
    this.$emit('remove', val, this.options)
  }
}
