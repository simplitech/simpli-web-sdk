const template = `
  <div class="modal">
    <transition :name="transition" mode="out-in">
      <div v-if="state === 1" class="modal-scroll">
        <div class="modal-view" @click="closeFromView" ref="view">
          <div class="modal-content" :class="innerClass">
            <div class="modal-header">
              <div class="modal-title">
                {{title}}
              </div>
              <a v-if="isClosable" class="close-icon" @click="close"></a>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition :name="backgroundTransition" mode="out-in">
      <div v-if="state === 1" class="modal-bg"></div>
    </transition>
  </div>
`

import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { $ } from '../simpli'

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

  open(name?: string) {
    Event.$emit('open', name)
  }

  close(name?: string) {
    Event.$emit('close', name)
  }

  toggle(name?: string) {
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

  transition: string | null = null
  backgroundTransition: string | null = null
  isClosable: boolean = true
  isCloseOutside: boolean = true
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

  show() {
    this.state = State.SHOWN
    this.$emit('show')
  }

  close(force: boolean = false) {
    if (this.isClosable || force) {
      this.state = State.HIDDEN
      this.$emit('close')
    }
  }

  closeFromView(e: Event) {
    if (e.target === this.$refs.view && this.isCloseOutside) {
      this.close()
    }
  }

  beforeMount() {
    this.transition = this.effect || $.modal.defaultTransition
    this.backgroundTransition = this.backgroundEffect || $.modal.defaultBackgroundTransition
    this.isClosable = this.closable !== undefined ? this.closable : $.modal.defaultClosable
    this.isCloseOutside = this.closeOutside !== undefined ? this.closeOutside : $.modal.defaultCloseOutside

    this.body = $.modal.defaultBody
    this.bodyOverflowY = this.body.style.overflowY

    Event.$on('open', (name?: string) => {
      if (name === this.name) this.show()
    })

    Event.$on('close', (name?: string) => {
      if (name === this.name) this.close(true)
    })

    Event.$on('toggle', (name?: string) => {
      if (name === this.name) {
        if (this.state === State.SHOWN) this.close(true)
        else if (this.state === State.HIDDEN) this.show()
      }
    })

    Event.$on('closeAll', () => {
      this.close(true)
    })
  }
}
