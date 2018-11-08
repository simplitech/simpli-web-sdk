const template = `
  <div class="anchor-render" v-if="href">
    <a :href="href" :target="target">
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
}
