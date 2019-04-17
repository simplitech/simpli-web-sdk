import { validate } from 'class-validator'
import { $ } from '../../simpli'
import { IValidation } from '../../interfaces'
import { Helper } from '../../main'

export class Validation implements IValidation {
  static $defaultI18nError = 'system.error.{errorName}'

  static translateValidation(errorName: string, ...args: string[]) {
    const defaultI18nError = `${Validation.$defaultI18nError}`.replace(/{errorName}/, errorName)

    return $.t(defaultI18nError, args) as string
  }

  static async toastValidate(entity: Object) {
    try {
      await new Validation(entity).$validateFirstError()
    } catch (e) {
      Helper.errorValidation(e.message)
      throw e
    }
  }

  constructor(entity?: Object) {
    this.entity = entity
  }

  entity?: Object

  async $validateFirstError() {
    const errors = await validate(this.entity || this)
    if (errors.length === 0) return
    const firstError = errors[0]
    const firstKey = Object.keys(firstError.constraints)[0]
    throw new Error(firstError.constraints[firstKey])
  }

  async $validate() {
    await this.$validateFirstError()
  }
}
