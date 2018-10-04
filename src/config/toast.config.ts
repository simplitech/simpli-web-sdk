/**
 * @file
 * VUE Snotify
 * Used in library: vue-snotify
 *
 * Use this file to configure the toast behaviour
 * The standard configuration can be found below
 * See https://artemsky.github.io/vue-snotify/
 */

import { SnotifyPosition } from 'vue-snotify'
import { ToastBackdrop, ToastStyle } from '../enums/toast.enum'

/**
 * Toast Default Style
 * @type {ToastStyle.MATERIAL}
 */
export const ToastDefaultStyle: ToastStyle = ToastStyle.MATERIAL

/**
 * Toast Global Config
 */
export const ToastGlobalConfig = {
  newOnTop: true, // true = stack, false = queue
  maxOnScreen: 5,
  maxAtPosition: 5,
}

/**
 * Toast Default Config
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
 * ADD HERE YOUR CUSTOM CONFIGS
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
