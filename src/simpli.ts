import * as moment from 'moment'
import { merge } from 'lodash'
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
import VeeValidate from 'vee-validate'

import socket from './app/socket'
import { DefaultConfig, AjvController } from './app'
import { Lang, Currency } from './enums'
import { AwaitController } from './components/utils/Await'
import { ModalController } from './components/utils/Modal'
import { TipController } from './components/utils/Tip'
import { $Prototype, ComponentOptions, FilterOptions, LocaleOptions, SocketInstance } from './interfaces'

import enUs from './locale/en-US/lang'
import ptBr from './locale/pt-BR/lang'

/**
 * Provides getters from anywhere according to your [configuration](../../docs/getting-started.md).
 * All getters are static from this class.
 */
export abstract class $ {
  /**
   * Gets the [axios](https://github.com/axios/axios) instance in order to use a native HTTP request.
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * function example() {
   *   $.axios.get('path/to/url') // request from the native axios
   * }
   * ```
   */
  static get axios(): AxiosInstance {
    return Simpli.$prototype.axios
  }

  /**
   * Gets the [[SocketInstance]] in order to use socket connection.
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * function example() {
   *   $.socket.connect('notification', 'path/to/url') // socket connection
   * }
   * ```
   */
  static get socket(): SocketInstance {
    return Simpli.$prototype.socket
  }

  /**
   * Gets global components provided by you.
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * function example() {
   *   $.component.MyGlobalComponent
   * }
   * ```
   */
  static get component(): ComponentOptions {
    return Simpli.$prototype.component
  }

  /**
   * Gets filters provided by you.
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * function example() {
   *   $.filter.MyCustomFilter
   * }
   * ```
   */
  static get filter(): FilterOptions {
    return Simpli.$prototype.filter
  }

  /**
   * Gets the `router` variable from [vue-router](https://router.vuejs.org/) module.
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * function example() {
   *   $.router.push('/login') // go to login page
   * }
   * ```
   */
  static get router(): VueRouter {
    return Simpli.$prototype.router
  }

  /**
   * Gets the `i18n` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module.
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * function example() {
   *   $.i18n.messages // get locale messages structure
   * }
   * ```
   */
  static get i18n(): VueI18n {
    return Simpli.$prototype.i18n
  }

  /**
   * Custom `bus` event generated after you run `Simpli.install()`
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * function example() {
   *   $.bus.myCustomAction() // custom action you have provided
   * }
   * ```
   */
  static get bus(): Vue {
    return Simpli.$prototype.bus
  }

  /**
   * Gets the `route` variable from [vue-router](https://router.vuejs.org/) module
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * async function example() {
   *   $.route.query // get the query params of current page
   * }
   * ```
   */
  static get route(): Route {
    return Simpli.$prototype.route
  }

  /**
   * Gets the `t` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * async function example() {
   *   $.t('path.to.locale') // translate a text
   * }
   * ```
   */
  static get t(): typeof VueI18n.prototype.t {
    return Simpli.$prototype.t
  }

  /**
   * Gets the `tc` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * async function example() {
   *   $.tc('path.to.locale') // translate a text
   * }
   * ```
   */
  static get tc(): typeof VueI18n.prototype.tc {
    return Simpli.$prototype.tc
  }

  /**
   * Gets the `te` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * async function example() {
   *   $.te('path.to.locale') // translate a text
   * }
   * ```
   */
  static get te(): typeof VueI18n.prototype.te {
    return Simpli.$prototype.te
  }

  /**
   * Gets the `d` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * async function example() {
   *   $.d(0)
   * }
   * ```
   */
  static get d(): typeof VueI18n.prototype.d {
    return Simpli.$prototype.d
  }

  /**
   * Gets the `n` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * async function example() {
   *   $.n(0)
   * }
   * ```
   */
  static get n(): typeof VueI18n.prototype.n {
    return Simpli.$prototype.n
  }

