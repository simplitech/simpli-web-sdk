import * as moment from 'moment'
import Vue, { PluginObject } from 'vue'
import VueSnotify from 'vue-snotify'
import VueResource from 'vue-resource'
import { HttpInterceptor } from 'vue-resource/types/vue_resource'
import VueRouter, { RouterOptions } from 'vue-router'
import VueI18n from 'vue-i18n'
import VueTheMask from 'vue-the-mask'
import VueMoney from 'v-money'
import { Lang, Currency } from './enums'
import { currencyConfig } from './helpers'
import { AwaitController } from './components/utils/Await'
import { ModalController } from './components/utils/Modal'
import { defaultFilters, defaultComponents } from './config'
import { $Prototype, ComponentOptions, FilterOptions, LocaleOptions } from './misc'

Vue.use(VueSnotify)
Vue.use(VueResource as PluginObject<never>)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(VueTheMask)

const router = new VueRouter()
const i18n = new VueI18n()
const bus = new Vue({ i18n, router })

export const $: $Prototype = {
  apiURL: '',
  socketURL: '',

  component: {},
  filter: {},

  router,
  i18n,
  bus,

  http: bus.$http,
  resource: bus.$resource,
  route: bus.$route,
  t: bus.$t,
  tc: bus.$tc,
  te: bus.$te,
  d: bus.$d,
  n: bus.$n,
  snotify: bus.$snotify,

  await: new AwaitController(),
  modal: new ModalController(),
}

const defaultApiURL: string = 'http://localhost/api'
const defaultSocketURL: string = 'ws://localhost/ws'

const defaultLang: Lang = Lang.EN_US
const defaultCurrency: Currency = Currency.USD

export abstract class Simpli {
  static apiURL: string = defaultApiURL
  static socketURL: string = defaultSocketURL
  static httpInterceptor?: Function
  static lang: Lang = defaultLang
  static currency: Currency = defaultCurrency
  static components: ComponentOptions = {}
  static filters: FilterOptions = {}
  static locale?: LocaleOptions
  static router?: RouterOptions

  static init() {
    if (this.httpInterceptor) {
      Vue.http.interceptors[7] = Simpli.httpInterceptor as HttpInterceptor
    }

    // Ignore last slash (/)
    const regexApi = Simpli.apiURL.match(/(.*)[^\/$]/g)
    if (regexApi) $.apiURL = regexApi[0] || defaultApiURL

    // Ignore last slash (/)
    const regexSocket = Simpli.socketURL.match(/(.*)[^\/$]/g)
    if (regexSocket) $.socketURL = regexSocket[0] || defaultSocketURL

    $.component = { ...defaultComponents, ...Simpli.components }
    $.filter = { ...defaultFilters, ...Simpli.filters }

    $.router = new VueRouter(Simpli.router)
    $.i18n = new VueI18n({
      locale: Simpli.lang,
      messages: Simpli.locale,
    })
    $.bus = new Vue({ router: $.router, i18n: $.i18n })

    const component = $.component
    const filter = $.filter
    const i18n = $.i18n
    const bus = $.bus

    $.resource = bus.$resource
    $.http = bus.$http
    $.route = bus.$route
    $.snotify = bus.$snotify
    $.t = bus.$t
    $.tc = bus.$tc
    $.te = bus.$te
    $.d = bus.$d
    $.n = bus.$n

    Vue.use(VueMoney, currencyConfig(Simpli.currency))
    moment.locale(i18n.locale)

    if (filter) {
      Object.keys(filter).forEach((key: string) => Vue.filter(key, filter[key]))
    }

    if (component) {
      Object.keys(component).forEach((key: string) => {
        Vue.component(key, component[key])
      })
    }

    Vue.prototype.$apiURL = $.apiURL
    Vue.prototype.$socketURL = $.socketURL
    Vue.prototype.$bus = $.bus
    Vue.prototype.$await = $.await
    Vue.prototype.$modal = $.modal
  }
}
