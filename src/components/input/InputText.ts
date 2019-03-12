const template = `
  <div class="form-group" :class="{ required: !!required }">
    <label :for="\`input-group\${_uid}\`" class="control-label">
      {{ label }}
      <slot></slot>
    </label>

    <!--Special input for date, datetime, cpf, cnpj, rg, phone, cep-->
    <input :id="\`input-group\${_uid}\`"
           v-if="['text', 'email', 'password', 'number', 'mask', 'money'].indexOf(type) == -1"
           type="tel"
           :required="!!required"
           :placeholder="placeholder"
           v-mask="presetMasked"
           v-model="computedModel"
           :disabled="disabled"
           class="form-control"
           :class="{valid: valid === true, invalid: valid === false}"
           @focus="focusEvent"
           :key="1"/>

    <!--Text input-->
    <input :id="\`input-group\${_uid}\`"
           v-else-if="type === 'text'"
           type="text"
           :maxlength="maxlength"
           :required="!!required"
           :placeholder="placeholder"
           v-model="computedModel"
           :disabled="disabled"
           class="form-control"
           :class="{valid: valid === true, invalid: valid === false}"
           @focus="focusEvent"
           :key="2"/>

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
           :key="3"/>

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
           :key="4"/>

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
           :key="5"/>

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
           :key="6"/>

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
           :key="7"/>

  </div>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import moment from 'moment'
import { $ } from '../../simpli'
import * as Helper from '../../helpers'

@Component({ template })
export class InputText extends Vue {
  @Prop({ type: [String, Number], default: null })
  value!: string | number | null

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

  model: string | number = ''

  valid: boolean | null = null

  updateNext = true

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

  get computedModel(): string | number | null {
    const { value } = this

    if (this.type === 'cpf') return Helper.cpf(value)
    else if (this.type === 'cnpj') return Helper.cnpj(value)
    else if (this.type === 'cpfCnpj') return Helper.cpfOrCnpj(value)
    else if (this.type === 'rg') return Helper.rg(value)
    else if (this.type === 'phone') return Helper.phone(value)
    else if (this.type === 'cep') return Helper.cep(value)

    if (this.type === 'money') {
      return this.model || 0
    }

    return this.model
  }

  set computedModel(val: string | number | null) {
    const isMask = this.type === 'mask'
    const preset = isMask ? this.preset || '' : this.type

    if (isMask) {
      this.modelEvent(val, true)
      this.inputEvent(val)
    } else if (preset === 'date') {
      this.populateDateValue(val)
    } else if (preset === 'datetime') {
      this.populateDatetimeValue(val)
    } else if (['cpf', 'cnpj', 'cpfCnpj', 'rg', 'phone', 'cep'].indexOf(preset) > -1) {
      this.populateWithoutMask(val)
    } else {
      this.modelEvent(val, true)
      this.inputEvent(val)
    }
  }

  created() {
    if (this.value === null) {
      this.inputEvent(this.value)
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

  inputEvent(val: string | number | null) {
    if (this.required) {
      this.$emit('input', val || '')
    } else {
      this.$emit('input', val || null)
    }

    this.updateNext = false
  }

  @Watch('value', { immediate: true })
  modelEvent(val: string | number | null, force = false) {
    if (this.updateNext || force) {
      this.model = val || ''
    }

    if (!force) {
      this.updateNext = true
    }
  }

  populateWithoutMask(val?: string | number | null) {
    const value = $.filter.removeDelimiters(Helper.toString(val))
    this.modelEvent(value, true)
    this.inputEvent(value)
  }

  populateDateValue(val?: string | number | null) {
    const value = Helper.toString(val)
    this.modelEvent(value, true)

    if (value.length < 10) {
      this.inputEvent(null)
      if (value.length === 0) {
        this.valid = null
      } else {
        this.valid = false
      }
      return
    }

    const date = moment(value, $.t('dateFormat.date') as string)
    if (date.isValid()) {
      this.inputEvent(date.format())
      this.valid = true
    }
  }

  populateDatetimeValue(val?: string | number | null) {
    const value = Helper.toString(val)
    this.modelEvent(value, true)

    if (value.length !== 10 && value.length !== 11 && value.length < 16) {
      this.inputEvent(null)
      if (value.length === 0) {
        this.valid = null
      } else {
        this.valid = false
      }
      return
    }

    const date = moment(value, $.t('dateFormat.datetime') as string)
    if (date.isValid()) {
      this.inputEvent(date.format())
      this.valid = true
    }
  }
}
