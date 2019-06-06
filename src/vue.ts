import { AxiosInstance, SocketInstance } from './interfaces'
import { SnotifyService } from 'vue-snotify/SnotifyService'
import { AjvController } from './app'
import { AwaitController } from './components/utils/Await'
import { ModalController } from './components/utils/Modal'
import { TipController } from './components/utils/Tip'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
    $socket: SocketInstance
    $bus: Vue
    $snotify: SnotifyService
    $ajv: AjvController
    $await: AwaitController
    $modal: ModalController
    $tip: TipController
  }
}
