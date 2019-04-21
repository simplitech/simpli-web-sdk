import { Vue } from 'vue-property-decorator'
import VueRouter, { Route } from 'vue-router'
import VueI18n from 'vue-i18n'
import { AxiosInstance } from 'axios'
import { SnotifyService } from 'vue-snotify/SnotifyService'
import { AwaitController } from '../components/utils/Await'
import { ModalController } from '../components/utils/Modal'
import { TipController } from '../components/utils/Tip'
import { SocketInstance } from './socket.interface'

export interface FilterOptions {
  readonly [key: string]: (val?: string, ...params: any[]) => string
}

export interface LocaleOptions {
  readonly [key: string]: any
}

export interface ComponentOptions {
  readonly [key: string]: any
}

export interface $Prototype {
  axios: AxiosInstance
  socket: SocketInstance

  component: ComponentOptions
  filter: FilterOptions

  router: VueRouter
  i18n: VueI18n
  bus: Vue

  route: Route

  t: typeof VueI18n.prototype.t
  tc: typeof VueI18n.prototype.tc
  te: typeof VueI18n.prototype.te
  d: typeof VueI18n.prototype.d
  n: typeof VueI18n.prototype.n

  snotify: SnotifyService

  await: AwaitController
  modal: ModalController
  tip: TipController
}
