import { HttpBody } from './HttpBody'
import { Validator } from '../Validator'
import { IValidator } from '../../misc'

export abstract class Model extends HttpBody implements IValidator {
  /**
   * Name of entity
   */
  readonly $name: string = this.constructor.name

  /**
   * Validates resource. Shows toast if there are errors and interrupts the code
   * @returns {Promise<void>}
   */
  async validate(): Promise<void> {
    await Validator.toastValidator(this)
  }
}
