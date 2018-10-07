import { HttpBody } from './HttpBody'
import { Model } from './Model'
import { ID, TAG, Resp } from '../../types'
import { $, apiFullURL } from '../../helpers'

export abstract class Resource extends Model {
  /**
   * API URI endpoint
   */
  abstract readonly $endpoint: string

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
   * @param modelResp
   * @param spinner
   */
  async save(modelResp: HttpBody = new HttpBody(Number), spinner?: string): Promise<Resp<any>> {
    const fetch = async () => await modelResp.call($.resource(apiFullURL(this.$endpoint)).save(this))
    return await $.await.run(fetch, spinner || `save${this.$name}`)
  }

  /**
   * Updates this entity and post it into WebServer
   * @param modelResp
   * @param spinner
   */
  async update(modelResp: HttpBody = new HttpBody(Number), spinner?: string): Promise<Resp<any>> {
    const fetch = async () => await modelResp.call($.resource(apiFullURL(this.$endpoint)).update(this))
    return await $.await.run(fetch, spinner || `update${this.$name}`)
  }

  /**
   * Removes a entity from WebServer
   * @param modelResp
   * @param spinner
   */
  async remove(modelResp: HttpBody = new HttpBody(Number), spinner?: string): Promise<Resp<any>> {
    const fetch = async () => await modelResp.call($.resource(apiFullURL(this.$endpoint)).remove({ id: this.$id }))
    return await $.await.run(fetch, spinner || `remove${this.$name}`)
  }

  /**
   * Normalizes what will be showed as entity or list
   */
  scheme() {
    const json = JSON.stringify(this)
    const data = JSON.parse(json)
    delete data.$endpoint
    delete data.$name
    return data
  }

  /**
   * Normalizes what will be showed as entity or list when a CSV is generated
   */
  csvScheme() {
    return this.scheme()
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
