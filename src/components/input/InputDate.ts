const template = `
  <div class="input-group input-group--text" :class="{ 'input-group--required': required }">
    <label :for="\`input-text\${_uid}\`" class="input-group__label">
      {{ label }}
      <slot></slot>
    </label>
    <div class="horiz items-center">
      <input :id="\`input-text\${_uid}\`"
             type="date"
             v-model="valueAsInput"
             class="input-group__input input-group__input--date weight-1 mr-2"
             :class="innerClass"/>
      <a class="icon icon-close" v-show="valueAsInput" @click="emitEmpty"></a>
    </div>
  </div>
`

import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator'
import moment from 'moment'

@Component({ template })
export class InputDate extends Vue {
  @Prop({ type: String, default: null })
  value!: string | null
  @Prop({ type: String, default: null })
  label!: string | null
  @Prop({ type: Boolean, default: false })
  required!: boolean
  @Prop({ type: String, default: '' })
  innerClass!: string

  inputFromDt(dt: string | null) {
    return dt ? moment(dt).format('YYYY-MM-DD') : null // html input format
  }

  dtFromInput(dt: string | null) {
    if (!dt) {
      return null
    }

    const dtMoment = moment(dt)

    if (dtMoment.year() < 1000 || dtMoment.year() > 9999) {
      return null
    }

    return dtMoment.format()
  }

  get valueAsInput() {
    return this.value ? this.inputFromDt(this.value) : null
  }

  set valueAsInput(val) {
    if (!val) {
      return
    }

    const dt = this.dtFromInput(val)

    if (dt) {
      this.$emit('input', dt)
    }
  }

  emitEmpty() {
    this.$emit('input', null)
  }
}
