import { chain } from 'lodash'
import { HttpBody } from './HttpBody'
import { Model } from './Model'
import {
  ID,
  TAG,
  Resp,
  SchemaOptions,
  Schema,
  SchemaVal,
  SchemaRow,
  SchemaContent,
  SchemaVue,
  SchemaData,
} from '../../misc'
import { $, apiFullURL } from '../../helpers'

export abstract class Resource extends Model {
  /**
   * API URI endpoint
   */
  abstract readonly $endpoint: string

  /**
   * Normalizes what will be showed as entity or list
   */
  get $schema(): Schema {
    const json = JSON.stringify(this)
    const data = JSON.parse(json)
    delete data.$endpoint
    delete data.$name
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
   * Finds and return a entity from WebServer
   * @param id entity ID
   * @param spinner
   */
  async find(id: ID, spinner?: string): Promise<Resp<this>> {
    const fetch = async () => await this.call($.resource(apiFullURL(this.$endpoint)).get({ id }))
    return await $.await.run(fetch, spinner || `find${this.$name}`)
  }

  /**
   * Finds and return a entity from WebServer by query
   * @param query
   * @param spinner
   */
  async findByQuery(query: any, spinner?: string): Promise<Resp<this>> {
    const fetch = async () => await this.call($.resource(apiFullURL(this.$endpoint)).get(query))
    return await $.await.run(fetch, spinner || `find${this.$name}`)
  }

  /**
   * Saves this entity and post it into WebServer
   * @param cls
   * @param spinner
   */
  async save<T>(cls?: any, spinner?: string): Promise<Resp<T>> {
    const fetch = async () => await new HttpBody<T>(cls).call($.resource(apiFullURL(this.$endpoint)).save(this))
    return await $.await.run(fetch, spinner || `save${this.$name}`)
  }

  /**
   * Updates this entity and post it into WebServer
   * @param cls
   * @param spinner
   */
  async update<T>(cls?: any, spinner?: string): Promise<Resp<T>> {
    const fetch = async () => await new HttpBody<T>(cls).call($.resource(apiFullURL(this.$endpoint)).update(this))
    return await $.await.run(fetch, spinner || `update${this.$name}`)
  }

  /**
   * Removes a entity from WebServer
   * @param cls
   * @param spinner
   */
  async remove<T>(cls?: any, spinner?: string): Promise<Resp<any>> {
    const fetch = async () =>
      await new HttpBody<T>(cls).call($.resource(apiFullURL(this.$endpoint)).remove({ id: this.$id }))
    return await $.await.run(fetch, spinner || `remove${this.$name}`)
  }

  /**
   * Validate and save
   */
  async validateAndSave(): Promise<Resp<any>> {
    await this.validate()
    return await this.save()
  }

  /**
   * Validate and update
   */
  async validateAndUpdate(): Promise<Resp<any>> {
    await this.validate()
    return await this.update()
  }
}
