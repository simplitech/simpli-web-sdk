import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { Request } from '../'
import { Model } from './Model'
import { ID, TAG, ResourceAction, ResourceActionConfig, IResource } from '../../interfaces'

export abstract class Resource extends Model implements IResource {
  abstract get $id()
  abstract set $id(val: ID)

  get $tag() {
    return this.$id.toString()
  }
  set $tag(val: TAG) {
    /**/
  }

  readonly $endpoint: string = ''

  readonly $customActionConfig: ResourceActionConfig = {}

  readonly $axiosConfig: AxiosRequestConfig = {}

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
