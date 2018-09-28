const template = `
  <div class="form-group">
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="computedModel">
        {{ label }}
        <span>
          <slot></slot>
        </span>
      </label>
    </div>
  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ template })
export class CheckboxGroup extends Vue {
  @Prop() value?: boolean
  @Prop() label?: string

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
