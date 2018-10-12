import { Http } from 'vue-resource/types/vue_resource'
import { AwaitController } from './Await'
import { ModalController } from './Modal'
import { SnotifyService } from 'vue-snotify/SnotifyService'

declare module 'vue/types/vue' {
  interface Vue {
    $apiURL: string
    $bus: Vue
    $snotify: SnotifyService | any
    $await: AwaitController
    $modal: ModalController
  }
  interface VueConstructor {
    http: Http
  }
}
