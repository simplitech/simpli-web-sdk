import { $ } from '../../simpli'
import { Helper } from '../../main'
import { InputType } from '../../interfaces'
import { MaskPresetConfig } from '../config/MaskPresetConfig'

export class RgMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return $.t('mask.rg') as string
  }

  setterTransform(input: InputType) {
    this.value = Helper.toString(input)

    if (this.value.length === 8 || this.value.length === 9) {
      this.isValid = true
      return this.value
    }

    this.isValid = this.value.length === 0 ? null : false
    return null
  }
}
