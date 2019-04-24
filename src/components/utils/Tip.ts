const template = `
  <div class="tip">
    <transition :name="$effect" mode="out-in">
      <div ref="content" v-if="state === 1" class="tip-content" :innerClass="innerClass">
        {{$message}}
        <slot></slot>
      </div>
    </transition>
  </div>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { $ } from '../../simpli'

export const Event = new Vue()

export enum State {
  HIDDEN,
  SHOWN,
}

export class TipController {
  defaultMessage: string | null = ''
  defaultTransition: string | null = 'fade'
  defaultWidth: string | number | null = 'auto'
  defaultOffset: number | null = 0

  show(name?: string, payload?: any) {
    Event.$emit('show', name, payload)
  }

  hide(name?: string) {
    Event.$emit('hide', name)
  }

  toggle(name?: string, payload?: any) {
    Event.$emit('toggle', name, payload)
  }

  hideAll() {
    Event.$emit('hideAll')
  }
}

@Component({ template })
export class Tip extends Vue {
  @Prop({ type: String })
  name?: string

  @Prop({ type: String })
  message?: string

  @Prop({ type: String })
  effect?: string

  @Prop({ type: [String, Number] })
  width?: string

  @Prop({ type: Number })
  offset?: number

  @Prop({ type: String })
  innerClass?: string

  state = State.HIDDEN

  private $message: string | null = null
  private $effect: string | null = null
  private $width: string | number | null = null
  private $offset: number | null = null

  @Watch('state')
  async stateEvent(val: State) {
    if (val === State.SHOWN) {
      await this.$nextTick()

      const el = this.$refs.content as HTMLElement
      const width = Number(this.$width)

      if (!isNaN(width)) {
        el.style.width = `${width}px`
        el.style.left = `calc(50% - ${width / 2}px)`
      } else {
        el.style.left = '0'
        el.style.right = '0'
      }

      el.style.marginLeft = `${this.offset}px`
      el.style.marginRight = `${this.offset}px`
    }
  }

  show(payload: any) {
    this.state = State.SHOWN
    this.$emit('show', payload)
  }

  hide() {
    this.state = State.HIDDEN
    this.$emit('hide')
  }

  beforeMount() {
    this.$message = this.message || $.tip.defaultMessage
    this.$effect = this.effect || $.tip.defaultTransition
    this.$width = this.width || $.tip.defaultWidth
    this.$offset = this.offset || $.tip.defaultOffset

    Event.$on('show', (name?: string, payload?: any) => {
      if (name === this.name) this.show(payload)
    })

    Event.$on('hide', (name?: string) => {
      if (name === this.name) this.hide()
    })

    Event.$on('toggle', (name?: string, payload?: any) => {
      if (name === this.name) {
        if (this.state === State.SHOWN) this.hide()
        else if (this.state === State.HIDDEN) this.show(payload)
      }
    })

    Event.$on('hideAll', () => {
      this.hide()
    })
  }

  mounted() {
    const parentElement = this.$el.parentElement
    if (parentElement) {
      parentElement.style.position = 'relative'
    }
  }
}
