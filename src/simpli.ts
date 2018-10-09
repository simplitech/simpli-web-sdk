import * as moment from 'moment'
import Vue from 'vue'
import VueSnotify from 'vue-snotify'
import VueResource, { HttpInterceptor } from 'vue-resource'
import VueRouter, { RouterOptions } from 'vue-router'
import VueI18n from 'vue-i18n'
import VueMask from 'v-mask'
import VueMoney from 'v-money'
import { Lang, Currency } from './enums'
import { currencyConfig } from './helpers'
import { AwaitController } from './components/Await'
import { ModalController } from './components/Modal'
import { defaultFilters, defaultComponents } from './config'
import { $Prototype, ComponentOptions, FilterOptions, LocaleOptions } from './misc'

Vue.use(VueSnotify)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(VueMask)

const router = new VueRouter()
const i18n = new VueI18n()
const bus = new Vue({ i18n, router })

export const $: $Prototype = {
  apiURL: '',
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
const defaultLang: Lang = Lang.EN_US
const defaultCurrency: Currency = Currency.USD

export abstract class Simpli {
  static apiURL: string = defaultApiURL
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
    const regex = Simpli.apiURL.match(/(.*)[^\/$]/g)
    if (regex) $.apiURL = regex[0] || defaultApiURL

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
    Vue.prototype.$bus = $.bus
    Vue.prototype.$await = $.await
    Vue.prototype.$modal = $.modal
  }
}
