const template = `
  <div class="form-group">
    <div class="checkbox">
      <label>
        <input :type="radio ? '' : 'checkbox'" v-model="computedModel" :disabled="disabled" :value="radioValue" :class="innerClass">
        <span :class="labelClass">
          {{ label }}
          <slot></slot>
        </span>
      </label>
    </div>
  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ template })
export class InputCheckbox extends Vue {
  @Prop({ type: Boolean })
  value?: boolean
  @Prop({ type: String })
  label?: string
  @Prop({ type: String })
  labelClass?: boolean
  @Prop({ type: String })
  innerClass?: boolean
  @Prop({ type: Boolean })
  disabled?: boolean
  @Prop({ type: Boolean })
  radio?: boolean
  @Prop({ type: [String, Number] })
  radioValue?: boolean

  get computedModel() {
    return this.value || false
  }

  set computedModel(val: boolean) {
    this.updateValue(val)
  }

  updateValue(val: boolean) {
    this.$emit('input', val)
  }
}
