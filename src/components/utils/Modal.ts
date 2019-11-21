const template = `
  <div class="modal">
    <transition :name="$effect" mode="out-in">
      <div v-if="openPayload" class="modal__scroll">
        <div class="modal__view" @mousedown="closeFromView" ref="view">
          <div class="modal__frame" :class="innerClass">
              <div class="modal__header">
                <div class="modal__title">
                  {{title}}
                </div>
                <a v-if="$closable" class="modal__close-icon" @click="closeAction"></a>
              </div>
              <div class="modal__body">
                <slot></slot>
              </div>
            </div>
        </div>
      </div>
    </transition>
    <transition :name="$backgroundEffect" mode="out-in">
      <div v-if="openPayload" class="modal__bg"></div>
    </transition>
  </div>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { $ } from '../../simpli'

export const Event = new Vue()

export class ModalController {
  defaultBody: HTMLElement = document.body
  defaultTransition: string | null = 'fade'
  defaultBackgroundTransition: string | null = 'fade'
  defaultClosable: boolean = true
  defaultCloseOutside: boolean = true

  open(name?: string, payload?: any) {
    Event.$emit('open', name, payload)
  }

  close(name?: string) {
    Event.$emit('close', name)
  }

  toggle(name?: string, payload?: any) {
    Event.$emit('toggle', name, payload)
  }

  closeAll() {
    Event.$emit('closeAll')
  }
}

@Component({ template })
export class Modal extends Vue {
  @Prop()
  value?: any

  @Prop({ type: String })
  name?: string

  @Prop({ type: String })
  title?: string

  @Prop({ type: String })
  innerClass?: string

  @Prop({ type: String })
  effect?: string

  @Prop({ type: String })
  backgroundEffect?: string

  @Prop({ type: Boolean, default: undefined })
  closable?: boolean

  @Prop({ type: Boolean, default: undefined })
  closeOutside?: boolean

  private $effect: string | null = null
  private $backgroundEffect: string | null = null
  private $closable: boolean = true
  private $closeOutside: boolean = true

  body: HTMLElement | null = null
  bodyOverflowY: string | null = null

  valueFallback: any = null // used only if the v-model is undefined

  get openPayload() {
    return this.value || this.valueFallback
  }

  set openPayload(val: any) {
    if (this.value === undefined) {
      this.valueFallback = val
    }

    this.$emit('input', val)

    if (val !== null) {
      this.$emit('open', val !== 'payload_sentinel' ? val : undefined)
    } else {
      this.$emit('close')
    }
  }

  @Watch('openPayload')
  stateEvent(val: boolean) {
    if (this.body) {
      if (val) {
        this.body.style.overflowY = 'hidden'
      } else {
        this.body.style.overflowY = this.bodyOverflowY || 'unset'
      }
    }
  }

  openAction(payload: any) {
    this.openPayload = payload != null ? payload : 'payload_sentinel'
  }

  closeAction(force: boolean = false) {
    if (this.$closable || force) {
      this.openPayload = null
    }
  }

  closeFromView(e: Event) {
    if (e.target === this.$refs.view && this.$closeOutside) {
      this.closeAction()
    }
  }

  @Watch('effect')
  @Watch('backgroundEffect')
  @Watch('closable')
  @Watch('closeOutside')
  applyProps() {
    this.$effect = this.effect || $.modal.defaultTransition
    this.$backgroundEffect = this.backgroundEffect || $.modal.defaultBackgroundTransition
    this.$closable = this.closable !== undefined ? this.closable : $.modal.defaultClosable
    this.$closeOutside = this.closeOutside !== undefined ? this.closeOutside : $.modal.defaultCloseOutside
  }

  beforeMount() {
    this.applyProps()

    this.body = $.modal.defaultBody
    this.bodyOverflowY = this.body.style.overflowY

    Event.$on('open', (name?: string, payload?: any) => {
      if (name === this.name) {
        this.openAction(payload)
      }
    })

    Event.$on('close', (name?: string) => {
      if (name === this.name) {
        this.openPayload = null
      }
    })

    Event.$on('toggle', (name?: string, payload?: any) => {
      if (name === this.name) {
        if (this.openPayload) {
          this.openPayload = null
        } else {
          this.openAction(payload)
        }
      }
    })

    Event.$on('closeAll', () => {
      this.openPayload = null
    })
  }
}
