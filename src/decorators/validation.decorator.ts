import { plainToClassFromExist } from 'class-transformer'
import { Model, Validation } from '../app'
import {
  IsAlpha,
  IsAlphanumeric,
  IsCreditCard,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  Matches,
  Length,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidationArguments,
} from 'class-validator'

/**
 * Local helper translator
 * Note: Used to clean the code bellow
 * @param {ValidationArguments} args
 * @returns {string}
 */
const translateColumn = (args: ValidationArguments) => {
  const model = {} as Model
  plainToClassFromExist(model, args.object)
  if (model.$translateColumn) {
    return model.$translateColumn(args.property)
  }
  return '{error: unknown model}'
}

/**
 * Validate the property which must not be null or empty
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationRequired() {
  return IsNotEmpty({
    message: args => Validation.translateValidation('required', translateColumn(args)),
  })
}

/**
 * Validate the property which must be an e-mail
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationEmail() {
  return IsEmail(
    {},
    {
      message: args => Validation.translateValidation('invalidEmail', translateColumn(args)),
    }
  )
}

/**
 * Validate the property which must be a string date (e.g. 2012-01-31 23:59:59)
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationStringDate() {
  return IsDateString({
    message: args => Validation.translateValidation('invalidDate', translateColumn(args)),
  })
}

/**
 * Validate the property based on a Regex
 * @param {RegExp} pattern
 * @returns {Function}
 * @constructor
 */
export function ValidationMatches(pattern: RegExp) {
  return Matches(pattern, {
    message: args => Validation.translateValidation('format', translateColumn(args)),
  })
}

/**
 * Validate the property which must be a phone number
 * @returns {Function}
 * @constructor
 */
export function ValidationPhone() {
  return Matches(/^(?:\+?\d{1,3})?(?:\s|-)?(?:\(?\d{2,3}\)?)?(?:\s|-)?\d{3,5}(?:\s|-)?\d{3,5}$/, {
    message: () => Validation.translateValidation('phoneFormat'),
  })
}

/**
 * Validate the property which must follow the brazilian zip code format
 * @returns {Function}
 * @constructor
 */
export function ValidationCEP() {
  return Matches(/^\d{5}[-]?\d{3}$/, {
    message: () => Validation.translateValidation('zipcodeFormat'),
  })
}

/**
 * Validate the property which must follow the brazilian ID document format
 * @returns {Function}
 * @constructor
 */
export function ValidationRG() {
  return Matches(/^\d{1,3}[-.]?\d{1,3}[-.]?\d{1,3}[-.]?\d?$/, {
    message: () => Validation.translateValidation('rgFormat'),
  })
}

/**
 * Validate the property which must follow the brazilian personal document format
 * @returns {Function}
 * @constructor
 */
export function ValidationCPF() {
  return Matches(/^\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}$/, {
    message: () => Validation.translateValidation('cpfFormat'),
  })
}

/**
 * Validate the property which must follow the brazilian company document format
 * @returns {Function}
 * @constructor
 */
export function ValidationCNPJ() {
  return Matches(/^\d{2}[.]?\d{3}[.]?\d{3}[/]?\d{4}[-]?\d{2}$/, {
    message: () => Validation.translateValidation('cnpjFormat'),
  })
}

/**
 * Validate the property which must be a password between a given range of digits
 * @param {number} min
 * @param {number} max
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationPasswordLength(min: number, max?: number) {
  return Length(min, max, {
    message: () => Validation.translateValidation('passwordLength', '$constraint1', '$constraint2'),
  })
}

/**
 * Validate the property which must be a string between a given range of characters
 * @param {number} min
 * @param {number} max
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationLength(min: number, max?: number) {
  return Length(min, max, {
    message: args => Validation.translateValidation('length', translateColumn(args), '$constraint1', '$constraint2'),
  })
}

/**
 * Validate the property which must be a string with a given minimum of characters
 * @param {number} min
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationMinLength(min: number) {
  return MinLength(min, {
    message: args => Validation.translateValidation('minLength', translateColumn(args), '$constraint1'),
  })
}

/**
 * Validate the property which must be a string with a given maximum of characters
 * @param {number} max
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationMaxLength(max: number) {
  return MaxLength(max, {
    message: args => Validation.translateValidation('maxLength', translateColumn(args), '$constraint1'),
  })
}

/**
 * Validate the property which must be a number with a given minimum of value
 * @param {number} min
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationMin(min: number) {
  return Min(min, {
    message: args => Validation.translateValidation('min', translateColumn(args), '$constraint1'),
  })
}

/**
 * Validate the property which must be a number with a given maximum of value
 * @param {number} max
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationMax(max: number) {
  return Max(max, {
    message: args => Validation.translateValidation('max', translateColumn(args), '$constraint1'),
  })
}

/**
 * Validate the property which must contain only letters (a-zA-Z)
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationAlpha() {
  return IsAlpha({
    message: args => Validation.translateValidation('invalidAlpha', translateColumn(args)),
  })
}

/**
 * Validate the property which must contain only letters and numbers
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationAlphanumeric() {
  return IsAlphanumeric({
    message: args => Validation.translateValidation('invalidAlphanumeric', translateColumn(args)),
  })
}

/**
 * Validate the property which must be a credit card digits
 * @returns {(object: Object, propertyName: string) => void}
 * @constructor
 */
export function ValidationCreditCard() {
  return IsCreditCard({
    message: () => Validation.translateValidation('invalidCreditCard'),
  })
}