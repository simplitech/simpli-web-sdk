import { Validator } from './Validator'
import { $ } from '../../simpli'
import { request, clone } from '../../helpers'
import { IValidator, ResponseType, RequestCaller } from '../../interfaces'

export abstract class Model implements IValidator {
  /**
   * Name of entity
   */
  readonly $name: string = this.constructor.name

  /**
   * Invokes a request with the following methods:
   * call(generic), get, delete, head, post, put, patch
   *
   * @param responseType the class of response or the the instance class to be injected the response
   */
  $request(): RequestCaller<this>
  $request<T>(responseType?: ResponseType<T>): RequestCaller<T>
  $request<T>(responseType?: ResponseType<T>) {
    if (responseType) {
      return request(responseType)
    }
    return request(this)
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
    await Validator.toastValidate(this)
  }
}
