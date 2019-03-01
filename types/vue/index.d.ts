import { Http } from 'vue-resource/types/vue_resource'
import { AwaitController } from './Await'
import { ModalController } from './Modal'
import { TipController } from './Tip'
import { SnotifyService } from 'vue-snotify/SnotifyService'

declare module 'vue/types/vue' {
  interface Vue {
    $apiURL: string
    $socketURL: string
    $bus: Vue
    $snotify: SnotifyService | any
    $await: AwaitController
    $modal: ModalController
    $tip: TipController
  }
  interface VueConstructor {
    http: Http
  }
}
