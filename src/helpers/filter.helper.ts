import moment, { Moment } from 'moment'
import { $ } from '../simpli'

export const bool = (val?: boolean | null) =>
  val !== undefined && val !== null ? ($.t(`boolean.${val}`) as string) : ''

export const datetime = (date?: string | Date | Moment | null) =>
  date ? moment(date).format($.t('dateFormat.datetime') as string) : ''

export const date = (date?: string | Date | Moment | null) =>
  date ? moment(date).format($.t('dateFormat.date') as string) : ''

export const time = (date?: string | Date | Moment | null) =>
  date ? moment(date).format($.t('dateFormat.time') as string) : ''

export const phone = (val?: string | null) => (val ? $.filter.phone(val) : '')

export const cep = (val?: string | null) => (val ? $.filter.cep(val) : '')

export const cpf = (val?: string | null) => (val ? $.filter.cpf(val) : '')

export const cnpj = (val?: string | null) => (val ? $.filter.cnpj(val) : '')

export const pad = (val?: string | number | null) => (val ? $.filter.pad(val.toString()) : '')
