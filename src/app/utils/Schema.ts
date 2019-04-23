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
    return $.ajv.validateErrors(this.ajvSchema, this.model)
  }

  validate(): void {
    return $.ajv.validate(this.ajvSchema, this.model)
  }
}
