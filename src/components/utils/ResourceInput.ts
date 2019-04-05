const template = `
  <div class="resource-input">
    <template v-if="schemaRow">
    
      <component 
        v-if="isComponent" :key="1"
        :is="schemaRow.input"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :maxlength="maxlength || (schemaRow.meta && schemaRow.meta.maxlength)"
        :step="schemaRow.meta && schemaRow.meta.step"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        :items="selectItems || []"
      />

      <component 
        v-else-if="isComponentFromSchemaVue" :key="2"
        :is="schemaRow.input.component"
        v-bind="schemaRow.input.props || {}"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :maxlength="maxlength || (schemaRow.meta && schemaRow.meta.maxlength)"
        :step="schemaRow.meta && schemaRow.meta.step"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        :items="selectItems || []"
      />
      
      <input-select 
        v-else-if="schemaRow.input === InputType.SELECT" :key="3"
        v-model="value[schemaRow.model || field]"
        :items="selectItems || []"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-checkbox 
        v-else-if="schemaRow.input === InputType.CHECKBOX" :key="4"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.TEXT" :key="5"
        type="text"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :maxlength="maxlength || (schemaRow.meta && schemaRow.meta.maxlength)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.NUMBER" :key="6"
        type="number"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder) || $t('persist.number')"
        :step="step || (schemaRow.meta && schemaRow.meta.step)"
        :min="min || (schemaRow.meta && schemaRow.meta.min)"
        :max="max || (schemaRow.meta && schemaRow.meta.max)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.EMAIL" :key="7"
        type="email"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :maxlength="maxlength || (schemaRow.meta && schemaRow.meta.maxlength)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.PASSWORD" :key="8"
        type="password"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder) || (value.$id ? $t('app.onlyIfWantChangePassword') : '')"
        :maxlength="maxlength || (schemaRow.meta && schemaRow.meta.maxlength)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.DATE" :key="9"
        type="date"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder) || $t('dateFormat.date')"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.DATETIME" :key="10"
        type="datetime"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder) || $t('dateFormat.datetime')"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.CURRENCY" :key="11"
        type="money"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :maxlength="maxlength || (schemaRow.meta && schemaRow.meta.maxlength)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.PHONE" :key="12"
        type="phone"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.CEP" :key="13"
        type="cep"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.CPF" :key="14"
        type="cpf"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.CNPJ" :key="15"
        type="cnpj"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />

      <input-text
        v-else-if="schemaRow.input === InputType.CPF_OR_CNPJ" :key="16"
        type="cpfCnpj"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.RG" :key="17"
        type="rg"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />

      <input-text
        v-else-if="schemaRow.input === InputType.MASK" :key="18"
        type="mask"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :preset="preset || (schemaRow.meta && schemaRow.meta.preset)"
        :mask="mask || (schemaRow.meta && schemaRow.meta.mask)"
        :masked="masked !== null ? masked : (schemaRow.meta && schemaRow.meta.masked)"
        :tokens="tokens || (schemaRow.meta && schemaRow.meta.tokens)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />

      <input-textarea
        v-else-if="schemaRow.input === InputType.TEXTAREA" :key="19"
        v-model="value[schemaRow.model || field]"
        :required="required !== null ? required : (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled !== null ? disabled : schemaRow.editable === false"
        :selectall="selectall !== null ? selectall : (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus !== null ? autofocus : (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :maxlength="maxlength || (schemaRow.meta && schemaRow.meta.maxlength)"
        :rows="rows || (schemaRow.meta && schemaRow.meta.rows)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      
    </template>
  </div>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { Resource } from '../../app'
import { InputType } from '../../enums'
import { SchemaRow, SchemaVue } from '../../interfaces'

@Component({ template })
export class ResourceInput extends Vue {
  @Prop({ type: Object, required: true })
  value!: Resource

  @Prop({ type: String, required: true })
  field!: string

  @Prop({ type: Array })
  selectItems?: Resource[]

  @Prop({ type: Boolean, default: null })
  required!: boolean | null

  @Prop({ type: Boolean, default: null })
  disabled!: boolean | null

  @Prop({ type: Boolean, default: null })
  selectall!: boolean | null

  @Prop({ type: Boolean, default: null })
  autofocus!: boolean | null

  @Prop({ type: String })
  label?: string

  @Prop({ type: String })
  placeholder?: string

  @Prop({ type: [String, Number] })
  maxlength?: string | number

  @Prop({ type: [String, Number] })
  step?: string | number

  @Prop({ type: [String, Number] })
  min?: string | number

  @Prop({ type: [String, Number] })
  max?: string | number

  @Prop({ type: String })
  preset?: string

  @Prop({ type: [String, Array] })
  mask?: string | string[]

  @Prop({ type: Boolean, default: null })
  masked!: boolean | null

  @Prop({ type: Object })
  tokens?: any

  @Prop({ type: String })
  rows?: string

  @Prop({ type: String })
  innerClass?: string

  InputType = InputType

  get schemaRow() {
    const { value, field } = this

    if (value && field) {
      const schemaVal = value.$schema[field]

      if (schemaVal && typeof schemaVal === 'object') {
        return schemaVal as SchemaRow
      }
    }

    return null
  }

  get isComponent() {
    const schemaRow = this.schemaRow
    const input = (schemaRow && schemaRow.input) as typeof Vue
    return !!(input && input.prototype instanceof Vue)
  }

  get isComponentFromSchemaVue() {
    const schemaRow = this.schemaRow
    const input = (schemaRow && schemaRow.input) as SchemaVue
    return !!(input && input.component && input.component.prototype instanceof Vue)
  }

  focusEvent() {
    this.$emit('focus')
  }

  blurEvent() {
    this.$emit('blur')
  }
}
