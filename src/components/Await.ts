const template = `
  <transition :name="transition" mode="out-in">
    <div v-if="view === 0" :key="0" class="await-default" ref="defaultRef">
      <slot></slot>
    </div>

    <div v-else-if="view === 1" :key="1" class="await-spinner" :style="{minHeight}">
      <component
        v-if="loader && !hasLoadingSlot"
        :is="loader"
        :color="color"
        :style="{padding, zoom}"
      />
      <slot name="loading" v-else></slot>
    </div>

    <div v-else-if="view === 2" :key="2" class="await-error">
      <slot name="error"></slot>
    </div>
  </transition>
`

import { Component as Comp, AsyncComponent as AsyncComp } from 'vue/types'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { sleep } from '../helpers'
import { $ } from '../simpli'

export type CP = Comp<any, any, any, any> | AsyncComp<any, any, any, any>
export interface Loader {
  [key: string]: CP
}

export enum View {
  DEFAULT,
  LOADING,
  ERROR,
}

export const Event = new Vue()

export class AwaitController {
  defaultTransition: string | null = null
  defaultSpinner: string | null = null
  defaultSpinnerColor = '#42b983'
  defaultSpinnerPadding = '10px'
  defaultSpinnerScale = 1

  loaders: Loader = {}

  addLoader(name: string, component: CP) {
    this.loaders = Object.assign(this.loaders, { [name]: component })
  }

  init(name?: string) {
    Event.$emit('toggle', name, View.LOADING)
  }
  done(name?: string) {
    Event.$emit('toggle', name, View.DEFAULT)
  }
  error(name?: string) {
    Event.$emit('toggle', name, View.ERROR)
  }

  async run(func: Function, name?: string, delay?: number) {
    try {
      this.init(name)
      if (delay) await sleep(delay)
      const result = await func()
      this.done(name)
      return result
    } catch (e) {
      this.error(name)
      throw e
    }
  }
}

@Component({ template })
export class Await extends Vue {
  @Prop({ type: String })
  name?: string
  @Prop({ type: String })
  effect?: string
  @Prop({ type: String })
  spinner?: string
  @Prop({ type: String })
  spinnerColor?: string
  @Prop({ type: String })
  spinnerPadding?: string
  @Prop({ type: Number })
  spinnerScale?: number

  transition: string | null = null
  loader: string | null = null
  color: string | null = null
  padding: string | null = null
  zoom: number | null = null

  view = View.DEFAULT
  height?: number

  get hasLoadingSlot() {
    return this.$slots.hasOwnProperty('loading')
  }

  get hasErrorSlot() {
    return this.$slots.hasOwnProperty('error')
  }

  get minHeight() {
    return `${this.height}px` || 'unset'
  }

  mounted() {
    if (this.$refs.defaultRef) {
      this.height = (this.$refs.defaultRef as HTMLElement).offsetHeight
    }
  }

  beforeMount() {
    this.transition = this.effect || $.await.defaultTransition
    this.loader = this.spinner || $.await.defaultSpinner
    this.color = this.spinnerColor || $.await.defaultSpinnerColor
    this.padding = this.spinnerPadding || $.await.defaultSpinnerPadding
    this.zoom = this.spinnerScale || $.await.defaultSpinnerScale
    this.$options.components = Object.assign(this.$options.components, $.await.loaders)
    Event.$on('toggle', (name?: string, view: View = View.DEFAULT) => {
      if (name === this.name) {
        if (view === View.ERROR && !this.hasErrorSlot) this.view = View.DEFAULT
        else this.view = view
      }
    })
  }
}
