const template = `
  <div class="modal">
    <transition :name="$effect" mode="out-in">
      <div v-if="state === 1" class="modal-scroll">
        <div class="modal-view" @click="closeFromView" ref="view">
          <div class="modal-content" :class="innerClass">
            <div class="modal-header">
              <div class="modal-title">
                {{title}}
              </div>
              <a v-if="$closable" class="close-icon" @click="close"></a>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition :name="$backgroundEffect" mode="out-in">
      <div v-if="state === 1" class="modal-bg"></div>
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
    Event.$emit('toggle', name)
  }

  closeAll() {
    Event.$emit('closeAll')
  }
}

@Component({ template })
export class Modal extends Vue {
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

  state = State.HIDDEN

  private $effect: string | null = null
  private $backgroundEffect: string | null = null
  private $closable: boolean = true
  private $closeOutside: boolean = true

  body: HTMLElement | null = null
  bodyOverflowY: string | null = null

  @Watch('state')
  stateEvent(val: State) {
    if (val === State.SHOWN) {
      document.body.style.overflowY = 'hidden'
    } else if (val === State.HIDDEN) {
      document.body.style.overflowY = this.bodyOverflowY
    }
  }

  open(payload: any) {
    this.state = State.SHOWN
    this.$emit('open', payload)
  }

  close(force: boolean = false) {
    if (this.$closable || force) {
      this.state = State.HIDDEN
      this.$emit('close')
    }
  }

  closeFromView(e: Event) {
    if (e.target === this.$refs.view && this.$closeOutside) {
      this.close()
    }
  }

  beforeMount() {
    this.$effect = this.effect || $.modal.defaultTransition
    this.$backgroundEffect = this.backgroundEffect || $.modal.defaultBackgroundTransition
    this.$closable = this.closable !== undefined ? this.closable : $.modal.defaultClosable
    this.$closeOutside = this.closeOutside !== undefined ? this.closeOutside : $.modal.defaultCloseOutside

    this.body = $.modal.defaultBody
    this.bodyOverflowY = this.body.style.overflowY

    Event.$on('open', (name?: string, payload?: any) => {
      if (name === this.name) this.open(payload)
    })

    Event.$on('close', (name?: string) => {
      if (name === this.name) this.close(true)
    })

    Event.$on('toggle', (name?: string, payload?: any) => {
      if (name === this.name) {
        if (this.state === State.SHOWN) this.close(true)
        else if (this.state === State.HIDDEN) this.open(payload)
      }
    })

    Event.$on('closeAll', () => {
      this.close(true)
    })
  }
}