  /**
   * Gets the variable from [vue-snotify](https://artemsky.github.io/vue-snotify/documentation/index.html) module
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * async function example() {
   *   $.snotify.success('Success message') // emit a success message
   * }
   * ```
   */
  static get snotify(): SnotifyService {
    return Simpli.$prototype.snotify
  }

  /**
   * Gets the `ajv` variable from [ajv](https://ajv.js.org/) module
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * async function example() {
   *   $.ajv.validate(schema, data) // validate a data from a schema
   * }
   * ```
   */
  static get ajv(): AjvController {
    return Simpli.$prototype.ajv
  }

  /**
   * The controller of [[Await]] Component
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * async function example() {
   *   $.await.init('awaitName') // start loading some content
   * }
   * ```
   */
  static get await(): AwaitController {
    return Simpli.$prototype.await
  }

  /**
   * The controller of [[Modal]] Component
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * async function example() {
   *   $.modal.open('modalName') // open a modal by his name
   * }
   * ```
   */
  static get modal(): ModalController {
    return Simpli.$prototype.modal
  }

  /**
   * The controller of [[Tip]] Component
   *
   * ```typescript
   * import {$} from 'simpli-web-sdk'
   *
   * async function example() {
   *   $.tip.show('tipName') // show a tip by his name
   * }
   * ```
   */
  static get tip(): TipController {
    return Simpli.$prototype.tip
  }
}

/**
 * Static class used to initializing this library
 *
 * ```typescript
 * import Simpli from 'simpli-web-sdk'
 *
 * import {axiosInstance, socketInstance} from '@/config/http.config'
 * import {defaultCurrency, defaultLang, localeVueI18n, localeAjvI18n} from '@/config/locale.config'
 * import {components} from '@/config/component.config'
 * import {filters} from '@/config/filter.config'
 * import {router} from '@/config/router.config'
 *
 * Simpli.axios = axiosInstance
 * Simpli.socket = socketInstance
 * Simpli.lang = defaultLang
 * Simpli.currency = defaultCurrency
 * Simpli.components = components
 * Simpli.filters = filters
 * Simpli.locale = localeVueI18n
 * Simpli.localeAjv = localeAjvI18n
 * Simpli.router = router
 *
 * Simpli.install()
 * ```
 */
export class Simpli {
  /**
   * @hidden
   */
  private static $: $Prototype

  /**
   * Setup of the [axios](https://github.com/axios/axios) instance in order to use a native HTTP request.
   *
   * ```typescript
   * import Simpli from 'simpli-web-sdk'
   *
   * Simpli.axios = axios.create({
   *   baseURL: process.env.VUE_APP_API_URL,
   * })
   *
   * Simpli.install()
   * ```
   */
  static axios?: AxiosInstance

  /**
   * Setup of the [[SocketInstance]] in order to use socket connection.
   *
   * ```typescript
   * import Simpli from 'simpli-web-sdk'
   *
   * Simpli.socket = socket.create({
   *   baseURL: process.env.VUE_APP_SOCKET_URL,
   * })
   *
   * Simpli.install()
   * ```
   */
  static socket?: SocketInstance

  /**
   * Setup of the global Vue components.
   *
   * ```typescript
   * import Simpli from 'simpli-web-sdk'
   * import MyComponent from '@/components/MyComponent.vue'
   *
   * Simpli.components = {
   *   MyComponent,
   * }
   *
   * Simpli.install()
   * ```
   */
  static components: ComponentOptions = {}

  /**
   * Setup of the global Vue filters.
   *
   * ```typescript
   * import Simpli from 'simpli-web-sdk'
   *
   * Simpli.filters = {
   *   exclamation: (value?: string): string => {
   *     return value ? `${value}!!` : ''
   *   },
   * }
   *
   * Simpli.install()
   * ```
   */
  static filters: FilterOptions = {}

  /**
   * Setup of locale from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html)
   *
   * ```typescript
   * import Simpli, {Lang} from 'simpli-web-sdk'
   *
   * Simpli.locale = {
   *   [Lang.EN_US]: enUs,
   *   [Lang.PT_BR]: ptBr,
   * }
   *
   * Simpli.install()
   * ```
   */
  static locale?: LocaleOptions

