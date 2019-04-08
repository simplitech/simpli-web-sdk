import { SnotifyToastConfig } from 'vue-snotify'
import { $ } from '../simpli'
import { push } from '../helpers'

/**
 * Push a success Toast
 * @param {string} body
 * @param {string} title
 * @param {boolean} useI18n
 * @param {SnotifyToastConfig} config
 */
export function success(body: string, title?: string, useI18n: boolean = true, config?: SnotifyToastConfig) {
  if (useI18n) $.snotify.success($.t(body), title ? $.t(title) : undefined, config || {})
  else $.snotify.success(body, title || '', config || {})
}

/**
 * Push a success Toast and go to a given uri vue-router
 * @param {string} body
 * @param {string} uri
 * @param {string} title
 * @param {boolean} useI18n
 * @param {SnotifyToastConfig} config
 */
export function successAndPush(
  body: string,
  uri: string,
  title?: string,
  useI18n: boolean = true,
  config?: SnotifyToastConfig
) {
  success(body, title, useI18n, config)
  push(uri)
}

/**
 * Push an error Toast
 * @param {string} body
 * @param {string} title
 * @param {boolean} useI18n
 * @param {SnotifyToastConfig} config
 */
export function error(body: string, title?: string, useI18n: boolean = true, config?: SnotifyToastConfig) {
  if (useI18n) $.snotify.error($.t(body), title ? $.t(title) : undefined, config || {})
  else $.snotify.error(body, title || '', config || {})
}

/**
 * Push an error Toast using Validation Label
 * @param {string} message
 */
export function errorValidation(message: string) {
  error(message, $.t('system.error.validation') as string, false)
}

/**
 * Push an error Toast and go to a given uri vue-router
 * @param {string} body
 * @param {string} uri
 * @param {string} title
 * @param {boolean} useI18n
 * @param {SnotifyToastConfig} config
 */
export function errorAndPush(
  body: string,
  uri: string,
  title?: string,
  useI18n: boolean = true,
  config?: SnotifyToastConfig
) {
  error(body, title, useI18n, config)
  push(uri)
}

/**
 * Show an error and interrupt the code
 * @param {string} body
 * @param {string} title
 * @param {boolean} useI18n
 * @param {SnotifyToastConfig} config
 */
export function abort(body: string, title?: string, useI18n: boolean = true, config?: SnotifyToastConfig) {
  error(body, title, useI18n, config)
  throw new Error(useI18n ? $.t(body) : body)
}

/**
 * Push a warning Toast
 * @param {string} body
 * @param {string} title
 * @param {boolean} useI18n
 * @param {SnotifyToastConfig} config
 */
export function warning(body: string, title?: string, useI18n: boolean = true, config?: SnotifyToastConfig) {
  if (useI18n) $.snotify.warning($.t(body), title ? $.t(title) : undefined, config || {})
  else $.snotify.warning(body, title || '', config || {})
}

/**
 * Push a warning Toast and go to a given uri vue-router
 * @param {string} body
 * @param {string} uri
 * @param {string} title
 * @param {boolean} useI18n
 * @param {SnotifyToastConfig} config
 */
export function warningAndPush(
  body: string,
  uri: string,
  title?: string,
  useI18n: boolean = true,
  config?: SnotifyToastConfig
) {
  warning(body, title, useI18n, config)
  push(uri)
}

/**
 * Push an info Toast
 * @param {string} body
 * @param {string} title
 * @param {boolean} useI18n
 * @param {SnotifyToastConfig} config
 */
export function info(body: string, title?: string, useI18n: boolean = true, config?: SnotifyToastConfig) {
  if (useI18n) $.snotify.info($.t(body), title ? $.t(title) : undefined, config || {})
  else $.snotify.info(body, title || '', config || {})
}

/**
 * Push an info Toast and go to a given uri vue-router
 * @param {string} body
 * @param {string} uri
 * @param {string} title
 * @param {boolean} useI18n
 * @param {SnotifyToastConfig} config
 */
export function infoAndPush(
  body: string,
  uri: string,
  title?: string,
  useI18n: boolean = true,
  config?: SnotifyToastConfig
) {
  info(body, title, useI18n, config)
  push(uri)
}
