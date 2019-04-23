import AnotherJsonValidator from 'ajv'
import { AjvType } from './AjvType'
import { AjvI18n } from './AjvI18n'
import { $ } from '../../simpli'
import { Lang } from '../../enums'
import { Dictionary, ErrorObject } from '../../interfaces'

export class AjvController {
  constructor(locale: Lang, messages?: Dictionary<(e: ErrorObject[]) => void>) {
    this.instance = new AnotherJsonValidator({ allErrors: true })

    this.instance.addFormat('date', new RegExp(/\d{4}-\d{2}-\d{2}T00:00:00-\d{2}/))
    this.instance.addFormat('datetime', new RegExp(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}-\d{2}/))
    this.instance.addFormat(
      'phone',
      new RegExp(/^(?:\+?\d{1,3})?(?:\s|-)?(?:\(?\d{2,3}\)?)?(?:\s|-)?\d{3,5}(?:\s|-)?\d{3,5}$/)
    )
    this.instance.addFormat('cep', new RegExp(/^\d{5}[-]?\d{3}$/))
    this.instance.addFormat('rg', new RegExp(/^\d{1,3}[-.]?\d{1,3}[-.]?\d{1,3}[-.]?\d?$/))
    this.instance.addFormat('cpf', new RegExp(/^\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}$/))
    this.instance.addFormat('cnpj', new RegExp(/^\d{2}[.]?\d{3}[.]?\d{3}[/]?\d{4}[-]?\d{2}$/))

    this.i18n = new AjvI18n(locale, messages)
  }

  readonly i18n: AjvI18n
  readonly instance: AnotherJsonValidator.Ajv

  validateErrors(schemaKeyRef: object | string | boolean, data: any): ErrorObject[] | null {
    this.instance.validate(schemaKeyRef, data)

    const errors = this.instance.errors || null
    if (errors) {
      $.ajv.i18n.translate(errors)
    }

    return errors
  }

  validate(schemaKeyRef: object | string | boolean, data: any): void {
    const errors = this.validateErrors(schemaKeyRef, data)
    if (errors) throw errors
  }
}
