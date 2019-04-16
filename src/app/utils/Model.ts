import { Validation } from './Validation'
import { $ } from '../../simpli'
import { Request } from '..'
import { clone } from '../../helpers'
import { IValidation } from '../../interfaces'

export abstract class Model implements IValidation {
  /**
   * Name of entity
   */
  readonly $name: string = this.constructor.name

  /**
   * Spinner suffix name
   */
  readonly $spinnerSuffixName?: string

  /**
   * List
   * @param url
   */
  async $list(url: string) {
    return await Request.get(url)
      .name(`list${this.$spinnerSuffixName || this.$name}`)
      .asArrayOf(this.$clone())
      .getResponse()
  }

  /**
   * Populate
   * @param url
   */
  async $populate(url: string) {
    return await Request.get(url)
      .name(`populate${this.$spinnerSuffixName || this.$name}`)
      .as(this)
      .getResponse()
  }

  /**
   * Persist
   * @param url
   */
  async $persist(url: string) {
    return await Request.post(url, this)
      .name(`persist${this.$spinnerSuffixName || this.$name}`)
      .asAny()
      .getResponse()
  }

  /**
   * Clone this entity
   */
  $clone() {
    return clone(this)
  }

  /**
   * Translate the title in the dictionary
   */
  $translateTitle() {
    return $.t(`classes.${this.$name}.title`) as string
  }

  /**
   * Translate a column indicated in the dictionary
   * @param column
   */
  $translateColumn(column: string) {
    return $.t(`classes.${this.$name}.columns.${column}`) as string
  }

  /**
   * Validates resource. Shows toast if there are errors and interrupts the code
   */
  async $validate() {
    await Validation.toastValidate(this)
  }
}
