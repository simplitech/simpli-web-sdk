/**
 * @file
 * VUE Filters
 * Used in library: vue
 *
 * Use this file to register filters
 * See https://vuejs.org/v2/guide/filters.html
 * This configuration will be set in @/bootstrap/app.ts
 */

import { $ } from '../simpli'

/**
 * VUE Filters
 */
export const defaultFilters = {
  truncate: (value?: string, length?: number): string => {
    if (!value) return ''
    if (value.length > (length || 0)) {
      return `${value.substring(0, length)}...`
    }
    return value
  },

  removeDelimiters: (value?: string): string => {
    if (!value) return ''
    return value.replace(/[. ,:\-/]+/g, '')
  },

  rg: (value?: string): string => {
    if (!value) return ''
    let v = value.replace(/\D/g, '')
    v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4')
    return v
  },

  cpf: (value?: string): string => {
    if (!value) return ''
    let v = value.replace(/\D/g, '')
    v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
    return v
  },

  cnpj: (value?: string): string => {
    if (!value) return ''
    let v = value.replace(/\D/g, '')
    v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
    return v
  },

  cpfOrCnpj(val?: string): string {
    if (val) {
      const str = val.replace(/\D/g, '')

      if (str.length === 11) {
        return str.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
      }

      if (str.length === 14) {
        return str.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
      }

      return str
    }

    return ''
  },

  phone: (value?: string): string => {
    if (!value) return ''
    let v = value.replace(/\D/g, '')
    v = v.replace(new RegExp($.t('filter.phone.regex')), $.t('filter.phone.format'))
    return v
  },

  cep: (value?: string): string => {
    if (!value) return ''
    let v = value.replace(/\D/g, '')
    v = v.replace(new RegExp($.t('filter.cep.regex')), $.t('filter.cep.format'))
    return v
  },

  pad: (value?: string, length = 2): string => {
    let str = `${value || ''}`
    while (str.length < length) str = `0${str}`
    return str
  },
}
