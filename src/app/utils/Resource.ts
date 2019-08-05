import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { Request } from '../'
import { Model } from './Model'
import { HttpExclude } from '../../decorators'
import { ID, TAG, ResourceAction, ResourceActionConfig, IResource } from '../../interfaces'

/**
 * Usage for processing of sending/receiving data and render data.
 * This is a special Model that handles CRUDs (create, read, update and delete).
 */
export abstract class Resource extends Model implements IResource {
  /**
   * The getter of identifier of the primary key.
   * ```typescript
   * import {ID, Resource} from 'simpli-web-sdk'
   *
   * export class User extends Resource {
   *   get $id() {
   *     return this.idUserPk
   *   }
   *   set $id(val: ID) {
   *     this.idUserPk = val
   *   }
   *   idUserPk: ID = 0
   * }
   * ```
   */
  abstract get $id()

  /**
   * The setter of identifier of the primary key.
   * ```typescript
   * import {ID, Resource} from 'simpli-web-sdk'
   *
   * export class User extends Resource {
   *   get $id() {
   *     return this.idUserPk
   *   }
   *   set $id(val: ID) {
   *     this.idUserPk = val
   *   }
   *   idUserPk: number = 0
   * }
   * ```
   */
  abstract set $id(val: ID)

  /**
   * The getter that represents a tag (optional).
   * Used in [[InputSelect]] component.
   * ```typescript
   * import {TAG, Resource} from 'simpli-web-sdk'
   *
   * export class User extends Resource {
   *   ...
   *   get $tag() {
   *     return this.name
   *   }
   *   set $tag(val: TAG) {
   *     this.name = val
   *   }
   *   name: string | null = null
   * }
   * ```
   */
  get $tag() {
    return this.$id.toString()
  }

  /**
   * The setter that represents a tag (optional).
   * Used in [[InputSelect]] component.
   * ```typescript
   * import {TAG, Resource} from 'simpli-web-sdk'
   *
   * export class User extends Resource {
   *   ...
   *   get $tag() {
   *     return this.name
   *   }
   *   set $tag(val: TAG) {
   *     this.name = val
   *   }
   *   name: string | null = null
   * }
   * ```
   */
  set $tag(val: TAG) {
    /**/
  }

  /**
   * The endpoint of this resource.
   * It is possible to use paths inside brackets in order to use dynamic endpoints.
   * ```typescript
   * import {Resource} from 'simpli-web-sdk'
   *
   * export class User extends Resource {
   *   $endpoint: string = '/user{/id}'
   *   ...
   * }
   *
   * async function example() {
   *   const user = new User()
   *   await user.$action
   *     .query({id: 1}) // generates a Request instance equivalent of: GET /user/1
   *     .as(user)
   *     .getResponse()
   * }
   * ```
   */
  @HttpExclude()
  readonly $endpoint: string = ''

  /**
   * The configuration of custom actions which provides the methods (GET, POST, etc.) and the URL.
   * This config is applied in $action.
   * ```typescript
   * import {Resource} from 'simpli-web-sdk'
   * import {Friend} from '@/model/Friend'
   *
   * export class User extends Resource {
   *   $endpoint: string = '/user{/id}'
   *   $customActionConfig = {
   *     getFriend: {
   *       methods: 'GET',
   *       url: '/user{/id}/friend{/idFriend}',
   *     },
   *   }
   *   ...
   * }
   *
   * async function example() {
   *   const user = new User()
   *   const friend = new Friend()
   *   await user.$action
   *     .getFriend({id: 1, idFriend: 2}) // generates a Request instance equivalent of: GET /user/1/friend/2
   *     .as(friend)
   *     .getResponse()
   * }
   * ```
   */
  @HttpExclude()
  readonly $customActionConfig: ResourceActionConfig = {}

  /**
   * Any extra configuration from axios.
   * https://github.com/axios/axios#request-config
   * ```typescript
   * import {Resource} from 'simpli-web-sdk'
   *
   * export class User extends Resource {
   *   $axiosConfig = {
   *     // `headers` are custom headers to be sent
   *     headers: {'X-Requested-With': 'XMLHttpRequest'},
   *   }
   *   ...
   * }
   * ```
   */
  @HttpExclude()
  readonly $axiosConfig: AxiosRequestConfig = {}

