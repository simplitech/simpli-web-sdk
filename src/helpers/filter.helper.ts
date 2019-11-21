import moment, { Moment } from 'moment'
import { $ } from '../simpli'
import { InputType } from '../interfaces'

export function toString(val?: string | number | null): string {
  return val !== null && val !== undefined ? String(val) : ''
}

export function bool(val?: boolean | null) {
  return val !== undefined && val !== null ? ($.t(`boolean.${val}`) as string) : ''
}

export function datetime(date?: string | Date | Moment | null) {
  return date && moment(date).isValid() ? moment(date).format($.t('dateFormat.datetime') as string) : ''
}

export function date(date?: string | Date | Moment | null) {
  return date && moment(date).isValid() ? moment(date).format($.t('dateFormat.date') as string) : ''
}

export function time(date?: string | Date | Moment | null) {
  return date && moment(date).isValid() ? moment(date).format($.t('dateFormat.time') as string) : ''
}

export function truncate(val?: InputType, length?: number) {
  return $.filter.truncate(val, length)
}

export function stripHtml(val?: InputType) {
  return $.filter.stripHtml(val)
}

export function removeDelimiters(val?: InputType) {
  return $.filter.removeDelimiters(val)
}

export function phone(val?: InputType) {
  return $.filter.phone(val)
}

export function zipcode(val?: InputType) {
  return $.filter.zipcode(val)
}

export function rg(val?: InputType) {
  return $.filter.rg(val)
}

export function cpf(val?: InputType) {
  return $.filter.cpf(val)
}

export function cnpj(val?: InputType) {
  return $.filter.cnpj(val)
}

export function cpfOrCnpj(val?: InputType) {
  return $.filter.cpfOrCnpj(val)
}

export function pad(val?: InputType, length?: number) {
  return $.filter.pad(val, length)
}
