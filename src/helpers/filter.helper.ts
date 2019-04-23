import moment, { Moment } from 'moment'
import { $ } from '../simpli'
import { toString } from './utils.helper'

export function bool(val?: boolean | null) {
  return val !== undefined && val !== null ? ($.t(`boolean.${val}`) as string) : ''
}

export function datetime(date?: string | Date | Moment | null) {
  return date ? moment(date).format($.t('dateFormat.datetime') as string) : ''
}

export function date(date?: string | Date | Moment | null) {
  return date ? moment(date).format($.t('dateFormat.date') as string) : ''
}

export function time(date?: string | Date | Moment | null) {
  return date ? moment(date).format($.t('dateFormat.time') as string) : ''
}

export function truncate(val?: string | number | null, length?: number) {
  return $.filter.truncate(toString(val), length)
}

export function removeDelimiters(val?: string | number | null) {
  return $.filter.removeDelimiters(toString(val))
}

export function phone(val?: string | number | null) {
  return $.filter.phone(toString(val))
}

export function cep(val?: string | number | null) {
  return $.filter.cep(toString(val))
}

export function rg(val?: string | number | null) {
  return $.filter.rg(toString(val))
}

export function cpf(val?: string | number | null) {
  return $.filter.cpf(toString(val))
}

export function cnpj(val?: string | number | null) {
  return $.filter.cnpj(toString(val))
}

export function cpfOrCnpj(val?: string | number | null) {
  return $.filter.cpfOrCnpj(toString(val))
}

export function pad(val?: string | number | null, length?: number) {
  return $.filter.pad(toString(val), length)
}
