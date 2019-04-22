import { AxiosResponse } from 'axios'
import { mapValues } from 'lodash'
import { $ } from '../../simpli'
import { Helper } from '../../main'
import { Request } from '..'
import { Schema } from './Schema'
import { Dictionary, FieldData, ISchema, SchemaSet } from '../../interfaces'

export abstract class Model implements ISchema {
  static $defaultI18nTitle = 'classes.{modelName}.title'
  static $defaultI18nColumns = 'classes.{modelName}.columns.{columnName}'

  readonly $schemaSet: SchemaSet = {}

  readonly $name: string = this.constructor.name

  readonly $spinnerSuffixName?: string

  async $list(url: string): Promise<AxiosResponse<this[]>> {
    return await Request.get(url)
      .name(`list${this.$spinnerSuffixName || this.$name}`)
      .asArrayOf(this.$clone())
      .getResponse()
  }

  async $populate(url: string): Promise<AxiosResponse<this>> {
    return await Request.get(url)
      .name(`populate${this.$spinnerSuffixName || this.$name}`)
      .as(this)
      .getResponse()
  }

  async $persist(url: string): Promise<AxiosResponse<any>> {
    return await Request.post(url, this)
      .name(`persist${this.$spinnerSuffixName || this.$name}`)
      .asAny()
      .getResponse()
  }

  $getSchema(schemaName: string): Schema {
    return this.$schemaSet[schemaName]
  }

  $allFieldsFrom(schemaName: string): string[] {
    return this.$getSchema(schemaName).allFields
  }

  $allHeadersFrom(schemaName: string): string[] {
    return this.$allFieldsFrom(schemaName).map(field => this.$translateColumn(field))
  }

  $headerFrom(schemaName: string): Dictionary<string> {
    return mapValues(this.$getSchema(schemaName).fieldSet, (fieldController, key) => this.$translateColumn(key))
  }

  $dataFrom(schemaName: string): Dictionary<FieldData> {
    return this.$getSchema(schemaName).data
  }

  $validate(schemaName = 'input') {
    const errors = this.$getSchema(schemaName).validateErrors()
    if (errors) {
      const error = errors[0]

      const field = error.dataPath.replace(/^\./, '')
      const translatedField = this.$translateColumn(field)

      const message = `${translatedField} - ${error.message}`

      Helper.errorValidation(message)
      throw message
    }
  }

  $translateTitle() {
    const defaultI18nTitle = `${Model.$defaultI18nTitle}`.replace(/{modelName}/, this.$name)

    return $.t(defaultI18nTitle) as string
  }

  $translateColumn(column: string) {
    const defaultI18nColumns = `${Model.$defaultI18nColumns}`
      .replace(/{modelName}/, this.$name)
      .replace(/{columnName}/, column)

    return $.t(defaultI18nColumns) as string
  }

  $clone() {
    return Helper.clone(this)
  }
}
