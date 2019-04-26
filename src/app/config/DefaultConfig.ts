import { $ } from '../../simpli'
import { ComponentOptions, FilterOptions } from '../../interfaces'
import * as Component from '../../components'

export abstract class DefaultConfig {
  static readonly components: ComponentOptions = {
    Multiselect: Component.Multiselect,
    Await: Component.Await,
    Modal: Component.Modal,
    Tip: Component.Tip,
    RenderSchema: Component.RenderSchema,
    TransitionExpand: Component.TransitionExpand,
    AdapOrderby: Component.AdapOrderby,
    AdapPagination: Component.AdapPagination,
    AdapSearchfield: Component.AdapSearchfield,
    InputCheckbox: Component.InputCheckbox,
    InputSelect: Component.InputSelect,
    InputText: Component.InputText,
    RenderAnchor: Component.RenderAnchor,
    RenderImage: Component.RenderImage,
  }

  static readonly filters: FilterOptions = {
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

    phone: (value?: string): string => {
      if (!value) return ''
      let v = value.replace(/\D/g, '')
      v = v.replace(new RegExp($.t('filter.phone.regex') as string), $.t('filter.phone.format') as string)
      return v
    },

    zipcode: (value?: string): string => {
      if (!value) return ''
      let v = value.replace(/\D/g, '')
      v = v.replace(new RegExp($.t('filter.zipcode.regex') as string), $.t('filter.zipcode.format') as string)
      return v
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

    pad: (value?: string, length = 2): string => {
      let str = `${value || ''}`
      while (str.length < length) str = `0${str}`
      return str
    },
  }
}
