import * as moment from 'moment'
import Vue from 'vue'
import axios, { AxiosInstance } from 'axios'
import VueSnotify from 'vue-snotify'
import { SnotifyService } from 'vue-snotify/SnotifyService'
import VueRouter, { Route, RouterOptions } from 'vue-router'
import VueI18n from 'vue-i18n'
// @ts-ignore
import VueTheMask from 'vue-the-mask'
// @ts-ignore
import VueMoney from 'v-money'
import socket from './app/socket'
import { DefaultConfig } from './app'
import { Lang, Currency } from './enums'
import { currencyConfig } from './helpers'
import { AwaitController } from './components/utils/Await'
import { ModalController } from './components/utils/Modal'
import { TipController } from './components/utils/Tip'
import { $Prototype, ComponentOptions, FilterOptions, LocaleOptions, SocketInstance } from './interfaces'

Vue.use(VueSnotify)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(VueTheMask)

const router = new VueRouter()
const i18n = new VueI18n()
const bus = new Vue({ i18n, router })

export abstract class $ {
  static get axios(): AxiosInstance {
    return prototype.axios
  }
  static get socket(): SocketInstance {
    return prototype.socket
  }
  static get component(): ComponentOptions {
    return prototype.component
  }
  static get filter(): FilterOptions {
    return prototype.filter
  }
  static get router(): VueRouter {
    return prototype.router
  }
  static get i18n(): VueI18n {
    return prototype.i18n
  }
  static get bus(): Vue {
    return prototype.bus
  }
  static get route(): Route {
    return prototype.route
  }
  static get t(): Function {
    return prototype.t
  }
  static get tc(): Function {
    return prototype.tc
  }
  static get te(): Function {
    return prototype.te
  }
  static get d(): Function {
    return prototype.d
  }
  static get n(): Function {
    return prototype.n
  }
  static get snotify(): SnotifyService {
    return prototype.snotify
  }
  static get await(): AwaitController {
    return prototype.await
  }
  static get modal(): ModalController {
    return prototype.modal
  }
  static get tip(): TipController {
    return prototype.tip
  }
}

const prototype: $Prototype = {
  axios: axios && axios.create(),
  socket: socket && socket.create(),

  component: {},
  filter: {},

  router,
  i18n,
  bus,

  route: bus.$route,

  t: bus.$t,
  tc: bus.$tc,
  te: bus.$te,
  d: bus.$d,
  n: bus.$n,

  snotify: bus.$snotify,

  await: new AwaitController(),
  modal: new ModalController(),
  tip: new TipController(),
}

export abstract class Simpli {
  static axios?: AxiosInstance
  static socket?: SocketInstance
  static components: ComponentOptions = {}
  static filters: FilterOptions = {}
  static locale?: LocaleOptions
  static router?: RouterOptions
  static lang: Lang = Lang.EN_US
  static currency: Currency = Currency.USD

  static install() {
    prototype.axios = Simpli.axios || prototype.axios
    prototype.socket = Simpli.socket || prototype.socket

    prototype.component = { ...DefaultConfig.components, ...Simpli.components }
    prototype.filter = { ...DefaultConfig.filters, ...Simpli.filters }

    prototype.router = new VueRouter(Simpli.router)
    prototype.i18n = new VueI18n({ locale: Simpli.lang, messages: Simpli.locale })
    prototype.bus = new Vue({ router: prototype.router, i18n: prototype.i18n })

    prototype.route = prototype.bus.$route

    prototype.t = prototype.bus.$t
    prototype.tc = prototype.bus.$tc
    prototype.te = prototype.bus.$te
    prototype.d = prototype.bus.$d
    prototype.n = prototype.bus.$n

    prototype.snotify = prototype.bus.$snotify

    Vue.use(VueMoney, currencyConfig(Simpli.currency))

    moment.locale(prototype.i18n.locale)

    for (const key in prototype.filter) {
      Vue.filter(key, prototype.filter[key])
    }

    for (const key in prototype.component) {
      Vue.component(key, prototype.component[key])
    }

    Vue.prototype.$axios = prototype.axios
    Vue.prototype.$socket = prototype.socket
    Vue.prototype.$bus = prototype.bus
    Vue.prototype.$snotify = prototype.snotify
    Vue.prototype.$await = prototype.await
    Vue.prototype.$modal = prototype.modal
    Vue.prototype.$tip = prototype.tip
  }
}
