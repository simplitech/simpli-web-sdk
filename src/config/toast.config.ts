import { SnotifyPosition } from 'vue-snotify'
import { ToastBackdrop, ToastStyle } from '../enums/toast.enum'

/*
 * ===================================================== *
 *** This TOAST was provided by a Third-Party project ***
 * ===================================================== *
 * Access docs in https://github.com/artemsky/vue-snotify
 * The standard configuration can be found below
 * You can use this toast globally by using vm.$snotify or helper
 */

/*
 *** CHOSE HERE YOUR STYLE ***
 */
export const ToastDefaultStyle: ToastStyle = ToastStyle.MATERIAL

/*
 *** MODIFY HERE THE TOAST GLOBAL CONFIG ***
 */
export const ToastGlobalConfig = {
  newOnTop: true, // true = stack, false = queue
  maxOnScreen: 5,
  maxAtPosition: 5,
}

/*
 *** MODIFY HERE THE TOAST DEFAULT CONFIG ***
 */
export const ToastDefaultConfig = {
  timeout: 5000, // 0 is infinite
  position: SnotifyPosition.rightBottom,
  showProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  titleMaxLength: 31,
  bodyMaxLength: 127,
  backdrop: ToastBackdrop.NONE,
}

/*
 *** ADD HERE YOUR CUSTOM CONFIGS ***
 * Note1: you can import these configs and use in vm.$snotify(..., YOUR_CONFIG)
 * Example:
 * import {MyToast} from 'config/toast.config
 * ...
 * this.$snotify('Hello world', MyToast)
 */
export const ToastImportant = {
  timeout: 0,
  position: SnotifyPosition.centerCenter,
  showProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  backdrop: ToastBackdrop.STRONG,
}
/*******************************************/
