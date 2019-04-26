import { $ } from '../../simpli'
import { InputType } from '../../interfaces'
import { MaskPresetConfig } from '../config/MaskPresetConfig'

export class PhoneMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return [$.t('mask.phone') as string, $.t('mask.phoneAlt') as string]
  }
}
