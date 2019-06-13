const template = `
  <div class="render-image">
    <img :src="src" :alt="alt" :class="innerClass" v-if="src"/>
  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ template })
export class RenderImage extends Vue {
  @Prop({ type: String })
  src?: string

  @Prop({ type: String })
  alt?: string

  @Prop({ type: String })
  innerClass?: string
}
