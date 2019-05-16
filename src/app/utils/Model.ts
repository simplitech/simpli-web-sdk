import { AxiosResponse } from 'axios'
import { Helper } from '../../main'
import { Request } from '..'
import { Schema } from './Schema'
import { Dictionary, FieldData, ISchema, SchemaSet } from '../../interfaces'

export abstract class Model implements ISchema {
  readonly $schemaSet: SchemaSet = {}

  async $listFrom(url: string): Promise<AxiosResponse<this[]>> {
    return await Request.get(url)
      .name(this.$getSpinnerName('list'))
      .asArrayOf(this.$clone())
      .getResponse()
  }

  async $populateFrom(url: string): Promise<AxiosResponse<this>> {
    return await Request.get(url)
      .name(this.$getSpinnerName('populate'))
      .as(this)
      .getResponse()
  }

  async $persistFrom(url: string): Promise<AxiosResponse<any>> {
    return await Request.post(url, this)
      .name(this.$getSpinnerName('persist'))
      .asAny()
      .getResponse()
  }

  async $updateFrom(url: string): Promise<AxiosResponse<any>> {
    return await Request.put(url, this)
      .name(this.$getSpinnerName('update'))
      .asAny()
      .getResponse()
  }

  async $removeFrom(url: string): Promise<AxiosResponse<any>> {
    return await Request.delete(url)
      .name(this.$getSpinnerName('remove'))
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
    return schema ? schema.getModelData(this) : {}
  }

  $translateFrom(schemaRef: string, fiendName: string): string {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.translateFrom(fiendName) : ''
  }

  $validate(schemaRef = 'input'): void {
    const schema = this.$getSchema(schemaRef)
    schema && schema.validate(this)
  }

  $clone(): this {
    return Helper.clone(this)
  }
}
