const template = `
  <div class="tip">
    <transition :name="$effect" mode="out-in">
      <div ref="content" v-if="state === 1" class="tip__content" :class="innerClass">
        {{$message}}
        <slot></slot>
      </div>
    </transition>

    <template v-if="useOuterBackground">
      <transition :name="$backgroundEffect" mode="out-in">
        <div v-if="state === 1" @click="clickOutsideEvent" class="tip__bg"></div>
      </transition>
    </template>
  </div>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { $ } from '../../simpli'

/**
 * @hidden
 */
export const Event = new Vue()

/**
 * @hidden
 */
export enum State {
  HIDDEN,
  SHOWN,
}

/**
 * @hidden
 */
export enum Position {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

/**
 * @hidden
 */
export enum Align {
  START = 'start',
  CENTER = 'center',
  END = 'end',
}

export class TipController {
  defaultPosition = Position.TOP
  defaultAlign = Align.CENTER
  defaultMessage: string | null = ''
  defaultTransition: string | null = null
  defaultBackgroundTransition: string | null = 'fade'
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
  position?: Position

  @Prop({ type: String })
  align?: Align

  @Prop({ type: String })
  message?: string

  @Prop({ type: String })
  effect?: string

  @Prop({ type: String })
  backgroundEffect?: string

  @Prop({ type: [String, Number] })
  width?: string

  @Prop({ type: Number, default: 5 })
  offset?: number

  @Prop({ type: String })
  innerClass?: string

  @Prop({ type: Boolean })
  useOuterBackground?: boolean

  state = State.HIDDEN

  private $position = Position.TOP
  private $align = Align.CENTER
  private $message: string | null = null
  private $effect: string | null = null
  private $backgroundEffect: string | null = null
  private $width: string | number | null = null
  private $offset: number | null = null

  setY(top: string, bottom: string) {
    const el = this.$refs.content as HTMLElement
    el.style.top = top
    el.style.bottom = bottom
  }

  setX(left: string, right: string) {
    const el = this.$refs.content as HTMLElement
    el.style.left = left
    el.style.right = right
  }

  async resetEffect(effect: string) {
    this.$effect = effect
    this.state = State.HIDDEN
    await this.$nextTick()
    this.state = State.SHOWN
  }

  @Watch('state')
  async stateEvent(val: State) {
    if (val === State.SHOWN) {
      await this.$nextTick()

      const el = this.$refs.content as HTMLElement
      const offset = this.offset || 0
      const width = Number(this.$width)
      const areaWidth = this.$el.scrollWidth

      switch (this.$position) {
        case Position.TOP:
          this.setY('auto', `calc(100% + ${offset}px)`)
          break
        case Position.BOTTOM:
          this.setY(`calc(100% + ${offset}px)`, 'auto')
          break
      }

      if (!isNaN(width)) {
        const xCenter = (areaWidth - width) / 2 - offset

        el.style.width = `${width}px`
        el.style.left = `${xCenter}px`
        el.style.right = 'auto'

        const screenRect = document.body.getBoundingClientRect() as DOMRect
        const elRect = el.getBoundingClientRect() as DOMRect

        el.style.marginLeft = `${offset}px`
        el.style.marginRight = `${offset}px`

        const xMin = elRect.x
        const xMinScreen = screenRect.x
        const xMax = elRect.x + elRect.width + offset * 2
        const xMaxScreen = screenRect.x + screenRect.width

        const hasReachedLeftBoundary = xMin < xMinScreen
        const hasReachedRightBoundary = xMax > xMaxScreen

        if (this.$position === Position.TOP || this.$position === Position.BOTTOM) {
          switch (this.$align) {
            case Align.START:
              this.setX(`${-offset}px`, 'auto')
              break
            case Align.END:
              this.setX('auto', `${-offset}px`)
              break
            case Align.CENTER:
              this.setX(`${xCenter}px`, 'auto')
              break
          }
        } else if (this.$position === Position.LEFT || this.$position === Position.RIGHT) {
          switch (this.$position) {
            case Position.LEFT:
              this.setX('auto', '100%')
              break
            case Position.RIGHT:
              this.setX('100%', 'auto')
              break
          }

          switch (this.$align) {
            case Align.START:
              this.setY('0', 'auto')
              break
            case Align.END:
              this.setY('auto', '0')
              break
            case Align.CENTER:
              this.setY(`calc(50% - ${elRect.height / 2}px)`, 'auto')
              break
          }
        }

        if (hasReachedLeftBoundary) {
          const xOffset = Math.abs(xMin - xMinScreen)
          this.setX(`${xCenter + xOffset}px`, 'auto')

          if (this.$position === Position.LEFT) {
            let effect = 'fade-up'

            switch (this.$align) {
              case Align.START:
                this.setY('auto', `calc(100% + ${offset}px)`)
                break
              case Align.END:
                this.setY(`calc(100% + ${offset}px)`, 'auto')
                effect = 'fade-down'
                break
              case Align.CENTER:
                this.setY('auto', `calc(100% + ${offset}px)`)
                break
            }

            if (this.$effect === 'fade-left') await this.resetEffect(effect)
          }
        } else if (hasReachedRightBoundary) {
          const xOffset = Math.abs(xMax - xMaxScreen)
          this.setX(`${xCenter - xOffset}px`, 'auto')

          if (this.$position === Position.RIGHT) {
            let effect = 'fade-up'

            switch (this.$align) {
              case Align.START:
                this.setY('auto', `calc(100% + ${offset}px)`)
                break
              case Align.END:
                this.setY(`calc(100% + ${offset}px)`, 'auto')
                effect = 'fade-down'
                break
              case Align.CENTER:
                this.setY('auto', `calc(100% + ${offset}px)`)
                break
            }

            if (this.$effect === 'fade-right') await this.resetEffect(effect)
          }
        }
      } else {
        this.setX('0', '0')
      }
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

  clickOutsideEvent() {
    this.$emit('clickOutside')
  }

  beforeMount() {
    this.$position = this.position || $.tip.defaultPosition
    this.$align = this.align || $.tip.defaultAlign
    this.$message = this.message || $.tip.defaultMessage
    this.$effect = this.effect || $.tip.defaultTransition
    this.$backgroundEffect = this.backgroundEffect || $.tip.defaultBackgroundTransition
    this.$width = this.width || $.tip.defaultWidth
    this.$offset = this.offset || $.tip.defaultOffset

    if (this.$effect === 'auto') {
      switch (this.$position) {
        case Position.TOP:
          this.$effect = 'fade-up'
          break
        case Position.BOTTOM:
          this.$effect = 'fade-down'
          break
        case Position.LEFT:
          this.$effect = 'fade-left'
          break
        case Position.RIGHT:
          this.$effect = 'fade-right'
          break
      }
    }

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
