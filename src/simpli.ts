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
import { DefaultConfig, AjvController, AjvI18n } from './app'
import { Lang, Currency } from './enums'
import { currencyConfig } from './helpers'
import { AwaitController } from './components/utils/Await'
import { ModalController } from './components/utils/Modal'
import { TipController } from './components/utils/Tip'
import { $Prototype, ComponentOptions, FilterOptions, LocaleOptions, SocketInstance } from './interfaces'

export abstract class $ {
  static get axios(): AxiosInstance {
    return Simpli.$prototype.axios
  }
  static get socket(): SocketInstance {
    return Simpli.$prototype.socket
  }
  static get component(): ComponentOptions {
    return Simpli.$prototype.component
  }
  static get filter(): FilterOptions {
    return Simpli.$prototype.filter
  }
  static get router(): VueRouter {
    return Simpli.$prototype.router
  }
  static get i18n(): VueI18n {
    return Simpli.$prototype.i18n
  }
  static get bus(): Vue {
    return Simpli.$prototype.bus
  }
  static get route(): Route {
    return Simpli.$prototype.route
  }
  static get t(): typeof VueI18n.prototype.t {
    return Simpli.$prototype.t
  }
  static get tc(): typeof VueI18n.prototype.tc {
    return Simpli.$prototype.tc
  }
  static get te(): typeof VueI18n.prototype.te {
    return Simpli.$prototype.te
  }
  static get d(): typeof VueI18n.prototype.d {
    return Simpli.$prototype.d
  }
  static get n(): typeof VueI18n.prototype.n {
    return Simpli.$prototype.n
  }
  static get snotify(): SnotifyService {
    return Simpli.$prototype.snotify
  }
  static get ajv(): AjvController {
    return Simpli.$prototype.ajv
  }
  static get await(): AwaitController {
    return Simpli.$prototype.await
  }
  static get modal(): ModalController {
    return Simpli.$prototype.modal
  }
  static get tip(): TipController {
    return Simpli.$prototype.tip
  }
}

export class Simpli {
  private static $: $Prototype

  static axios?: AxiosInstance
  static socket?: SocketInstance
  static components: ComponentOptions = {}
  static filters: FilterOptions = {}
  static locale?: LocaleOptions
  static localeAjv?: LocaleOptions
  static router?: RouterOptions
  static lang: Lang = Lang.EN_US
  static currency: Currency = Currency.USD

  static get $prototype() {
    return Simpli.$
  }

  static changeLocale(lang: Lang) {
    Simpli.$.i18n.locale = lang
    Simpli.$.ajv.i18n.locale = lang
  }

  static changeCurrency(currency: Currency) {
    Vue.use(VueMoney, currencyConfig(currency))
  }

  static install() {
    Vue.use(VueRouter)
    Vue.use(VueI18n)
    Vue.use(VueSnotify)
    Vue.use(VueTheMask)

    const $axios = Simpli.axios || (axios && axios.create())
    const $socket = Simpli.socket || (socket && socket.create())

    const $component = { ...DefaultConfig.components, ...Simpli.components }
    const $filter = { ...DefaultConfig.filters, ...Simpli.filters }

    const $router = new VueRouter(Simpli.router)
    const $i18n = new VueI18n({ locale: Simpli.lang, messages: Simpli.locale })
    const $bus = new Vue({ router: $router, i18n: $i18n })

    const $route = $bus.$route

    const $t = $bus.$t
    const $tc = $bus.$tc
    const $te = $bus.$te
    const $d = $bus.$d
    const $n = $bus.$n

    const $snotify = $bus.$snotify

    const $ajv = new AjvController(Simpli.lang, Simpli.localeAjv)

    const $await = new AwaitController()
    const $modal = new ModalController()
    const $tip = new TipController()

    for (const key in $filter) {
      Vue.filter(key, $filter[key])
    }

    for (const key in $component) {
      Vue.component(key, $component[key])
    }

    Simpli.$ = {
      axios: $axios,
      socket: $socket,

      component: $component,
      filter: $filter,

      router: $router,
      i18n: $i18n,
      bus: $bus,

      route: $route,

      t: $t,
      tc: $tc,
      te: $te,
      d: $d,
      n: $n,

      snotify: $snotify,

      ajv: $ajv,

      await: $await,
      modal: $modal,
      tip: $tip,
    }

    moment.locale(Simpli.$.i18n.locale)

    Simpli.changeCurrency(Simpli.currency)

    Vue.prototype.$axios = Simpli.$.axios
    Vue.prototype.$socket = Simpli.$.socket
    Vue.prototype.$bus = Simpli.$.bus
    Vue.prototype.$snotify = Simpli.$.snotify
    Vue.prototype.$ajv = Simpli.$.ajv
    Vue.prototype.$await = Simpli.$.await
    Vue.prototype.$modal = Simpli.$.modal
    Vue.prototype.$tip = Simpli.$.tip
  }
}
