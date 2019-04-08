import {AxiosInstance} from 'axios'
import {SocketInstance} from '../../src/interfaces'
import { AwaitController } from './Await'
import { ModalController } from './Modal'
import { TipController } from './Tip'
import { SnotifyService } from 'vue-snotify/SnotifyService'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
    $socket: SocketInstance
    $bus: Vue
    $snotify: SnotifyService
    $await: AwaitController
    $modal: ModalController
    $tip: TipController
  }
}
