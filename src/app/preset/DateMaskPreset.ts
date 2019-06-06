import moment from 'moment'
import { $ } from '../../simpli'
import { Helper } from '../../main'
import { InputType } from '../../interfaces'
import { MaskPresetConfig } from '../config/MaskPresetConfig'

export class DateMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return $.t('mask.date') as string
  }

  masked = true

  getterTransform(input: InputType) {
    if (input) {
      const value = Helper.toString(input)
      return Helper.date(value)
    }
    return this.value
  }

  setterTransform(input: InputType) {
    this.value = Helper.toString(input)
    const date = moment(this.value, $.t('dateFormat.date') as string)

    if (this.value.length < 10) {
      this.isValid = this.value.length === 0 ? null : false
      return null
    } else if (date.isValid()) {
      this.isValid = true
      return date.format()
    }
  }
}
