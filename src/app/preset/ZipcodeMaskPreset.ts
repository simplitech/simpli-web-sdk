import { $ } from '../../simpli'
import { MaskPresetConfig } from '../config/MaskPresetConfig'

export class ZipcodeMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return [$.t('mask.zipcode') as string, $.t('mask.zipcodeAlt') as string]
  }
}
