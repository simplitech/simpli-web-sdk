const template = `
  <form class="adap-form" @submit.prevent="$await.run(persist, 'persist')">
  
    <slot name="before"></slot>
  
    <div v-for="(schemaRow, field) in value.$schema" :key="field">
      <resource-input v-model="value" :field="field" :selectItems="resource && resource[field]"/>
    </div>
    
    <slot></slot>
    
    <div v-if="hasSubmit !== false" class="section-submit">
      <hr>

      <await name="persist" class="items-center">
        <button type="submit" class="primary">{{ $t("persist.submit") }}</button>
      </await>
    </div>
    
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

  @Prop({ type: Boolean, default: true })
  hasSubmit?: boolean

  InputType = InputType

  persist() {
    this.$emit('persist')
  }
}