  /**
   * Invokes a request based on the $endpoint and the $customActionConfig.
   * There are four default action:
   * - query: { method: 'GET', url: $endpoint },
   * - save: { method: 'POST', url: $endpoint },
   * - update: { method: 'PUT', url: $endpoint },
   * - remove: { method: 'DELETE', url: $endpoint },
   * ```typescript
   * import {ID, Resource} from 'simpli-web-sdk'
   *
   * export class User extends Resource {
   *   $endpoint: string = '/user{/id}'
   *   get $id() {
   *     return this.id || 0
   *   }
   *   set $id(val: ID) {
   *     this.id = val
   *   }
   *
   *   id: ID = 0
   *   name: string | null = null
   * }
   *
   * async function example1() {
   *   const user = new User()
   *   await user.$action
   *     .query({id: 1}) // generates a Request instance equivalent of: GET /user/1
   *     .as(user)
   *     .getResponse()
   * }
   *
   * async function example2() {
   *   const user = new User()
   *   user.name = 'Michael Jackson'
   *   await user.$action
   *     .save(user) // generates a Request instance equivalent of: POST /user
   *     .asAny()
   *     .getResponse()
   * }
   * ```
   */
  get $action() {
    const endpoint = this.$endpoint
    const customActionConfig = this.$customActionConfig
    const axiosConfig = this.$axiosConfig

    const action: any = {}

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

    return action as ResourceAction
  }

  /**
   * Gets all param keys from the endpoint
   * ```typescript
   * import {Resource} from 'simpli-web-sdk'
   *
   * export class User extends Resource {
   *   $endpoint: string = '/user{/id1}{/id2}'
   *   ...
   * }
   *
   * async function example() {
   *   const user = new User()
   *   console.log(user.$allParamKeys) // ['id1', 'id2']
   * }
   * ```
   */
  get $allParamKeys(): string[] {
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

  /**
   * Gets the first param key from the endpoint
   * ```typescript
   * import {Resource} from 'simpli-web-sdk'
   *
   * export class User extends Resource {
   *   $endpoint: string = '/user{/id1}{/id2}'
   *   ...
   * }
   *
   * async function example() {
   *   const user = new User()
   *   console.log(user.$firstParamKey) // 'id1'
   * }
   * ```
   */
  get $firstParamKey() {
    return this.$allParamKeys[0] || null
  }

  async $getOne(...ids: ID[]): Promise<AxiosResponse<this>> {
    const params: any = {}
    const allParamKeys = this.$allParamKeys

    if (ids.length !== allParamKeys.length) {
      throw Error(`Expected ${allParamKeys.length} arguments, got ${ids.length} arguments`)
    }

    allParamKeys.forEach((paramKey, index) => (params[paramKey] = ids[index]))

    return await this.$action
      .query(params)
      .name(this.$getSpinnerName('getOne'))
      .as(this)
      .getResponse()
  }

  async $getMany(params?: any): Promise<AxiosResponse<this[]>> {
    return await this.$action
      .query(params)
      .name(this.$getSpinnerName('getMany'))
      .asArrayOf(this.$clone())
      .getResponse()
  }

  async $query(params?: any): Promise<AxiosResponse<this>> {
    return await this.$action
      .query(params)
      .name(this.$getSpinnerName('query'))
      .as(this)
      .getResponse()
  }

  async $save(params?: any): Promise<AxiosResponse<any>> {
    return await this.$action
      .save(params, this)
      .name(this.$getSpinnerName('save'))
      .asAny()
      .getResponse()
  }

  async $update(params?: any): Promise<AxiosResponse<any>> {
    const firstParamKey = this.$firstParamKey
    const localParams: any = {}

    if (firstParamKey && this.$id) {
      localParams[firstParamKey] = this.$id
    }

    return await this.$action
      .update(Object.assign(localParams, params), this)
      .name(this.$getSpinnerName('update'))
      .asAny()
      .getResponse()
  }

  async $remove(params?: any): Promise<AxiosResponse<any>> {
    const firstParamKey = this.$firstParamKey
    const localParams: any = {}

    if (firstParamKey && this.$id) {
      localParams[firstParamKey] = this.$id
    }

    return await this.$action
      .remove(Object.assign(localParams, params))
      .name(this.$getSpinnerName('remove'))
      .asAny()
      .getResponse()
  }
}
