import { Http } from 'vue-resource'
import { AwaitController } from '../components/Await'
import { ModalController } from '../components/Modal'
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
