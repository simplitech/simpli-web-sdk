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

const translateColumn = (args: ValidationArguments) => {
  const model = {} as Model
  plainToClassFromExist(model, args.object)
  if (model.$translateColumn) {
    return model.$translateColumn(args.property)
  }
  return '{error: unknown model}'
}

export function ValidationRequired() {
  return IsNotEmpty({
    message: args => Validation.translateValidation('required', translateColumn(args)),
  })
}

export function ValidationEmail() {
  return IsEmail(
    {},
    {
      message: args => Validation.translateValidation('invalidEmail', translateColumn(args)),
    }
  )
}

export function ValidationStringDate() {
  return IsDateString({
    message: args => Validation.translateValidation('invalidDate', translateColumn(args)),
  })
}

export function ValidationMatches(pattern: RegExp) {
  return Matches(pattern, {
    message: args => Validation.translateValidation('format', translateColumn(args)),
  })
}

export function ValidationPhone() {
  return Matches(/^(?:\+?\d{1,3})?(?:\s|-)?(?:\(?\d{2,3}\)?)?(?:\s|-)?\d{3,5}(?:\s|-)?\d{3,5}$/, {
    message: () => Validation.translateValidation('phoneFormat'),
  })
}

export function ValidationCEP() {
  return Matches(/^\d{5}[-]?\d{3}$/, {
    message: () => Validation.translateValidation('zipcodeFormat'),
  })
}

export function ValidationRG() {
  return Matches(/^\d{1,3}[-.]?\d{1,3}[-.]?\d{1,3}[-.]?\d?$/, {
    message: () => Validation.translateValidation('rgFormat'),
  })
}

export function ValidationCPF() {
  return Matches(/^\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}$/, {
    message: () => Validation.translateValidation('cpfFormat'),
  })
}

export function ValidationCNPJ() {
  return Matches(/^\d{2}[.]?\d{3}[.]?\d{3}[/]?\d{4}[-]?\d{2}$/, {
    message: () => Validation.translateValidation('cnpjFormat'),
  })
}

export function ValidationPasswordLength(min: number, max?: number) {
  return Length(min, max, {
    message: () => Validation.translateValidation('passwordLength', '$constraint1', '$constraint2'),
  })
}

export function ValidationLength(min: number, max?: number) {
  return Length(min, max, {
    message: args => Validation.translateValidation('length', translateColumn(args), '$constraint1', '$constraint2'),
  })
}

export function ValidationMinLength(min: number) {
  return MinLength(min, {
    message: args => Validation.translateValidation('minLength', translateColumn(args), '$constraint1'),
  })
}

export function ValidationMaxLength(max: number) {
  return MaxLength(max, {
    message: args => Validation.translateValidation('maxLength', translateColumn(args), '$constraint1'),
  })
}

export function ValidationMin(min: number) {
  return Min(min, {
    message: args => Validation.translateValidation('min', translateColumn(args), '$constraint1'),
  })
}

export function ValidationMax(max: number) {
  return Max(max, {
    message: args => Validation.translateValidation('max', translateColumn(args), '$constraint1'),
  })
}

export function ValidationAlpha() {
  return IsAlpha({
    message: args => Validation.translateValidation('invalidAlpha', translateColumn(args)),
  })
}

export function ValidationAlphanumeric() {
  return IsAlphanumeric({
    message: args => Validation.translateValidation('invalidAlphanumeric', translateColumn(args)),
  })
}

export function ValidationCreditCard() {
  return IsCreditCard({
    message: () => Validation.translateValidation('invalidCreditCard'),
  })
}
