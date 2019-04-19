import { SnotifyToastConfig } from 'vue-snotify'
import { $ } from '../simpli'
import { push } from '../helpers'

export function success(body: string, title?: string, useI18n: boolean = true, config?: SnotifyToastConfig) {
  if (useI18n) $.snotify.success($.t(body), title ? $.t(title) : undefined, config || {})
  else $.snotify.success(body, title || '', config || {})
}

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

export function error(body: string, title?: string, useI18n: boolean = true, config?: SnotifyToastConfig) {
  if (useI18n) $.snotify.error($.t(body), title ? $.t(title) : undefined, config || {})
  else $.snotify.error(body, title || '', config || {})
}

export function errorValidation(message: string) {
  error(message, $.t('system.error.validation') as string, false)
}

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

export function abort(body: string, title?: string, useI18n: boolean = true, config?: SnotifyToastConfig) {
  error(body, title, useI18n, config)
  throw new Error(useI18n ? $.t(body) : body)
}

export function warning(body: string, title?: string, useI18n: boolean = true, config?: SnotifyToastConfig) {
  if (useI18n) $.snotify.warning($.t(body), title ? $.t(title) : undefined, config || {})
  else $.snotify.warning(body, title || '', config || {})
}

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

export function info(body: string, title?: string, useI18n: boolean = true, config?: SnotifyToastConfig) {
  if (useI18n) $.snotify.info($.t(body), title ? $.t(title) : undefined, config || {})
  else $.snotify.info(body, title || '', config || {})
}

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
