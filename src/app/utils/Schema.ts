import { mapValues, mapKeys, snakeCase } from 'lodash'
import { unparse } from 'papaparse'
import { SchemaBuilder } from '../'
import { $ } from '../../simpli'
import { Helper } from '../../main'
import { Dictionary, ErrorObject, FieldSet, FieldData, FieldValidation, DictionaryOfValidation } from '../../interfaces'

export abstract class Schema {
  static defaultI18nPath = 'schema.{schemaName}.{fieldName}'

  abstract readonly name: string
  abstract readonly fieldSet: FieldSet<any>

  get allFields(): string[] {
    return Object.keys(this.fieldSet)
  }

  get allHeaders(): string[] {
    return this.allFields.map(fieldName => this.translateFrom(fieldName))
  }

  get header(): Dictionary<string> {
    return mapValues(this.fieldSet, (fieldController, fieldName) => this.translateFrom(fieldName))
  }

  translateFrom(fieldName: string): string {
    const defaultI18nPath = `${Schema.defaultI18nPath}`
      .replace(/{schemaName}/, this.name)
      .replace(/{fieldName}/, fieldName)

    return $.t(defaultI18nPath) as string
  }

  build<M>(model: M, fieldName: string): SchemaBuilder<M> {
    return new SchemaBuilder(this, model, fieldName)
  }

  getModelData<M>(model: M): Dictionary<FieldData> {
    const data: Dictionary<FieldData> = {}

    for (const field of this.allFields) {
      data[field] = this.build(model, field).getData()
    }

    return data
  }

  getAjvSchema<M>(model: M): DictionaryOfValidation<FieldValidation> {
    const schema: DictionaryOfValidation<FieldValidation> = {
      properties: {},
    }

    for (const field of this.allFields) {
      const schemaFromField = this.build(model, field).getAjv()
      if (schemaFromField) {
        schema.properties[field] = schemaFromField
      }
    }

    return schema
  }

  validateErrors<M>(model: M): ErrorObject[] | null {
    return $.ajv.validateErrors(this.getAjvSchema(model), model)
  }

  validate<M>(model: M, showErrorMessage = true): void {
    const errors = this.validateErrors(model)

    if (errors) {
      const error = errors[0]

      const fieldName = error.dataPath.replace(/^\./, '')
      const message = `${this.translateFrom(fieldName)} - ${error.message}`

      if (showErrorMessage) {
        Helper.errorValidation(message)
      }

      throw message
    }
  }

  toList<M>(list: M[]): Array<Dictionary<FieldData>> {
    return list.map(item => this.getModelData(item)).map(data =>
      // Translate the keys
      mapKeys(data, (val, fieldName) => this.translateFrom(fieldName))
    )
  }

  toCsv<M>(list: M[]): string {
    return unparse(this.toList(list))
  }

  toJson<M>(list: M[]): string {
    return JSON.stringify(this.toList(list))
  }

  downloadCsv<M>(list: M[], customTitle?: string): void {
    if (list.length) {
      const title = customTitle ? `${customTitle}.csv` : `${snakeCase(this.name || 'document')}.csv`
      Helper.createCsvFile(title, this.toCsv(list))
    }
  }
}
