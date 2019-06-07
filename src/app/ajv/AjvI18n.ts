import { ErrorObject } from 'ajv'
import { Lang } from '../../enums'
import { Dictionary } from '../../interfaces'

export class AjvI18n {
  constructor(locale: Lang, messages?: Dictionary<(e: ErrorObject[]) => void>) {
    this.locale = locale
    if (messages) {
      this.messages = messages
    }
  }

  get translate(): (e: ErrorObject[]) => void {
    return this.messages[this.locale]
  }

  locale: Lang
  messages: Dictionary<(e: ErrorObject[]) => void> = {
    [Lang.EN_US]: require('ajv-i18n/localize/en'),
    [Lang.AR]: require('ajv-i18n/localize/ar'),
    [Lang.DE]: require('ajv-i18n/localize/de'),
    [Lang.ES]: require('ajv-i18n/localize/es'),
    [Lang.FR]: require('ajv-i18n/localize/fr'),
    [Lang.HU]: require('ajv-i18n/localize/hu'),
    [Lang.IT]: require('ajv-i18n/localize/it'),
    [Lang.JA]: require('ajv-i18n/localize/ja'),
    [Lang.KO]: require('ajv-i18n/localize/ko'),
    [Lang.NB]: require('ajv-i18n/localize/nb'),
    [Lang.NL]: require('ajv-i18n/localize/nl'),
    [Lang.PL]: require('ajv-i18n/localize/pl'),
    [Lang.PT_BR]: require('ajv-i18n/localize/pt-BR'),
    [Lang.RU]: require('ajv-i18n/localize/ru'),
    [Lang.SK]: require('ajv-i18n/localize/sk'),
    [Lang.SV]: require('ajv-i18n/localize/sv'),
    [Lang.TH]: require('ajv-i18n/localize/th'),
    [Lang.ZH_CN]: require('ajv-i18n/localize/zh'),
    [Lang.ZH_TW]: require('ajv-i18n/localize/zh-TW'),
  }
}
