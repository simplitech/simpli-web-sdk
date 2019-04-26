import { $ } from '../../simpli'
import { Helper } from '../../main'
import { InputType } from '../../interfaces'
import { MaskPresetConfig } from '../config/MaskPresetConfig'

export class CpfMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return $.t('mask.cpf') as string
  }

  setterTransform(input: InputType) {
    this.value = Helper.toString(input)

    if (this.value.length === 11) {
      this.isValid = true
      return this.value
    }

    this.isValid = this.value.length === 0 ? null : false
    return null
  }
}
