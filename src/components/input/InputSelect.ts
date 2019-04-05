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
    >
      <div slot="noResult">{{ noResultLabel || $t('app.noResultFound') }}</div>
      <div slot="noOptions">{{ noOptionsLabel || $t('app.emptyList') }}</div>
    </multiselect>
  </div>
`

import { plainToClassFromExist } from 'class-transformer'
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { ID, TAG, IResource } from '../../interfaces'
import { buildResource } from '../../helpers'

type InputModel = IResource | null | IResource[]
type InputItems = Array<IResource | null>

const build = ($id: ID, $tag: TAG) => buildResource($id, $tag) as IResource

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
  placeholder!: string
  @Prop({ type: String, default: '' })
  tagPlaceholder!: string
  @Prop({ type: String, default: '' })
  selectLabel!: string
  @Prop({ type: String, default: '' })
  selectedLabel!: string
  @Prop({ type: String, default: '' })
  deselectLabel!: string
  @Prop({ type: String, default: null })
  noResultLabel!: string | null
  @Prop({ type: String, default: null })
  noOptionsLabel!: string | null

  readonly emptyResource = build(0, '')

  model: IResource | IResource[] = []
  options: InputItems = []

  @Watch('value', { immediate: true })
  valueEvent(val: InputItems) {
    if (val instanceof Array) {
      this.model = val as IResource[]
    } else {
      this.model = (val as IResource) || this.emptyResource
    }
  }

  @Watch('items', { immediate: true })
  itemsEvent(val: InputItems) {
    if (!this.isTaggable) {
      this.options = val.map((item: IResource | null) => item || this.emptyResource)
    }
  }

  get computedModel() {
    const model = this.model
    const options = this.options.filter((item: IResource | null) => !!item) as IResource[]

    if (this.isTaggable) {
      return model
    }

    if (model instanceof Array) {
      const ids = (model as IResource[]).map((item: IResource) => item.$id)
      return options.filter((item: IResource) => ids.find((id: ID) => item.$id === id))
    }

    const id = (model as IResource).$id
    return options.find((item: IResource) => item.$id === id) || null
  }

  set computedModel(val: InputModel) {
    this.model = val || this.emptyResource
    const options = this.options.filter((item: IResource | null) => !!item) as IResource[]

    if (this.isTaggable) {
      this.$emit('input', plainToClassFromExist(this.value, val || null))
      return
    }

    const model = this.model

    if (model instanceof Array) {
      const ids = (model as IResource[]).map((item: IResource) => item.$id)
      const resources = options.filter((item: IResource) => ids.find((id: ID) => item.$id === id))
      this.$emit('input', plainToClassFromExist(this.value, resources))
      return
    }

    const id = (model as IResource).$id
    const resource = options.find((item: IResource) => item.$id === id) || null
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

    const model = this.model as IResource[]

    const items: IResource[] = val
      .split(',')
      .map((value: string) => build(value.trim(), value.trim()))
      .filter((item: IResource) => !model.find((value: IResource) => value.$id === item.$id))

    model.push(...items)
    this.options.push(...items)

    this.$emit('tag', items, this.options)
    this.$emit('input', this.model)
  }

  removeEvent(val: IResource) {
    this.$emit('remove', val, this.options)
  }
}
