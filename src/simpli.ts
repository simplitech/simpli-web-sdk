import * as moment from 'moment'
import Vue from 'vue'
import axios, { AxiosInstance } from 'axios'
import VueSnotify from 'vue-snotify'
import VueRouter, { RouterOptions } from 'vue-router'
import VueI18n from 'vue-i18n'
import VueTheMask from 'vue-the-mask'
import VueMoney from 'v-money'
import { Lang, Currency } from './enums'
import { currencyConfig } from './helpers'
import { AwaitController } from './components/utils/Await'
import { ModalController } from './components/utils/Modal'
import { TipController } from './components/utils/Tip'
import { defaultFilters, defaultComponents } from './config'
import { $Prototype, ComponentOptions, FilterOptions, LocaleOptions, SocketInstance } from './interfaces'
import { socket } from './app'

Vue.use(VueSnotify)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(VueTheMask)

const router = new VueRouter()
const i18n = new VueI18n()
const bus = new Vue({ i18n, router })

export abstract class $ {
  static get axios() {
    return prototype.axios
  }
  static get socket() {
    return prototype.socket
  }
  static get component() {
    return prototype.component
  }
  static get filter() {
    return prototype.filter
  }
  static get router() {
    return prototype.router
  }
  static get i18n() {
    return prototype.i18n
  }
  static get bus() {
    return prototype.bus
  }
  static get route() {
    return prototype.route
  }
  static get t() {
    return prototype.t
  }
  static get tc() {
    return prototype.tc
  }
  static get te() {
    return prototype.te
  }
  static get d() {
    return prototype.d
  }
  static get n() {
    return prototype.n
  }
  static get snotify() {
    return prototype.snotify
  }
  static get await() {
    return prototype.await
  }
  static get modal() {
    return prototype.modal
  }
  static get tip() {
    return prototype.tip
  }
}

const prototype: $Prototype = {
  axios: axios.create(),
  socket: socket.create(),

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

    prototype.component = { ...defaultComponents, ...Simpli.components }
    prototype.filter = { ...defaultFilters, ...Simpli.filters }

    prototype.router = new VueRouter(Simpli.router)
    prototype.i18n = new VueI18n({
      locale: Simpli.lang,
      messages: Simpli.locale,
    })
    prototype.bus = new Vue({ router: prototype.router, i18n: prototype.i18n })

    prototype.route = prototype.bus.$route
    prototype.snotify = prototype.bus.$snotify
    prototype.t = prototype.bus.$t
    prototype.tc = prototype.bus.$tc
    prototype.te = prototype.bus.$te
    prototype.d = prototype.bus.$d
    prototype.n = prototype.bus.$n

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
    Vue.prototype.$await = prototype.await
    Vue.prototype.$modal = prototype.modal
    Vue.prototype.$tip = prototype.tip
  }
}
