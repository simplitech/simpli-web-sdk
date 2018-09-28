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
   */
  async find(id: ID): Promise<Resp<any>> {
    return await this.call($.resource(apiFullURL(this.$endpoint)).get({ id }))
  }

  /**
   * Finds and return a entity from WebServer by query
   * @param query
   */
  async findByQuery(query: any): Promise<Resp<any>> {
    return await this.call($.resource(apiFullURL(this.$endpoint)).get(query))
  }

  /**
   * Saves this entity and post it into WebServer
   * @param modelResp
   */
  async save(modelResp: HttpBody = new HttpBody(Number)): Promise<Resp<any>> {
    return await modelResp.call($.resource(apiFullURL(this.$endpoint)).save(this))
  }

  /**
   * Updates this entity and post it into WebServer
   * @param modelResp
   */
  async update(modelResp: HttpBody = new HttpBody(Number)): Promise<Resp<any>> {
    return await modelResp.call($.resource(apiFullURL(this.$endpoint)).update(this))
  }

  /**
   * Removes a entity from WebServer
   * @param modelResp
   */
  async remove(modelResp: HttpBody = new HttpBody(Number)): Promise<Resp<any>> {
    return await modelResp.call($.resource(apiFullURL(this.$endpoint)).remove({ id: this.$id }))
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
