const template = `
  <div class="resource-input">
    <template v-if="schemaRow">
    
      <component 
        v-if="isComponent" :key="1"
        :is="schemaRow.input"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
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
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
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
        :disabled="disabled || schemaRow.editable === false"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-checkbox 
        v-else-if="schemaRow.input === InputType.CHECKBOX" :key="4"
        v-model="value[schemaRow.model || field]"
        :disabled="disabled || schemaRow.editable === false"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.TEXT" :key="5"
        type="text"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :maxlength="maxlength || (schemaRow.meta && schemaRow.meta.maxlength)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.NUMBER" :key="6"
        type="number"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder) || $t('persist.number')"
        :step="schemaRow.meta && schemaRow.meta.step"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.EMAIL" :key="7"
        type="email"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :maxlength="maxlength || (schemaRow.meta && schemaRow.meta.maxlength)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.PASSWORD" :key="8"
        type="password"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder) || (value.$id ? $t('app.onlyIfWantChangePassword') : '')"
        :maxlength="maxlength || (schemaRow.meta && schemaRow.meta.maxlength)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.DATE" :key="9"
        type="date"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder) || $t('dateFormat.date')"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.DATETIME" :key="10"
        type="datetime"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder) || $t('dateFormat.datetime')"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.CURRENCY" :key="11"
        type="money"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :maxlength="maxlength || (schemaRow.meta && schemaRow.meta.maxlength)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.PHONE" :key="12"
        type="phone"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.CEP" :key="13"
        type="cep"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.CPF" :key="14"
        type="cpf"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.CNPJ" :key="15"
        type="cnpj"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />

      <input-text
        v-else-if="schemaRow.input === InputType.CPF_OR_CNPJ" :key="16"
        type="cpfCnpj"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
      <input-text
        v-else-if="schemaRow.input === InputType.RG" :key="17"
        type="rg"
        v-model="value[schemaRow.model || field]"
        :required="required || (schemaRow.meta && schemaRow.meta.required)"
        :disabled="disabled || schemaRow.editable === false"
        :selectall="selectall || (schemaRow.meta && schemaRow.meta.selectall)"
        :autofocus="autofocus || (schemaRow.meta && schemaRow.meta.autofocus)"
        :label="label || $t(\`classes.\${value.$name}.columns.\${field}\`)"
        :placeholder="placeholder || (schemaRow.meta && schemaRow.meta.placeholder)"
        :class="innerClass || (schemaRow.meta && schemaRow.meta.innerClass)"
      />
      
    </template>
  </div>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { Resource } from '../../app'
import { InputType } from '../../enums'
import { SchemaRow, SchemaVue } from '../../misc'

@Component({ template })
export class ResourceInput extends Vue {
  @Prop({ type: Object, required: true })
  value?: Resource
  @Prop({ type: String, required: true })
  field?: string
  @Prop({ type: Array })
  selectItems?: Resource[]

  @Prop({ type: Boolean })
  required?: boolean
  @Prop({ type: Boolean })
  disabled?: boolean
  @Prop({ type: Boolean })
  selectall?: boolean
  @Prop({ type: Boolean })
  autofocus?: boolean
  @Prop({ type: String })
  label?: string
  @Prop({ type: String })
  placeholder?: string
  @Prop({ type: String })
  maxlength?: string
  @Prop({ type: String })
  step?: string
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
}
