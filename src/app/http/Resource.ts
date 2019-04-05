import { chain } from 'lodash'
import { AxiosRequestConfig } from 'axios'
import { Model } from './Model'
import {
  ID,
  TAG,
  ResponseType,
  ResourceAction,
  ResourceActionConfig,
  SchemaOptions,
  Schema,
  SchemaVal,
  SchemaRow,
  SchemaContent,
  SchemaVue,
  SchemaData,
  IResource,
} from '../../interfaces'
import { $ } from '../../simpli'
import * as Helper from '../../helpers'
import { ClassType } from 'class-transformer/ClassTransformer'

export abstract class Resource extends Model implements IResource {
  /**
   * API URI endpoint
   */
  abstract readonly $endpoint: string

  /**
   * Spinner suffix name
   */
  readonly $spinnerSuffixName?: string

  /**
   * Custom actions from resource
   */
  readonly $customAction: ResourceActionConfig = {}

  /**
   * Custom actions from resource
   */
  readonly $axiosConfig: AxiosRequestConfig = {}

  /**
   * Resource to use actions
   */
  $resource(): ResourceAction<this>
  $resource<T>(responseType?: ResponseType<T>): ResourceAction<T>
  $resource<T>(responseType?: ResponseType<T>) {
    if (responseType) {
      return Helper.resource(this.$endpoint, this.$customAction, this.$axiosConfig, responseType)
    }
    return Helper.resource(this.$endpoint, this.$customAction, this.$axiosConfig, this)
  }

  /**
   * Normalizes what will be showed as entity or list
   */
  get $schema(): Schema {
    const json = JSON.stringify(this)
    const data = JSON.parse(json)

    delete data.$endpoint
    delete data.$name
    delete data.$spinnerSuffixName

    return data as Schema
  }

  /**
   * ID of entity
   */
  abstract get $id()
  abstract set $id(val: ID)

  /**
   * Tag of entity
   */
  get $tag() {
    return this.$id.toString()
  }
  set $tag(val: TAG) {
    /**/
  }

  /**
   * Get render fields from schema
   */
  get fieldsToRender(): string[] {
    return (
      chain(this.$schema)
        // Hide hidden properties
        .pickBy((val: SchemaVal) => (val ? (val as SchemaRow).hidden !== true : true))
        // Get the keys value
        .keys()
        // Get the result
        .value()
    )
  }

  /**
   * Get input fields from schema
   */
  get fieldsToInput(): string[] {
    return (
      chain(this.$schema)
        // Hide undefined inputType properties
        .pickBy((val: SchemaVal) => val && (val as SchemaRow).input !== undefined)
        // Get the keys value
        .keys()
        // Get the result
        .value()
    )
  }

  /**
   * Transform schema into data
   * @param field Get the content of a given field. If it is not set then get the content of all fields
   * @param index Used to select the index of the content if it is an array
   * @param textContent If true then use the text format instead the component as content
   */
  renderSchema({ field, index = 0, asText = false }: SchemaOptions = {}): SchemaData | SchemaContent {
    const filterContent = (val: SchemaRow): boolean => {
      return val ? val.hidden !== true : true
    }

    const filterTextContent = (val: SchemaRow): boolean => {
      return asText ? !!(val && val.textContent !== null) : true
    }

    const getContent = (val: SchemaRow): SchemaContent => {
      let preContent = val && val.content
      // get content from textContent if it is set
      if (asText) preContent = val && (val.textContent || val.content)

      let content = (preContent || val) as SchemaContent | SchemaContent[]
      // if the content is an array then get the item from index (default is the first)
      if (content instanceof Array) content = content[index]

      return content
    }

    const validateContent = (val: SchemaContent): SchemaContent => {
      return typeof val === 'object' && !(val && (val as SchemaVue).component) ? '' : val
    }

    const filteredContent = (val: SchemaVal) => filterContent(val as SchemaRow) && filterTextContent(val as SchemaRow)
    const mappedContent = (val: SchemaVal) => validateContent(getContent(val as SchemaRow))

    // if the field is set then return the schema content
    if (field) {
      const schemaVal = this.$schema[field]
      if (filteredContent(schemaVal)) {
        return mappedContent(schemaVal)
      }
      return null as SchemaContent
    }

    // otherwise return the schema data
    return (
      chain(this.$schema)
        // Hide hidden properties and null textContent
        .pickBy(filteredContent)
        // Map the schema to get only the content and transform invalid content into empty string
        .mapValues(mappedContent)
        // Get the result
        .value()
    )
  }

  /**
   * Gets a entity from WebServer
   * @param id entity ID
   */
  async find(id: ID) {
    const fetch = () => this.$resource().query({ id })
    return await $.await.run(fetch, `find${this.$spinnerSuffixName || this.$name}`)
  }

  /**
   * Gets a entity from WebServer by query
   * @param params
   */
  async query(params?: any) {
    const fetch = () => this.$resource().query(params)
    return await $.await.run(fetch, `query${this.$spinnerSuffixName || this.$name}`)
  }

  /**
   * Saves this entity and post it into WebServer
   * @param responseType
   */
  async save<T>(responseType?: ResponseType<T>) {
    const fetch = () => this.$resource(responseType).save(this)
    return await $.await.run(fetch, `save${this.$spinnerSuffixName || this.$name}`)
  }

  /**
   * Updates this entity and post it into WebServer
   * @param responseType
   */
  async update<T>(responseType?: ResponseType<T>) {
    // @ts-ignore
    const fetch = () => this.$resource(responseType).update({ id: this.$id }, this)
    return await $.await.run(fetch, `update${this.$spinnerSuffixName || this.$name}`)
  }

  /**
   * Removes a entity from WebServer
   * @param responseType
   */
  async remove<T>(responseType?: ResponseType<T>) {
    // @ts-ignore
    const fetch = () => this.$resource(responseType).remove({ id: this.$id })
    return await $.await.run(fetch, `remove${this.$spinnerSuffixName || this.$name}`)
  }

  /**
   * Validate and save
   */
  async validateAndSave<T>(responseType?: ResponseType<T>) {
    await this.validate()
    return await this.save(responseType)
  }

  /**
   * Validate and update
   */
  async validateAndUpdate<T>(responseType?: ResponseType<T>) {
    await this.validate()
    return await this.update(responseType)
  }
}
