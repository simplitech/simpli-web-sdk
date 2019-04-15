import { AxiosRequestConfig } from 'axios'
import { chain } from 'lodash'
import { classToPlain } from 'class-transformer'
import { Request } from '../'
import { Model } from './Model'
import {
  ID,
  TAG,
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

export abstract class Resource extends Model implements IResource {
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
   * API URI endpoint
   */
  abstract readonly $endpoint: string

  /**
   * Custom actions from resource
   */
  readonly $customActionConfig: ResourceActionConfig = {}

  /**
   * Axios config
   */
  readonly $axiosConfig: AxiosRequestConfig = {}

  /**
   * Resource
   */
  get $action() {
    const endpoint = this.$endpoint
    const customActionConfig = this.$customActionConfig
    const axiosConfig = this.$axiosConfig

    const action: ResourceAction = {}

    const defaultActionConfig: ResourceActionConfig = {
      query: { method: 'GET', url: endpoint },
      save: { method: 'POST', url: endpoint },
      update: { method: 'PUT', url: endpoint },
      remove: { method: 'DELETE', url: endpoint },
    }

    // convert URL model into a genuine URL
    // e.g. /foo{/id1}/bar{/id2} -> /foo/10/bar/20
    const buildUrl = (url: string, params?: any) => {
      let urlResult = `${url}`

      // extract bracket params ({/id1}, {/id2}, etc.)
      const bracketParams = url.match(/{\/\w+}/g) || []
      for (const param of bracketParams) {
        const result = /{\/(\w+)}/g.exec(param)
        const paramKey = result ? result[1] : null
        const value = params && paramKey && params[paramKey] ? `/${params[paramKey]}` : ''
        urlResult = urlResult.replace(param, value)
        if (params && paramKey && params[paramKey] !== undefined) {
          delete params[paramKey]
        }
      }

      return urlResult
    }

    const actionConfig = Object.assign(defaultActionConfig, customActionConfig)
    for (const key in actionConfig) {
      const url = actionConfig[key].url
      const method = actionConfig[key].method.toLowerCase()

      action[key] = (...args: any[]) => {
        let params: any = {}
        let data: any = undefined

        switch (args.length) {
          case 2:
            params = args[0]
            data = args[1]
            break
          case 1:
            if (['post', 'put', 'patch'].includes(method)) {
              data = args[0]
            } else {
              params = args[0]
            }
            break
          case 0:
            break
          default:
            throw Error(`Expected up to 2 arguments [params, data], got ${args.length} arguments`)
        }

        axiosConfig.params = {}

        const buildedUrl = buildUrl(url, params)
        Object.assign(axiosConfig.params, params)

        if (data) {
          // @ts-ignore
          return Request[method](buildedUrl, data, axiosConfig) as Request
        }
        // @ts-ignore
        return Request[method](buildedUrl, axiosConfig) as Request
      }
    }

    return action
  }

  /**
   * All param keys based in the endpoint
   * i.e. /foo{/id1}bar{/id2}
   * the result is ['id1', 'id2']
   */
  get $allParamKeys() {
    const allParamKeys: string[] = []

    // extract bracket params ({/id1}, {/id2}, etc.)
    const bracketParams = this.$endpoint.match(/{\/\w+}/g) || []
    for (const param of bracketParams) {
      const result = /{\/(\w+)}/g.exec(param)
      const paramKey = result ? result[1] : null
      if (paramKey) allParamKeys.push(paramKey)
    }

    return allParamKeys
  }

  get $firstParamKey() {
    return this.$allParamKeys[0] || null
  }

  /**
   * Gets a entity from WebServer
   * @param ids
   */
  async $getOne(...ids: ID[]) {
    const params: any = {}
    const allParamKeys = this.$allParamKeys

    if (ids.length !== allParamKeys.length) {
      throw Error(`Expected ${allParamKeys.length} arguments, got ${ids.length} arguments`)
    }

    allParamKeys.forEach((paramKey, index) => (params[paramKey] = ids[index]))

    return await this.$action
      .query(params)
      .name(`get${this.$spinnerSuffixName || this.$name}`)
      .as(this)
      .getResponse()
  }

  /**
   * Gets a entity from WebServer by query
   * @param params
   */
  async $query(params?: any) {
    return await this.$action
      .query(params)
      .name(`query${this.$spinnerSuffixName || this.$name}`)
      .as(this)
      .getResponse()
  }

  /**
   * Saves this entity and post it into WebServer
   */
  async $save(params?: any) {
    return await this.$action
      .save(params, this)
      .name(`save${this.$spinnerSuffixName || this.$name}`)
      .asAny()
      .getResponse()
  }

  /**
   * Updates this entity and post it into WebServer
   */
  async $update(params?: any) {
    const firstParamKey = this.$firstParamKey
    const localParams: any = {}

    if (firstParamKey && this.$id) {
      localParams[firstParamKey] = this.$id
    }

    return await this.$action
      .update(Object.assign(localParams, params), this)
      .name(`update${this.$spinnerSuffixName || this.$name}`)
      .asAny()
      .getResponse()
  }

  /**
   * Removes a entity from WebServer
   */
  async $remove(params?: any) {
    const firstParamKey = this.$firstParamKey
    const localParams: any = {}

    if (firstParamKey && this.$id) {
      localParams[firstParamKey] = this.$id
    }

    return await this.$action
      .remove(Object.assign(localParams, params))
      .name(`remove${this.$spinnerSuffixName || this.$name}`)
      .asAny()
      .getResponse()
  }

  /**
   * Normalizes what will be showed as entity or list
   */
  get $schema(): Schema {
    return classToPlain(this) as Schema
  }

  /**
   * Get render fields from schema
   */
  get $fieldsToRender(): string[] {
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
  get $fieldsToInput(): string[] {
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
  $renderSchema({ field, index = 0, asText = false }: SchemaOptions = {}): SchemaData | SchemaContent {
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
}
