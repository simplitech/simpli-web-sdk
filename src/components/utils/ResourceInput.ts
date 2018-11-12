const template = `
  <div class="resource-input">
    <template v-if="schemaRow">
      
      <input-select 
        v-if="schemaRow.inputType === InputType.SELECT" :key="1"
        v-model="value[schemaRow.model || field]"
        :items="selectItems || []"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-checkbox 
        v-else-if="schemaRow.inputType === InputType.CHECKBOX" :key="2"
        v-model="value[schemaRow.model || field]"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-text
        v-else-if="schemaRow.inputType === InputType.TEXT" :key="3"
        type="text"
        v-model="value[schemaRow.model || field]"
        :required="schemaRow.meta && schemaRow.meta.required"
        :maxlength="schemaRow.meta && schemaRow.meta.maxlength"
        :placeholder="schemaRow.meta && schemaRow.meta.placeholder"
        :selectall="schemaRow.meta && schemaRow.meta.selectall"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-text
        v-else-if="schemaRow.inputType === InputType.NUMBER" :key="4"
        type="number"
        v-model="value[schemaRow.model || field]"
        :step="schemaRow.meta && schemaRow.meta.step"
        :required="schemaRow.meta && schemaRow.meta.required"
        :maxlength="schemaRow.meta && schemaRow.meta.maxlength"
        :placeholder="schemaRow.meta && schemaRow.meta.placeholder || $t('persist.number')"
        :selectall="schemaRow.meta && schemaRow.meta.selectall"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-text
        v-else-if="schemaRow.inputType === InputType.EMAIL" :key="5"
        type="email"
        v-model="value[schemaRow.model || field]"
        :required="schemaRow.meta && schemaRow.meta.required"
        :maxlength="schemaRow.meta && schemaRow.meta.maxlength"
        :placeholder="schemaRow.meta && schemaRow.meta.placeholder"
        :selectall="schemaRow.meta && schemaRow.meta.selectall"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-text
        v-else-if="schemaRow.inputType === InputType.PASSWORD" :key="6"
        type="password"
        v-model="value[schemaRow.model || field]"
        :required="schemaRow.meta && schemaRow.meta.required"
        :maxlength="schemaRow.meta && schemaRow.meta.maxlength"
        :placeholder="schemaRow.meta && schemaRow.meta.placeholder || (value.$id ? $t('app.onlyIfWantChangePassword') : '')"
        :selectall="schemaRow.meta && schemaRow.meta.selectall"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-text
        v-else-if="schemaRow.inputType === InputType.DATETIME" :key="7"
        type="datetime"
        v-model="value[schemaRow.model || field]"
        :required="schemaRow.meta && schemaRow.meta.required"
        :maxlength="schemaRow.meta && schemaRow.meta.maxlength"
        :placeholder="schemaRow.meta && schemaRow.meta.placeholder || $t('dateFormat.datetime')"
        :selectall="schemaRow.meta && schemaRow.meta.selectall"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-text
        v-else-if="schemaRow.inputType === InputType.CURRENCY" :key="8"
        type="money"
        v-model="value[schemaRow.model || field]"
        :required="schemaRow.meta && schemaRow.meta.required"
        :maxlength="schemaRow.meta && schemaRow.meta.maxlength"
        :placeholder="schemaRow.meta && schemaRow.meta.placeholder"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-text
        v-else-if="schemaRow.inputType === InputType.PHONE" :key="9"
        type="phone"
        v-model="value[schemaRow.model || field]"
        :required="schemaRow.meta && schemaRow.meta.required"
        :maxlength="schemaRow.meta && schemaRow.meta.maxlength"
        :placeholder="schemaRow.meta && schemaRow.meta.placeholder"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-text
        v-else-if="schemaRow.inputType === InputType.CEP" :key="10"
        type="cep"
        v-model="value[schemaRow.model || field]"
        :required="schemaRow.meta && schemaRow.meta.required"
        :placeholder="schemaRow.meta && schemaRow.meta.placeholder"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-text
        v-else-if="schemaRow.inputType === InputType.CPF" :key="11"
        type="cpf"
        v-model="value[schemaRow.model || field]"
        :required="schemaRow.meta && schemaRow.meta.required"
        :maxlength="schemaRow.meta && schemaRow.meta.maxlength"
        :placeholder="schemaRow.meta && schemaRow.meta.placeholder"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-text
        v-else-if="schemaRow.inputType === InputType.CNPJ" :key="12"
        type="cnpj"
        v-model="value[schemaRow.model || field]"
        :required="schemaRow.meta && schemaRow.meta.required"
        :maxlength="schemaRow.meta && schemaRow.meta.maxlength"
        :placeholder="schemaRow.meta && schemaRow.meta.placeholder"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
      <input-text
        v-else-if="schemaRow.inputType === InputType.RG" :key="13"
        type="rg"
        v-model="value[schemaRow.model || field]"
        :required="schemaRow.meta && schemaRow.meta.required"
        :maxlength="schemaRow.meta && schemaRow.meta.maxlength"
        :placeholder="schemaRow.meta && schemaRow.meta.placeholder"
        :class="schemaRow.meta && schemaRow.meta.innerClass"
        :disabled="schemaRow.editable === false"
        :label="$t(\`classes.\${value.$name}.columns.\${field}\`)"
      />
      
    </template>
  </div>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { Resource } from '../../app'
import { InputType } from '../../enums'
import { SchemaRow } from '../../misc'

@Component({ template })
export class ResourceInput extends Vue {
  @Prop({ type: Object, required: true })
  value?: Resource
  @Prop({ type: String, required: true })
  field?: string
  @Prop({ type: Array })
  selectItems?: Resource[]

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
}
