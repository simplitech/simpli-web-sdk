import { find, chain } from 'lodash'
import { AxiosRequestConfig } from 'axios'
import { $ } from '../../simpli'
import { Model } from './Model'
import { resource, classToPlain } from '../../helpers'
import {
  ID,
  TAG,
  ClassType,
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
   * Spinner suffix name
   */
  readonly $spinnerSuffixName?: string

  /**
   * Resource parent
   */
  $parent: Resource | null = null

  /**
   * All above resource parents
   */
  get $allParents() {
    const parents: Resource[] = []

    let resource = this.$parent
    let depth = 0

    const maxDepth = 5

    while (resource && depth++ < maxDepth) {
      parents.push(resource)
      resource = resource.$parent
    }

    return parents.reverse()
  }

  /**
   * Resource root based in the endpoint
   * i.e. /foo{/id1}bar{/id2}
   * the result is foo: Foo
   */
  get $root() {
    return this.$allParents[0] || this
  }

  /**
   * Depth based in the endpoint
   * i.e. /foo{/id1}bar{/id2}
   * foo's depth = 0
   * bar's depth = 1
   */
  get $depth() {
    return this.$allParents.length
  }

  /**
   * All param keys based in the endpoint
   * i.e. /foo{/id1}bar{/id2}
   * the result is ['id1', 'id2']
   */
  get $allParamKeys() {
    const allParamKeys: string[] = []

    // extract bracket params ({/id1}, {/id2}, etc.)
    const bracketParams = this.$root.$endpoint.match(/{\/\w+}/g) || []
    for (const param of bracketParams) {
      const result = /{\/(\w+)}/g.exec(param)
      const paramKey = result ? result[1] : null
      if (paramKey) allParamKeys.push(paramKey)
    }

    return allParamKeys
  }

  /**
   * Param keys
   */
  get $paramKey() {
    return this.$allParamKeys[this.$depth] || null
  }

  /**
   * Params Ignore Last
   */
  get $paramsIgnoreLast() {
    const params: any = {}
    for (const resource of this.$allParents) {
      if (resource.$paramKey) params[resource.$paramKey] = resource.$id
    }
    return params
  }

  /**
   * Params
   */
  get $params() {
    const params = this.$paramsIgnoreLast
    if (this.$paramKey) params[this.$paramKey] = this.$id
    return params
  }

  /**
   * Create a child resource into this object
   */
  $newChild<R extends Resource>(classType: ClassType<R>) {
    const resource = new classType()
    resource.$parent = this
    return resource
  }

  /**
   * Add a child resource into this object
   */
  $addChild(resource: Resource) {
    resource.$parent = this
    return resource
  }

  /**
   * Resource to use actions
   */
  $resource(): ResourceAction<this>
  $resource<T>(responseType?: ResponseType<T>): ResourceAction<T>
  $resource<T>(responseType?: ResponseType<T>) {
    if (responseType) {
      return resource(this.$root.$endpoint, this.$root.$customActionConfig, this.$root.$axiosConfig, responseType)
    }
    return resource(this.$root.$endpoint, this.$root.$customActionConfig, this.$root.$axiosConfig, this)
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

  /**
   * Gets a entity from WebServer
   * @param ids
   */
  async $get(...ids: ID[]) {
    const params: any = {}
    const allParamKeys = this.$allParamKeys

    if (ids.length !== allParamKeys.length) {
      throw Error(`Expected ${allParamKeys.length} arguments, got ${ids.length} arguments`)
    }

    allParamKeys.forEach((paramKey, index) => (params[paramKey] = ids[index]))

    const fetch = () => this.$resource().query(params)
    return await $.await.run(fetch, `get${this.$spinnerSuffixName || this.$name}`)
  }

  /**
   * Gets a entity from WebServer by query
   * @param params
   */
  async $query(params?: any) {
    const fetch = () => this.$resource().query(params || this.$paramsIgnoreLast)
    return await $.await.run(fetch, `query${this.$spinnerSuffixName || this.$name}`)
  }

  /**
   * Saves this entity and post it into WebServer
   * @param responseType
   */
  async $save<T>(responseType?: ResponseType<T>) {
    const fetch = () => this.$resource(responseType).save(this.$paramsIgnoreLast, this)
    return await $.await.run(fetch, `save${this.$spinnerSuffixName || this.$name}`)
  }

  /**
   * Updates this entity and post it into WebServer
   * @param responseType
   */
  async $update<T>(responseType?: ResponseType<T>) {
    if (!this.$id) throw Error('Error in $update method: unknown $id')

    const fetch = () => this.$resource(responseType).update(this.$params, this)
    return await $.await.run(fetch, `update${this.$spinnerSuffixName || this.$name}`)
  }

  /**
   * Removes a entity from WebServer
   * @param responseType
   */
  async $remove<T>(responseType?: ResponseType<T>) {
    if (!this.$id) throw Error('Error in $remove method: unknown $id')

    const fetch = () => this.$resource(responseType).remove(this.$params)
    return await $.await.run(fetch, `remove${this.$spinnerSuffixName || this.$name}`)
  }

  /**
   * Validate and save
   */
  async $validateAndSave<T>(responseType?: ResponseType<T>) {
    await this.$validate()
    return await this.$save(responseType)
  }

  /**
   * Validate and update
   */
  async $validateAndUpdate<T>(responseType?: ResponseType<T>) {
    await this.$validate()
    return await this.$update(responseType)
  }
}
