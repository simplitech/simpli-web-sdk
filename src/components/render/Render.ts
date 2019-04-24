const template = `
  <div>
    <div class="innerClass">
      {{content || value}}
    <div>
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
  innerClass?: string
}
