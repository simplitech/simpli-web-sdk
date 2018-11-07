const template = `
  <form @submit.prevent="$await.run(persist, 'persist')" class="adap-form">
  
    <div v-for="(schema, key) in value.$schema" :key="key" v-if="schema && schema.editable !== false">
    
      <template v-if="schema.inputType === InputType.TEXT">
        <input-group
          type="text"
          :required="schema.meta && schema.meta.required"
          :maxLength="schema.meta && schema.meta.maxLength"
          :placeholder="schema.meta && schema.meta.placeholder"
          v-model="value[schema.model || key]"
        >
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </input-group>
      </template>
      
      <template v-if="schema.inputType === InputType.NUMBER">
        <input-group
          type="number"
          :step="schema.meta && schema.meta.step"
          :required="schema.meta && schema.meta.required"
          :maxLength="schema.meta && schema.meta.maxLength"
          :placeholder="schema.meta && schema.meta.placeholder || $t('persist.number')"
          v-model="value[schema.model || key]"
        >
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </input-group>
      </template>
      
      <template v-if="schema.inputType === InputType.EMAIL">
        <input-group
          type="email"
          :required="schema.meta && schema.meta.required"
          :maxLength="schema.meta && schema.meta.maxLength"
          :placeholder="schema.meta && schema.meta.placeholder"
          v-model="value[schema.model || key]"
        >
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </input-group>
      </template>
      
      <template v-if="schema.inputType === InputType.PASSWORD">
        <input-group
          type="password"
          :required="schema.meta && schema.meta.required"
          :maxLength="schema.meta && schema.meta.maxLength"
          :placeholder="schema.meta && schema.meta.placeholder || (value.$id ? $t('app.onlyIfWantChangePassword') : '')"
          v-model="value[schema.model || key]"
        >
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </input-group>
      </template>
      
      <template v-if="schema.inputType === InputType.DATETIME">
        <input-group
          type="datetime"
          :required="schema.meta && schema.meta.required"
          :maxLength="schema.meta && schema.meta.maxLength"
          :placeholder="schema.meta && schema.meta.placeholder || $t('dateFormat.datetime')"
          v-model="value[schema.model || key]"
        >
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </input-group>
      </template>
      
      <template v-if="schema.inputType === InputType.CHECKBOX">
        <checkbox-group v-model="value[schema.model || key]">
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </checkbox-group>
      </template>
      
      <template v-if="schema.inputType === InputType.SELECT">
        <multiselect-group v-model="value[schema.model || key]" :items="resource && resource[schema.model || key] || []">
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </multiselect-group>
      </template>
      
      <template v-if="schema.inputType === InputType.CEP">
        <input-group
          type="cep"
          :required="schema.meta && schema.meta.required"
          :placeholder="schema.meta && schema.meta.placeholder"
          v-model="value[schema.model || key]"
        >
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </input-group>
      </template>
      
      <template v-if="schema.inputType === InputType.CPF">
        <input-group
          type="cpf"
          :required="schema.meta && schema.meta.required"
          :maxLength="schema.meta && schema.meta.maxLength"
          :placeholder="schema.meta && schema.meta.placeholder"
          v-model="value[schema.model || key]"
        >
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </input-group>
      </template>
      
      <template v-if="schema.inputType === InputType.CNPJ">
        <input-group
          type="cnpj"
          :required="schema.meta && schema.meta.required"
          :maxLength="schema.meta && schema.meta.maxLength"
          :placeholder="schema.meta && schema.meta.placeholder"
          v-model="value[schema.model || key]"
        >
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </input-group>
      </template>
      
      <template v-if="schema.inputType === InputType.RG">
        <input-group
          type="rg"
          :required="schema.meta && schema.meta.required"
          :maxLength="schema.meta && schema.meta.maxLength"
          :placeholder="schema.meta && schema.meta.placeholder"
          v-model="value[schema.model || key]"
        >
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </input-group>
      </template>
      
      <template v-if="schema.inputType === InputType.PHONE">
        <input-group
          type="phone"
          :required="schema.meta && schema.meta.required"
          :maxLength="schema.meta && schema.meta.maxLength"
          :placeholder="schema.meta && schema.meta.placeholder"
          v-model="value[schema.model || key]"
        >
          {{ $t(\`classes.\${value.$name}.columns.\${key}\`) }}
        </input-group>
      </template>
      
    </div>
    
    <hr class="mb-20"/>

    <await name="persist" class="verti items-center">
      <button type="submit" class="primary">{{ $t("persist.submit") }}</button>
    </await>
    
  </form>
`

import { Component, Prop, Watch, Mixins, Vue } from 'vue-property-decorator'
import { get, mapValues } from 'lodash'
import { Resource } from '../../app'
import { InputType } from '../../enums'

@Component({ template })
export class AdapForm extends Vue {
  @Prop({ required: true, type: Object })
  value?: Resource

  @Prop({ type: Object })
  resource?: { [key: string]: Resource[] }

  InputType = InputType

  persist() {
    this.$emit('persist')
  }
}
