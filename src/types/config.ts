import { $http, $resource, HttpOptions, HttpResponse } from 'vue-resource'
import { Vue } from 'vue-property-decorator'
import VueRouter, { Route } from 'vue-router'
import VueI18n from 'vue-i18n'
import { SnotifyService } from 'vue-snotify/SnotifyService'
import { AwaitController } from '../components/Await'
import { ModalController } from '../components/Modal'

export interface FilterOptions {
  readonly [key: string]: (val?: string, ...params: any[]) => string
}
export interface LocaleOptions {
  readonly [key: string]: any
}
export interface ComponentOptions {
  readonly [key: string]: any
}

export interface HttpBus {
  (options: HttpOptions): PromiseLike<HttpResponse>
  get: $http
  post: $http
  put: $http
  patch: $http
  delete: $http
  jsonp: $http
}

export interface $Prototype {
  apiURL: string
  component: ComponentOptions
  filter: FilterOptions

  router: VueRouter
  i18n: VueI18n
  bus: Vue

  http: HttpBus
  resource: $resource
  route: Route
  t: Function
  tc: Function
  te: Function
  d: Function
  n: Function
  snotify: SnotifyService | any
  await: AwaitController
  modal: ModalController
}
