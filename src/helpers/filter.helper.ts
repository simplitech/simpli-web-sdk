import moment, { Moment } from 'moment'
import { $ } from '../simpli'
import { toString } from './misc.helper'

export const bool = (val?: boolean | null) =>
  val !== undefined && val !== null ? ($.t(`boolean.${val}`) as string) : ''

export const datetime = (date?: string | Date | Moment | null) =>
  date ? moment(date).format($.t('dateFormat.datetime') as string) : ''

export const date = (date?: string | Date | Moment | null) =>
  date ? moment(date).format($.t('dateFormat.date') as string) : ''

export const time = (date?: string | Date | Moment | null) =>
  date ? moment(date).format($.t('dateFormat.time') as string) : ''

export const phone = (val?: string | number | null) => $.filter.phone(toString(val))

export const cep = (val?: string | number | null) => $.filter.cep(toString(val))

export const cpf = (val?: string | number | null) => $.filter.cpf(toString(val))

export const cnpj = (val?: string | number | null) => $.filter.cnpj(toString(val))

export const cpfOrCnpj = (val?: string | number | null) => $.filter.cpfOrCnpj(toString(val))

export const rg = (val?: string | number | null) => $.filter.rg(toString(val))

export const pad = (val?: string | number | null, length?: number) => $.filter.pad(toString(val), length)
