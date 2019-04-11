const template = `
  <div class="form-group" :class="{ required: !!required }">
    <label :for="\`input-group\${_uid}\`" class="control-label">
      {{ label }}
      <slot></slot>
    </label>

    <!--Text input-->
    <input :id="\`input-group\${_uid}\`"
           v-if="type === 'text'"
           type="text"
           :maxlength="maxlength"
           :required="!!required"
           :placeholder="placeholder"
           v-model="computedModel"
           :disabled="disabled"
           class="form-control"
           :class="{valid: valid === true, invalid: valid === false}"
           @focus="focusEvent"
           @blur="blurEvent"
           :key="1"/>

    <!--Email input-->
    <input :id="\`input-group\${_uid}\`"
           v-else-if="type === 'email'"
           type="email"
           :maxlength="maxlength"
           :required="!!required"
           :placeholder="placeholder"
           v-model="computedModel"
           :disabled="disabled"
           class="form-control"
           :class="{valid: valid === true, invalid: valid === false}"
           @focus="focusEvent"
           @blur="blurEvent"
           :key="2"/>

    <!--Password input-->
    <input :id="\`input-group\${_uid}\`"
           v-else-if="type === 'password'"
           type="password"
           :maxlength="maxlength"
           :required="!!required"
           :placeholder="placeholder"
           v-model="computedModel"
           :disabled="disabled"
           class="form-control"
           :class="{valid: valid === true, invalid: valid === false}"
           @focus="focusEvent"
           @blur="blurEvent"
           :key="3"/>

    <!--Number input-->
    <input :id="\`input-group\${_uid}\`"
           v-else-if="type === 'number'"
           type="number"
           :required="!!required"
           :step="\`\${step}\`"
           :min="\`\${min}\`"
           :max="\`\${max}\`"
           :placeholder="placeholder"
           v-model.number="computedModel"
           :disabled="disabled"
           class="form-control"
           :class="{valid: valid === true, invalid: valid === false}"
           @focus="focusEvent"
           @blur="blurEvent"
           :key="4"/>

    <!--Masked input-->
    <the-mask :id="\`input-group\${_uid}\`"
           v-else-if="type === 'mask'"
           type="text"
           :required.native="!!required"
           :placeholder="placeholder"
           :mask="presetMasked || mask"
           :masked="masked"
           :tokens="tokens"
           v-model="computedModel"
           :disabled.native="disabled"
           class="form-control"
           :class="{valid: valid === true, invalid: valid === false}"
           @focus.native="focusEvent"
           @blur.native="blurEvent"
           :key="5"/>

    <!--Currency input-->
    <money :id="\`input-group\${_uid}\`"
           v-else-if="type === 'money'"
           v-model="computedModel"
           :maxlength="maxlength"
           :required="!!required"
           :placeholder="placeholder"
           :disabled="disabled"
           class="form-control"
           :class="{valid: valid === true, invalid: valid === false}"
           @focus.native="focusEvent"
           @blur.native="blurEvent"
           :key="6"/>

    <!--Special input for date, datetime, cpf, cnpj, rg, phone, cep-->
    <!--Note: In order to avoid glitch on android devices, the type is set to "tel"-->
    <input :id="\`input-group\${_uid}\`"
           v-else
           type="tel"
           :required="!!required"
           :placeholder="placeholder"
           v-mask="presetMasked"
           v-model="computedModel"
           :disabled="disabled"
           class="form-control"
           :class="{valid: valid === true, invalid: valid === false}"
           @focus="focusEvent"
           @blur="blurEvent"
           :key="7"/>

  </div>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import moment from 'moment'
import { $ } from '../../simpli'
import { Helper } from '../../main'

type InputType = string | number | null

@Component({ template })
export class InputText extends Vue {
  @Prop({ type: [String, Number], default: null })
  value!: InputType

  @Prop({ type: String, required: true, default: 'text' })
  type!: string

  @Prop({ type: Boolean })
  required?: boolean

  @Prop({ type: [String, Number] })
  maxlength?: string | number

  @Prop({ type: String })
  label?: string

  @Prop({ type: [String, Number] })
  step?: string | number

  @Prop({ type: [String, Number] })
  min?: string | number

  @Prop({ type: [String, Number] })
  max?: string | number

  @Prop({ type: String })
  placeholder?: string

  @Prop({ type: Boolean })
  autofocus?: boolean

  @Prop({ type: Boolean })
  selectall?: boolean

  @Prop({ type: Boolean })
  disabled?: boolean

  @Prop({ type: String })
  preset?: string

  @Prop({ type: [String, Array] })
  mask?: string | string[]

  @Prop({ type: Boolean })
  masked?: boolean

  @Prop({ type: Object })
  tokens?: any

  valid: boolean | null = null

  get presetMasked(): string | string[] {
    const preset = this.type === 'mask' ? this.preset : this.type

    if (preset === 'date') return $.t('dateFormat.datemask')
    else if (preset === 'datetime') return $.t('dateFormat.datetimemask')
    else if (preset === 'cpf') return $.t('format.cpf')
    else if (preset === 'cnpj') return $.t('format.cnpj')
    else if (preset === 'cpfCnpj') return [$.t('format.cpf'), $.t('format.cnpj')]
    else if (preset === 'rg') return $.t('format.rg')
    else if (preset === 'phone') return [$.t('format.phone'), $.t('format.phoneAlt')]
    else if (preset === 'cep') return $.t('format.cep')

    return ''
  }

  get reservedMasks() {
    return ['cpf', 'cnpj', 'cpfCnpj', 'rg', 'phone', 'cep']
  }

  get computedModel(): InputType {
    const { type, reservedMasks } = this

    if (type === 'date') {
      return this.inputDate
    } else if (type === 'datetime') {
      return this.inputDatetime
    } else if (reservedMasks.includes(type)) {
      return this.inputMasked
    } else if (type === 'money') {
      return this.input || 0
    } else {
      return this.input
    }
  }

  set computedModel(input: InputType) {
    const { type, reservedMasks } = this

    if (type === 'date') {
      this.inputDate = input
    } else if (type === 'datetime') {
      this.inputDatetime = input
    } else if (reservedMasks.includes(type)) {
      this.inputMasked = input
    } else {
      this.input = input
    }
  }

  get input() {
    return this.value
  }

  set input(val: InputType) {
    if (this.required) {
      this.$emit('input', val || '')
    } else {
      this.$emit('input', val || null)
    }
  }

  get inputMasked() {
    const { type } = this
    const input = this.input

    if (type === 'cpf') return Helper.cpf(input)
    else if (type === 'cnpj') return Helper.cnpj(input)
    else if (type === 'cpfCnpj') return Helper.cpfOrCnpj(input)
    else if (type === 'rg') return Helper.rg(input)
    else if (type === 'phone') return Helper.phone(input)
    else if (type === 'cep') return Helper.cep(input)

    return input
  }

  set inputMasked(input: InputType) {
    this.input = $.filter.removeDelimiters(Helper.toString(input))
  }

  date: InputType = null
  get inputDate() {
    return this.date
  }

  set inputDate(input: InputType) {
    const value = Helper.toString(input)
    const date = moment(value, $.t('dateFormat.date') as string)
    this.date = value

    if (value.length < 10) {
      this.input = null
      this.valid = value.length === 0 ? null : false
    } else if (date.isValid()) {
      this.input = date.format()
      this.valid = true
    }
  }

  datetime: InputType = null
  get inputDatetime() {
    return this.datetime
  }

  set inputDatetime(input: InputType) {
    const value = Helper.toString(input)
    const date = moment(value, $.t('dateFormat.datetime') as string)
    this.datetime = value

    if (value.length !== 10 && value.length !== 11 && value.length < 16) {
      this.input = null
      this.valid = value.length === 0 ? null : false
    } else if (date.isValid()) {
      this.input = date.format()
      this.valid = true
    }
  }

  created() {
    const { value, type } = this

    if (value === null) {
      this.input = value
    }

    if (type === 'date' || type === 'datetime') {
      const date = value ? moment(value) : null

      if (date && date.isValid()) {
        this.date = date.format($.t('dateFormat.date') as string)
        this.datetime = date.format($.t('dateFormat.datetime') as string)
      }
    }
  }

  mounted() {
    const el = this.$el.getElementsByTagName('input')[0] as HTMLInputElement
    if (el && this.autofocus) el.focus()
  }

  focusEvent() {
    const el = this.$el.getElementsByTagName('input')[0] as HTMLInputElement
    if (el && this.selectall) el.select()
    this.$emit('focus')
  }

  blurEvent() {
    this.$emit('blur')
  }
}
