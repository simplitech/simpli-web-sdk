import { Helper } from '../../main'
import { Dictionary, InputType, MaskToken } from '../../interfaces'

export abstract class MaskPresetConfig {
  abstract mask: string | string[]
  masked?: boolean
  tokens?: Dictionary<MaskToken>

  isValid: boolean | null = null
  value: string | null = null

  getterTransform(input: InputType) {
    return input || this.value
  }

  setterTransform(input: InputType): InputType | undefined {
    this.value = Helper.toString(input)
    this.isValid = this.value.length === 0 ? null : true
    return input
  }
}
