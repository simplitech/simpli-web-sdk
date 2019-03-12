const template = `
  <div class="form-group" :class="{ required: !!required }">
    <label :for="\`textarea-group\${_uid}\`"
           class="control-label">
      {{ label }}
      <slot></slot>
    </label>

    <textarea 
      :id="\`textarea-group\${_uid}\`"
      :maxlength="maxlength"
      :required="!!required"
      :placeholder="placeholder"
      v-model="computedModel"
      :disabled="disabled"
      :rows="rows"
      class="form-control"
    ></textarea>
  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ template })
export class InputTextarea extends Vue {
  @Prop({ type: String, default: null })
  value!: string | null

  @Prop({ type: String })
  label?: string

  @Prop({ type: Boolean })
  required?: boolean

  @Prop({ type: [String, Number] })
  maxlength?: string | number

  @Prop({ type: String })
  placeholder?: string

  @Prop({ type: Boolean })
  disabled?: boolean

  @Prop({ type: String })
  rows?: string

  get computedModel() {
    return this.value
  }

  set computedModel(val: string | null) {
    this.updateValue(val)
  }

  updateValue(val?: string | null) {
    this.$emit('input', val)
  }
}
