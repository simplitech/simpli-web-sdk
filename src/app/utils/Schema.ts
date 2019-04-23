import { mapValues } from 'lodash'
import { $ } from '../../simpli'
import { Helper } from '../../main'
import { Dictionary, ErrorObject, FieldSet, FieldData, FieldValidation, DictionaryOfValidation } from '../../interfaces'

export abstract class Schema<M = any> {
  static defaultI18nPath = 'schema.{schemaName}.{fieldName}'

  constructor(model: M) {
    this.model = model
  }

  abstract readonly name: string

  readonly model: M

  abstract readonly fieldSet: FieldSet

  get allFields(): string[] {
    return Object.keys(this.fieldSet)
  }

  get allHeaders(): string[] {
    return this.allFields.map(fieldName => this.translateFrom(fieldName))
  }

  get header(): Dictionary<string> {
    return mapValues(this.fieldSet, (fieldController, fieldName) => this.translateFrom(fieldName))
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

  translateFrom(fieldName: string): string {
    const defaultI18nPath = `${Schema.defaultI18nPath}`
      .replace(/{schemaName}/, this.name)
      .replace(/{fieldName}/, fieldName)

    return $.t(defaultI18nPath) as string
  }

  validateErrors(): ErrorObject[] | null {
    return $.ajv.validateErrors(this.ajvSchema, this.model)
  }

  validateWithMessage(): void {
    const errors = this.validateErrors()

    if (errors) {
      const error = errors[0]

      const fieldName = error.dataPath.replace(/^\./, '')
      const message = `${this.translateFrom(fieldName)} - ${error.message}`

      Helper.errorValidation(message)
      throw message
    }
  }

  validate(): void {
    return $.ajv.validate(this.ajvSchema, this.model)
  }

  isData(fieldName: string): boolean {
    return this.dataFrom(fieldName) !== null
  }

  dataFrom(fieldName: string): FieldData {
    const fieldContent = this.fieldSet[fieldName](fieldName)
    if (typeof fieldContent === 'string' || typeof fieldContent === 'number') {
      return fieldContent
    }
    return null
  }

  ajvSchemaFrom<T>(fieldName: string): FieldValidation<T> | null {
    let schemaFromField: FieldValidation | null = null

    const fieldContent = this.fieldSet[fieldName](fieldName)
    if (fieldContent && typeof fieldContent === 'object') {
      schemaFromField = fieldContent.ajv || null
    }

    return schemaFromField as FieldValidation<T>
  }
}
