const template = `
  <div class="input-group input-group--text" :class="{ 'input-group--required': !!required, 'input-group--invalid': isInvalid }">
    <label :for="\`input-text\${_uid}\`" class="input-group__label">
      {{ label }}
      <slot></slot>
    </label>

    <!--Mask input-->
    <the-mask :id="\`input-text\${_uid}\`"
              v-if="type === 'mask'"
              v-model="computedModel"
              v-bind="vBind"
              v-on="vOn"
              v-validate="validation"
              :name="computedName"
              :class="inputClass"
              class="input-group__input input-group__input--mask"
              @focus.native="focusEvent"
              @blur.native="blurEvent"
              :key="1"
    />

    <!--Currency input-->
    <money :id="\`input-text\${_uid}\`"
           v-else-if="type === 'currency'"
           v-model="computedModel"
           v-bind="vBind"
           v-on="vOn"
           v-validate="validation"
           :name="computedName"
           :class="inputClass"
           class="input-group__input input-group__input--money"
           @focus.native="focusEvent"
           @blur.native="blurEvent"
           :key="2"
    />

    <!--Textarea input-->
    <textarea :id="\`input-text\${_uid}\`"
              v-else-if="type === 'textarea'"
              v-model="computedModel"
              v-bind="vBind"
              v-on="vOn"
              v-validate="validation"
              :ref="computedRef"
              :name="computedName"
              :class="inputClass"
              class="input-group__input input-group__input--textarea"
              @focus="focusEvent"
              @blur="blurEvent"
              :key="3"
    />

    <!--Text input-->
    <input :id="\`input-text\${_uid}\`"
           v-else
           :type="type"
           v-model="computedModel"
           v-bind="vBind"
           v-on="vOn"
           v-validate="validation"
           :ref="computedRef"
           :name="computedName"
           class="input-group__input"
           :class="[inputClass, \`input-group__input--\${type}\`]"
           @focus="focusEvent"
           @blur="blurEvent"
           :key="4"
    />
    <transition name="slide">
      <div class="input-group__error-message" v-if="isInvalid">{{ errors.first(label) }}</div>
    </transition>
  </div>
`

import { Component, Prop, Watch, Vue, Inject } from 'vue-property-decorator'
import { Dictionary, ClassType, InputType } from '../../interfaces'
import { MaskPresetConfig } from '../../app/config/MaskPresetConfig'
import { CnpjMaskPreset } from '../../app/preset/CnpjMaskPreset'
import { CpfCnpjMaskPreset } from '../../app/preset/CpfCnpjMaskPreset'
import { CpfMaskPreset } from '../../app/preset/CpfMaskPreset'
import { DateMaskPreset } from '../../app/preset/DateMaskPreset'
import { DatetimeMaskPreset } from '../../app/preset/DatetimeMaskPreset'
import { PhoneMaskPreset } from '../../app/preset/PhoneMaskPreset'
import { RgMaskPreset } from '../../app/preset/RgMaskPreset'
import { ZipcodeMaskPreset } from '../../app/preset/ZipcodeMaskPreset'

@Component({ template })
export class InputText extends Vue {
  @Prop({ type: [String, Number], default: null })
  value!: InputType

  @Prop({ type: String })
  label?: string

  @Prop({ type: String })
  name?: string

  @Prop({ type: String })
  type!: string

  @Prop({ type: Boolean })
  required?: boolean

  @Prop({ type: Boolean })
  selectall?: boolean

  @Prop({ type: String })
  inputClass?: string

  @Prop({ type: String })
  maskPreset?: string

  @Prop({ type: [String, Array] })
  mask?: string | string[]

  @Prop({ type: Boolean })
  masked?: boolean

  @Prop({ type: Object })
  tokens?: any

  @Prop({ default: null })
  validation!: any

  @Inject({ from: 'validator', default: null })
  validator: any

  preset: MaskPresetConfig = new class extends MaskPresetConfig {
    mask = []
  }()

  private static defaultPreset: Dictionary<ClassType<MaskPresetConfig>> = {
    date: DateMaskPreset,
    datetime: DatetimeMaskPreset,
    phone: PhoneMaskPreset,
    zipcode: ZipcodeMaskPreset,
    cpf: CpfMaskPreset,
    cnpj: CnpjMaskPreset,
    cpfCnpj: CpfCnpjMaskPreset,
    rg: RgMaskPreset,
  }

  static addPreset(name: string, maskPreset: ClassType<MaskPresetConfig>) {
    InputText.defaultPreset = { ...InputText.defaultPreset, ...{ [name]: maskPreset } }
  }

  @Watch('maskPreset', { immediate: true })
  maskPresetEvent(val: string | undefined) {
    if (val) {
      const constructor = InputText.defaultPreset[val]
      if (constructor) {
        this.preset = new constructor()
      }
    } else {
      this.preset = new class extends MaskPresetConfig {
        mask = []
      }()
    }
  }

  get attrs() {
    return { ...this.$attrs }
  }

  get listeners() {
    const listeners = { ...this.$listeners }
    delete listeners.input
    return listeners
  }

  get vBind() {
    const { type, attrs } = this

    let extra = {}

    if (type === 'mask' && this.mask) {
      const { mask, masked, tokens } = this
      extra = { mask, masked, tokens }
    }

    if (type === 'mask' && this.maskPreset) {
      const { mask, masked, tokens } = this.preset
      extra = { mask, masked, tokens }
    }

    return { ...attrs, ...extra }
  }

  get vOn() {
    const { listeners } = this
    return { ...listeners }
  }

  get isInvalid() {
    // @ts-ignore
    return this.preset.isValid === false || this.errors.first(this.label)
  }

  get computedName() {
    return this.name || this.label || '-'
  }

  get computedRef() {
    return this.computedName || undefined
  }

  get computedModel(): InputType {
    if (this.maskPreset) {
      return this.preset.getterTransform(this.input)
    }
    return this.input
  }

  set computedModel(input: InputType) {
    if (this.maskPreset) {
      const value = this.preset.setterTransform(input)
      if (value !== undefined) {
        this.input = value
      }
    } else {
      this.input = input
    }
  }

  get input() {
    if (this.type === 'currency') {
      return this.value || 0
    }
    return this.value
  }

  set input(val: InputType) {
    if (this.required) {
      this.$emit('input', val || '')
    } else {
      this.$emit('input', val || null)
    }
  }

  created() {
    if (this.validator) {
      this.$validator = this.validator
    }
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
