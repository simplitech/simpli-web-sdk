import { $ } from '../../simpli'
import { ComponentOptions, FilterOptions, InputType } from '../../interfaces'
import * as Component from '../../components'
import * as Helper from '../../helpers'

export abstract class DefaultConfig {
  static readonly components: ComponentOptions = {
    Multiselect: Component.Multiselect,
    Await: Component.Await,
    Modal: Component.Modal,
    Tip: Component.Tip,
    RenderSchema: Component.RenderSchema,
    AdapOrderby: Component.AdapOrderby,
    AdapPagination: Component.AdapPagination,
    AdapSearchfield: Component.AdapSearchfield,
    InputCheckbox: Component.InputCheckbox,
    InputSelect: Component.InputSelect,
    InputText: Component.InputText,
    InputDate: Component.InputDate,
    RenderAnchor: Component.RenderAnchor,
    RenderImage: Component.RenderImage,
    TransitionExpand: Component.TransitionExpand as any,
  }

  static readonly filters: FilterOptions = {
    truncate(input?: InputType, length?: number) {
      const value = Helper.toString(input)
      if (value.length > (length || 0)) {
        return `${value.substring(0, length)}...`
      }
      return value
    },

    stripHtml(input?: InputType) {
      const value = Helper.toString(input)
      const doc = new DOMParser().parseFromString(value, 'text/html')
      return doc.body.textContent || ''
    },

    removeDelimiters(input?: InputType) {
      return Helper.toString(input).replace(/[. ,:\-/]+/g, '')
    },

    phone(input?: InputType) {
      return Helper.toString(input)
        .replace(/\D/g, '')
        .replace(new RegExp($.t('filter.phone.regex') as string), $.t('filter.phone.format') as string)
    },

    zipcode(input?: InputType) {
      return Helper.toString(input)
        .replace(/\D/g, '')
        .replace(new RegExp($.t('filter.zipcode.regex') as string), $.t('filter.zipcode.format') as string)
    },

    rg(input?: InputType) {
      return Helper.toString(input)
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4')
    },

    cpf(input?: InputType) {
      return Helper.toString(input)
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
    },

    cnpj(input?: InputType) {
      return Helper.toString(input)
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
    },

    cpfOrCnpj(input?: InputType) {
      const value = Helper.toString(input).replace(/\D/g, '')

      if (value.length === 11) {
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
      }

      if (value.length === 14) {
        return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
      }

      return value
    },

    pad(input?: InputType, length = 2) {
      let value = Helper.toString(input)
      while (value.length < length) value = `0${value}`
      return value
    },
  }
}
