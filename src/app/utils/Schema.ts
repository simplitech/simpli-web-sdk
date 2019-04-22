import Ajv from 'ajv'
import { $ } from '../../simpli'
import { Dictionary, ErrorObject, FieldSet, FieldData, FieldValidation, DictionaryOfValidation } from '../../interfaces'

export abstract class Schema<M = any> {
  constructor(model: M) {
    this.model = model
  }

  readonly model: M

  abstract readonly fieldSet: FieldSet

  get allFields(): string[] {
    return Object.keys(this.fieldSet)
  }

  get data(): Dictionary<FieldData> {
    const data: Dictionary<FieldData> = {}

    for (const field of this.allFields) {
      data[field] = this.dataFrom(field)
    }

    return data
  }

  get ajvSchema(): DictionaryOfValidation<FieldValidation> {
    const schema: DictionaryOfValidation<FieldValidation> = {
      properties: {},
    }

    for (const field of this.allFields) {
      const schemaFromField = this.ajvSchemaFrom(field)
      if (schemaFromField) {
        schema.properties[field] = schemaFromField
      }
    }

    return schema
  }

  dataFrom(field: string): FieldData {
    const fieldContent = this.fieldSet[field](field)
    if (typeof fieldContent === 'string' || typeof fieldContent === 'number') {
      return fieldContent
    }
    return null
  }

  ajvSchemaFrom<T>(field: string): FieldValidation<T> | null {
    let schemaFromField: FieldValidation | null = null

    const fieldContent = this.fieldSet[field](field)
    if (fieldContent && typeof fieldContent === 'object') {
      schemaFromField = fieldContent.ajv || null
    }

    return schemaFromField as FieldValidation<T>
  }

  isData(field: string): boolean {
    return this.dataFrom(field) !== null
  }

  validateErrors(): ErrorObject[] | null {
    const ajv = new Ajv({ allErrors: true })

    ajv.addFormat('date', new RegExp(/\d{4}-\d{2}-\d{2}T00:00:00-\d{2}/))
    ajv.addFormat('datetime', new RegExp(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}-\d{2}/))
    ajv.addFormat('phone', new RegExp(/^(?:\+?\d{1,3})?(?:\s|-)?(?:\(?\d{2,3}\)?)?(?:\s|-)?\d{3,5}(?:\s|-)?\d{3,5}$/))
    ajv.addFormat('cep', new RegExp(/^\d{5}[-]?\d{3}$/))
    ajv.addFormat('rg', new RegExp(/^\d{1,3}[-.]?\d{1,3}[-.]?\d{1,3}[-.]?\d?$/))
    ajv.addFormat('cpf', new RegExp(/^\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}$/))
    ajv.addFormat('cnpj', new RegExp(/^\d{2}[.]?\d{3}[.]?\d{3}[/]?\d{4}[-]?\d{2}$/))

    ajv.validate(this.ajvSchema, this.model)

    const errors = ajv.errors || null
    if (errors) {
      $.i18nAjv.exec(errors)
    }

    return errors
  }

  validate(): void {
    const errors = this.validateErrors()
    if (errors) throw errors
  }
}
