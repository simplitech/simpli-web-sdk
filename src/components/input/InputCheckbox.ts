const template = `
  <div class="form-group">
    <div class="checkbox">
      <label>
        <input
          :type="radio ? 'radio' : 'checkbox'"
          v-model="computedModel"
          :disabled="disabled"
          :value="radioValue"
          :class="innerClass"
          @focus="focusEvent"
          @blur="blurEvent"
        />
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
  @Prop({ type: [Boolean, String, Number] })
  value?: boolean | string | number
  @Prop({ type: String })
  label?: string
  @Prop({ type: String })
  labelClass?: string
  @Prop({ type: String })
  innerClass?: string
  @Prop({ type: Boolean })
  disabled?: boolean
  @Prop({ type: Boolean })
  radio?: boolean
  @Prop({ type: [String, Number] })
  radioValue?: string | number

  get computedModel() {
    return this.value || false
  }

  set computedModel(val: boolean | string | number) {
    this.updateValue(val)
  }

  updateValue(val: boolean | string | number) {
    this.$emit('input', val)
  }

  focusEvent() {
    this.$emit('focus')
  }

  blurEvent() {
    this.$emit('blur')
  }
}
