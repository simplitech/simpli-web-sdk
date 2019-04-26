import moment from 'moment'
import { $ } from '../../simpli'
import { Helper } from '../../main'
import { InputType } from '../../interfaces'
import { MaskPresetConfig } from '../config/MaskPresetConfig'

export class DatetimeMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return $.t('mask.datetime') as string
  }

  masked = true

  isDatetime: boolean | null = null

  getterTransform(input: InputType) {
    if (input) {
      const value = Helper.toString(input)
      if (this.isDatetime === false) {
        return Helper.date(value)
      } else {
        return Helper.datetime(value)
      }
    }
    return this.value
  }

  setterTransform(input: InputType) {
    this.value = Helper.toString(input)
    const date = moment(this.value, $.t('dateFormat.datetime') as string)

    if (this.value.length !== 10 && this.value.length !== 11 && this.value.length < 16) {
      this.isValid = this.value.length === 0 ? null : false
      this.isDatetime = null
      return null
    } else if (date.isValid()) {
      this.isDatetime = !(this.value.length === 10 || this.value.length === 11)
      this.isValid = true
      return date.format()
    }
  }
}
