const template = `
  <div class="image-render" v-if="src">
    <img :src="src" :alt="alt"/>
  </div>
`

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ template })
export class RenderImage extends Vue {
  @Prop({ type: String })
  src?: string
  @Prop({ type: String })
  alt?: string
}
