import { AxiosResponse } from 'axios'
import { Helper } from '../../main'
import { Request } from '..'
import { Schema } from './Schema'
import { Dictionary, FieldData, ISchema, SchemaSet } from '../../interfaces'

export abstract class Model implements ISchema {
  readonly $schemaSet: SchemaSet = {}

  async $list(url: string): Promise<AxiosResponse<this[]>> {
    return await Request.get(url)
      .name(this.$getSpinnerName('list'))
      .asArrayOf(this.$clone())
      .getResponse()
  }

  async $populate(url: string): Promise<AxiosResponse<this>> {
    return await Request.get(url)
      .name(this.$getSpinnerName('populate'))
      .as(this)
      .getResponse()
  }

  async $persist(url: string): Promise<AxiosResponse<any>> {
    return await Request.post(url, this)
      .name(this.$getSpinnerName('persist'))
      .asAny()
      .getResponse()
  }

  $getSpinnerName(command: string): string {
    return `${command}`
  }

  $getSchema(schemaRef: string): Schema | null {
    return this.$schemaSet[schemaRef] || null
  }

  $getSchemaName(schemaRef: string): string | null {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.name : null
  }

  $allFieldsFrom(schemaRef: string): string[] {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.allFields : []
  }

  $allHeadersFrom(schemaRef: string): string[] {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.allHeaders : []
  }

  $headerFrom(schemaRef: string): Dictionary<string> {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.header : {}
  }

  $dataFrom(schemaRef: string): Dictionary<FieldData> {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.data : {}
  }

  $translateFrom(schemaRef: string, fiendName: string): string {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.translateFrom(fiendName) : ''
  }

  $validate(schemaRef = 'input'): void {
    const schema = this.$getSchema(schemaRef)
    schema && schema.validateWithMessage()
  }

  $clone(): this {
    return Helper.clone(this)
  }
}
