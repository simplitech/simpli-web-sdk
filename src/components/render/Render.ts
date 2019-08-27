const template = `
  <div class="render">
    <div :class="innerClass" v-if="!html">
      {{content || value}}
    </div>
    <div :class="innerClass" v-else v-html="html">
  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ template })
export class Render extends Vue {
  @Prop({ default: '' })
  value?: any

  @Prop({ default: '' })
  content?: any

  @Prop({ type: String })
  html?: string

  @Prop({ type: String })
  innerClass?: string
}
