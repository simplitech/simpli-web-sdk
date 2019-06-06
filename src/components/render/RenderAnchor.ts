const template = `
  <div class="anchor-render">
    <a :href="href" :target="target" :class="innerClass" v-if="href">
      {{label || href}}
    </a>
  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ template })
export class RenderAnchor extends Vue {
  @Prop({ type: String })
  href?: string

  @Prop({ type: String })
  label?: string

  @Prop({ type: String, default: '_self' })
  target?: string

  @Prop({ type: String })
  innerClass?: string
}