  /**
   * Setup of validation from [ajv](https://ajv.js.org/) module
   *
   * ```typescript
   * import Simpli, {Lang} from 'simpli-web-sdk'
   *
   * export const localeAjvI18n: LocaleOptions = {
   *   [Lang.EN_US]: require('ajv-i18n/localize/en'),
   *   [Lang.PT_BR]: require('ajv-i18n/localize/pt-BR'),
   * }
   *
   * Simpli.install()
   * ```
   */
  static localeAjv?: LocaleOptions

  /**
   * Setup of validation for vee-validate
   *
   * ```typescript
   * import Simpli, {Lang} from 'simpli-web-sdk'
   *
   * export const localeVeeValidate: LocaleOptions = {
   *   [Lang.EN_US]: require('vee-validate/dist/locale/en'),
   *   [Lang.PT_BR]: require('vee-validate/dist/locale/pt_BR'),
   * }
   *
   * Simpli.install()
   * ```
   */
  static localeVeeValidate?: LocaleOptions

  /**
   * Setups the `router` variable from [vue-router](https://router.vuejs.org/) module.
   *
   * ```typescript
   * import Simpli from 'simpli-web-sdk'
   * import SignInView from '@/views/SignInView.vue'
   *
   * Simpli.router = {
   *   routes: [
   *     {
   *       path: '/sign-in',
   *       name: 'signIn',
   *       component: SignInView,
   *     },
   *   ],
   * }
   *
   * Simpli.install()
   * ```
   */
  static router?: RouterOptions

  /**
   * Setups the default language.
   *
   * ```typescript
   * import Simpli, {Lang} from 'simpli-web-sdk'
   *
   * Simpli.lang = Lang.PT_BR
   *
   * Simpli.install()
   * ```
   */
  static lang: Lang = Lang.EN_US

  /**
   * Setups the default currency.
   *
   * ```typescript
   * import Simpli, {Currency} from 'simpli-web-sdk'
   *
   * Simpli.currency = Currency.BRL
   *
   * Simpli.install()
   * ```
   */
  static currency: Currency = Currency.USD

  /**
   * @hidden
   */
  static readonly defaultLocale = {
    [Lang.EN_US]: enUs,
    [Lang.PT_BR]: ptBr,
  }

  /**
   * @hidden
   */
  static get $prototype() {
    return Simpli.$
  }

  /**
   * Change the current language of the app
   *
   * ```typescript
   * import Simpli, {Lang} from 'simpli-web-sdk'
   *
   * Simpli.changeLocale(Lang.PT_BR)
   * ```
   *
   * @param lang Desired language
   */
  static changeLocale(lang: Lang) {
    Simpli.$.i18n.locale = lang
    Simpli.$.ajv.i18n.locale = lang
  }

  /**
   * Change the current language of the app
   *
   * ```typescript
   * import Simpli, {Currency} from 'simpli-web-sdk'
   *
   * Simpli.changeCurrency(Currency.BRL)
   * ```
   *
   * @param currency Desired currency
   */
  static changeCurrency(currency: Currency) {
    Vue.use(VueMoney, {
      decimal: $.t('lang.decimal') as string,
      thousands: $.t('lang.thousands') as string,
      prefix: $.t(`currency.${currency}.prefix`) as string,
      precision: Number($.t(`currency.${currency}.precision`) as string),
    })
  }

  /**
   * Applies the Simpli setup
   */
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
    const $i18n = new VueI18n({ locale: Simpli.lang, messages: merge(Simpli.defaultLocale, Simpli.locale) })
    const $bus = new Vue({ router: $router, i18n: $i18n })
    Vue.use(VeeValidate, {
      i18n: $i18n,
      useConstraintAttrs: false,
      dictionary: merge(Simpli.localeVeeValidate, Simpli.locale),
    })

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
