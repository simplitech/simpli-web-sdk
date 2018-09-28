const template = `
  <div class="form-group" :class="{ required: !!required }">
    <label :for="\`input-group\${_uid}\`" class="control-label">
      {{ label }}
      <slot></slot>
    </label>

    <!--
    I HAD TO MAKE 5 REPEATED INPUTS WITH V-IF TO CHANGE THE THINGS THAT CAN'T BE DYNAMIC
    -->

    <input :id="\`input-group\${_uid}\`"
           v-if="['text', 'email', 'password', 'number', 'money'].indexOf(type) == -1"
           type="text"
           :maxlength="maxlength"
           :required="!!required"
           :step="step"
           :placeholder="placeholder"
           v-mask="mask"
           v-model.lazy="computedModel"
           :autofocus="autofocus"
           :disabled="disabled"
           class="form-control"/>

    <input :id="\`input-group\${_uid}\`"
           v-if="type == 'text'"
           type="text"
           :maxlength="maxlength"
           :required="!!required"
           :step="step"
           :placeholder="placeholder"
           v-model="computedModel"
           :autofocus="autofocus"
           :disabled="disabled"
           class="form-control"/>

    <input :id="\`input-group\${_uid}\`"
           v-if="type == 'email'"
           type="email"
           :maxlength="maxlength"
           :required="!!required"
           :step="step"
           :placeholder="placeholder"
           v-model="computedModel"
           :autofocus="autofocus"
           :disabled="disabled"
           class="form-control"/>

    <input :id="\`input-group\${_uid}\`"
           v-if="type == 'password'"
           type="password"
           :maxlength="maxlength"
           :required="!!required"
           :step="step"
           :placeholder="placeholder"
           v-model="computedModel"
           :autofocus="autofocus"
           :disabled="disabled"
           class="form-control"/>

    <input :id="\`input-group\${_uid}\`"
           v-if="type == 'number'"
           type="number"
           :maxlength="maxlength"
           :required="!!required"
           :step="step"
           :placeholder="placeholder"
           v-model.number="computedModel"
           :autofocus="autofocus"
           :disabled="disabled"
           class="form-control"/>

    <money :id="\`input-group\${_uid}\`"
           v-if="type == 'money'"
           v-model="computedModel"
           :maxlength="maxlength"
           :required="required != null"
           :placeholder="placeholder"
           :autofocus="autofocus"
           :disabled="disabled"
           class="form-control"
    ></money>

  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'
import { $ } from '../../simpli'
import moment from 'moment'

@Component({ template })
export class InputGroup extends Vue {
  @Prop({ type: [String, Number] })
  value?: string | number
  @Prop({ type: Boolean })
  required?: boolean
  @Prop({ type: String })
  type?: string
  @Prop({ type: String })
  maxlength?: string
  @Prop({ type: String })
  label?: string
  @Prop({ type: String })
  step?: string
  @Prop({ type: String })
  placeholder?: string
  @Prop({ type: Boolean })
  autofocus?: boolean
  @Prop({ type: Boolean })
  disabled?: boolean

  get mask() {
    if (this.type === 'date') {
      return $.t('dateFormat.datemask') as string
    } else if (this.type === 'datetime') {
      return $.t('dateFormat.datetimemask') as string
    } else if (this.type === 'cpf') {
      return $.t('format.cpf') as string
    } else if (this.type === 'cnpj') {
      return $.t('format.cnpj') as string
    } else if (this.type === 'rg') {
      return $.t('format.rg') as string
    } else if (this.type === 'phone') {
      return $.t('format.phone') as string
    } else if (this.type === 'cep') {
      return $.t('format.cep') as string
    }
    return ''
  }

  get computedModel() {
    if (this.type === 'date') {
      return this.renderDate(this.value as string)
    } else if (this.type === 'datetime') {
      return this.renderDatetime(this.value as string)
    } else if (this.type === 'cpf') {
      return $.filter.cpf(this.value as string)
    } else if (this.type === 'cnpj') {
      return $.filter.cnpj(this.value as string)
    } else if (this.type === 'rg') {
      return $.filter.rg(this.value as string)
    } else if (this.type === 'phone') {
      return $.filter.phone(this.value as string)
    } else if (this.type === 'cep') {
      return $.filter.cep(this.value as string)
    }
    return this.value || ''
  }

  set computedModel(val: string | number) {
    if (this.type === 'date') {
      this.populateDateValue(val as string)
    } else if (this.type === 'datetime') {
      this.populateDatetimeValue(val as string)
    } else if (['cpf', 'cnpj', 'rg', 'phone', 'cep'].indexOf(this.type!) > -1) {
      this.populateWithoutDelimiters(val as string)
    } else {
      this.updateValue(val)
    }
  }

  updateValue(val?: string | number) {
    this.$emit('input', val)
  }

  populateWithoutDelimiters(visual?: string) {
    this.updateValue($.filter.removeDelimiters(visual))
  }

  renderDate(date?: string) {
    if (date) {
      return moment(date).format($.t('dateFormat.date') as string)
    }
    return ''
  }

  populateDateValue(visual?: string) {
    if (!visual || !visual.length) {
      this.updateValue()
      return
    }

    const date = moment(visual, $.t('dateFormat.date') as string)

    if (date.isValid()) {
      this.updateValue(date.format())
    }
  }

  renderDatetime(date?: string) {
    if (date) {
      return moment(date).format($.t('dateFormat.datetime') as string)
    }
    return ''
  }

  populateDatetimeValue(visual?: string) {
    if (!visual || !visual.length) {
      this.updateValue()
      return
    }

    const date = moment(visual, $.t('dateFormat.datetime') as string)

    if (date.isValid()) {
      this.updateValue(date.format())
    }
  }
}
