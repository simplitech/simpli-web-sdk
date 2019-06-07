import { AxiosInstance } from 'axios'
import { Route } from 'vue-router'
import { VueRouter } from 'vue-router/types/router'
import VueI18n, { IVueI18n } from 'vue-i18n'
import { SnotifyService } from 'vue-snotify/SnotifyService'
import { SocketInstance } from './interfaces'
import { AjvController } from './app'
import { AwaitController } from './components/utils/Await'
import { ModalController } from './components/utils/Modal'
import { TipController } from './components/utils/Tip'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
    $socket: SocketInstance

    $router: VueRouter
    $route: Route

    $bus: Vue

    readonly $i18n: VueI18n & IVueI18n
    $t: typeof VueI18n.prototype.t
    $tc: typeof VueI18n.prototype.tc
    $te: typeof VueI18n.prototype.te
    $d: typeof VueI18n.prototype.d
    $n: typeof VueI18n.prototype.n

    $snotify: SnotifyService

    $ajv: AjvController

    $await: AwaitController
    $modal: ModalController
    $tip: TipController
  }
}
