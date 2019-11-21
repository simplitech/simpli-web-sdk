import { AxiosResponse } from 'axios'
import { ClassTransformOptions } from 'class-transformer'
import { Helper } from '../../main'
import { Request } from '..'
import { Schema } from './Schema'
import { HttpExclude } from '../../decorators'
import { Dictionary, FieldData, ISchema, SchemaSet } from '../../interfaces'

/**
 * Usage for processing of sending/receiving data and render data.
 */
export abstract class Model implements ISchema {
  /**
   * Associates instances of Schema into a model.
   * ```typescript
   * import {Model, SchemaSet} from 'simpli-web-sdk'
   * import {InputUserSchema} from '@/schema/User/InputUserSchema'
   * import {ListUserSchema} from '@/schema/User/ListUserSchema'
   * import {CsvUserSchema} from '@/schema/User/CsvUserSchema'
   *
   * export class User extends Model {
   *   readonly $schemaSet: SchemaSet = {
   *     input: new InputUserSchema(),
   *     list: new ListUserSchema(),
   *     csv: new CsvUserSchema(),
   *   }
   *
   *   email: string | null = null
   *   name: string | null = null
   * }
   * ```
   */
  @HttpExclude()
  readonly $schemaSet: SchemaSet = {}

  /**
   * Calls HTTP GET request, and defines the response as an array of this model.
   * Note: the default spinner name of the [[Await]] component is 'list'.
   *
   * ```typescript
   * import {Model} from 'simpli-web-sdk'
   * import {User} from '@/model/User'
   *
   * async function example() {
   *   const resp = await new User().$listFrom('/user')
   *   const users: User[] = resp.data
   * }
   * ```
   *
   * @param url The absolute or endpoint URL
   */
  async $listFrom(url: string): Promise<AxiosResponse<this[]>> {
    return await Request.get(url)
      .name(this.$getSpinnerName('list'))
      .asArrayOf(this.$clone())
      .getResponse()
  }

  /**
   * Calls HTTP GET request, and defines the response as this model.
   * Note: the default spinner name of the [[Await]] component is 'populate'.
   *
   * ```typescript
   * import {Model} from 'simpli-web-sdk'
   * import {User} from '@/model/User'
   *
   * async function example() {
   *   const user = new User()
   *   await user.$populateFrom('/user/1')
   *   // the user will be populated
   * }
   * ```
   *
   * @param url The absolute or endpoint URL
   */
  async $populateFrom(url: string): Promise<AxiosResponse<this>> {
    return await Request.get(url)
      .name(this.$getSpinnerName('populate'))
      .as(this)
      .getResponse()
  }

  /**
   * Calls HTTP POST request, and defines the response as any type.
   * Note: the default spinner name of the [[Await]] component is 'persist'.
   *
   * ```typescript
   * import {Model} from 'simpli-web-sdk'
   * import {User} from '@/model/User'
   *
   * async function example() {
   *   const user = new User()
   *   user.name = 'Michael Jackson'
   *
   *   await user.$persistFrom('/user')
   *   // the changes will be persisted
   * }
   * ```
   *
   * @param url The absolute or endpoint URL
   */
  async $persistFrom(url: string): Promise<AxiosResponse<any>> {
    return await Request.post(url, this)
      .name(this.$getSpinnerName('persist'))
      .asAny()
      .getResponse()
  }

  /**
   * Calls HTTP PUT request, and defines the response as any type.
   * Note: the default spinner name of the [[Await]] component is 'update'.
   *
   * ```typescript
   * import {Model} from 'simpli-web-sdk'
   * import {User} from '@/model/User'
   *
   * async function example() {
   *   const user = new User()
   *   await user.$populateFrom('/user/1')
   *
   *   user.name = 'Michael Jackson'
   *
   *   await user.$updateFrom('/user/1')
   *   // the changes will be persisted
   * }
   * ```
   *
   * @param url The absolute or endpoint URL
   */
  async $updateFrom(url: string): Promise<AxiosResponse<any>> {
    return await Request.put(url, this)
      .name(this.$getSpinnerName('update'))
      .asAny()
      .getResponse()
  }

  /**
   * Calls HTTP DELETE request, and defines the response as any type.
   * Note: the default spinner name of the [[Await]] component is 'remove'.
   *
   * ```typescript
   * import {Model} from 'simpli-web-sdk'
   * import {User} from '@/model/User'
   *
   * async function example() {
   *   const user = new User()
   *   await user.$removeFrom('/user/1')
   *   // remove this user from database
   * }
   * ```
   *
   * @param url The absolute or endpoint URL
   */
  async $removeFrom(url: string): Promise<AxiosResponse<any>> {
    return await Request.delete(url)
      .name(this.$getSpinnerName('remove'))
      .asAny()
      .getResponse()
  }

  /**
   * Customizes the spinner name.
   * This methods should be overwrited in order to take its effect.
   *
   * ```typescript
   * import {Model} from 'simpli-web-sdk'
   *
   * export class User extends Model {
   *   $getSpinnerName(command: string) {
   *     return `user_${command}`
   *   }
   *
   *   email: string | null = null
   *   name: string | null = null
   * }
   *
   * await function example() {
   *   const user = new User()
   *   await user.$populateFrom('/user/1')
   *   // the spinner name is 'user_populate'
   * }
   * ```
   *
   * @param command The default spinner name of the [[Await]] component from methods
   * $listFrom, $populateFrom, $persistFrom, $updateFrom and $removeFrom
   */
  $getSpinnerName(command: string): string {
    return `${command}`
  }

  /**
   * Gets a model's schema instance by its reference name.
   * Returns null if it is not found.
   *
   * ```typescript
   * import {Model, SchemaSet} from 'simpli-web-sdk'
   * import {InputUserSchema} from '@/schema/User/InputUserSchema'
   *
   * export class User extends Model {
   *   readonly $schemaSet: SchemaSet = {
   *     input: new InputUserSchema(),
   *   }
   * }
   *
   * function example() {
   *   const user = new User()
   *   user.$getSchema('input')
   * }
   *
   * @param schemaRef The schema reference name
   * ```
   */
  $getSchema(schemaRef: string): Schema | null {
    return this.$schemaSet[schemaRef] || null
  }

  /**
   * Gets the name of a model's schema by its reference name.
   * Returns null if it is not found.
   *
   * Alias of `this.$getSchema(schemaRef).name`
   *
   * ```typescript
   * import {Model, SchemaSet} from 'simpli-web-sdk'
   * import {InputUserSchema} from '@/schema/User/InputUserSchema'
   *
   * export class User extends Model {
   *   readonly $schemaSet: SchemaSet = {
   *     input: new InputUserSchema(),
   *   }
   * }
   *
   * function example() {
   *   const user = new User()
   *   user.$getSchemaName('input')
   * }
   *
   * @param schemaRef The schema reference name
   */
  $getSchemaName(schemaRef: string): string | null {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.name : null
  }

  /**
   * Gets all fields from a model's schema by its reference name.
   * Returns empty array ([]) if it is not found.
   *
   * Alias of `this.$getSchema(schemaRef).allFields`
   *
   * ```typescript
   * import {Model, SchemaSet} from 'simpli-web-sdk'
   * import {InputUserSchema} from '@/schema/User/InputUserSchema'
   *
   * export class User extends Model {
   *   readonly $schemaSet: SchemaSet = {
   *     input: new InputUserSchema(),
   *   }
   * }
   *
   * function example() {
   *   const user = new User()
   *   user.$allFieldsFrom('input')
   * }
   *
   * @param schemaRef The schema reference name
   */
  $allFieldsFrom(schemaRef: string): string[] {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.allFields : []
  }

  /**
   * Gets all headers from a model's schema by its reference name.
   * Returns empty array ([]) if it is not found.
   *
   * Alias of `this.$getSchema(schemaRef).allHeaders`
   *
   * ```typescript
   * import {Model, SchemaSet} from 'simpli-web-sdk'
   * import {InputUserSchema} from '@/schema/User/InputUserSchema'
   *
   * export class User extends Model {
   *   readonly $schemaSet: SchemaSet = {
   *     input: new InputUserSchema(),
   *   }
   * }
   *
   * function example() {
   *   const user = new User()
   *   user.$allHeadersFrom('input')
   * }
   *
   * @param schemaRef The schema reference name
   */
  $allHeadersFrom(schemaRef: string): string[] {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.allHeaders : []
  }

  /**
   * Gets the header as [[Dictionary]] from a model's schema by its reference name.
   * Returns empty object ({}) if it is not found.
   *
   * Alias of `this.$getSchema(schemaRef).header`
   *
   * ```typescript
   * import {Model, SchemaSet} from 'simpli-web-sdk'
   * import {InputUserSchema} from '@/schema/User/InputUserSchema'
   *
   * export class User extends Model {
   *   readonly $schemaSet: SchemaSet = {
   *     input: new InputUserSchema(),
   *   }
   * }
   *
   * function example() {
   *   const user = new User()
   *   user.$headerFrom('input')
   * }
   *
   * @param schemaRef The schema reference name
   */
  $headerFrom(schemaRef: string): Dictionary<string> {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.header : {}
  }

  /**
   * Gets the data as [[Dictionary]] from a model's schema by its reference name.
   * Returns empty object ({}) if it is not found.
   *
   * Alias of `this.$getSchema(schemaRef).getModelData(this)`
   *
   * ```typescript
   * import {Model, SchemaSet} from 'simpli-web-sdk'
   * import {InputUserSchema} from '@/schema/User/InputUserSchema'
   *
   * export class User extends Model {
   *   readonly $schemaSet: SchemaSet = {
   *     input: new InputUserSchema(),
   *   }
   * }
   *
   * function example() {
   *   const user = new User()
   *   user.$dataFrom('input')
   * }
   *
   * @param schemaRef The schema reference name
   */
  $dataFrom(schemaRef: string): Dictionary<FieldData> {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.getModelData(this) : {}
  }

  /**
   * Translates a field from a model's schema by its reference name.
   * Returns empty string ('') if it is not found.
   *
   * Alias of `this.$getSchema(schemaRef).translateFrom(fieldName)`
   *
   * ```typescript
   * import {Model, SchemaSet} from 'simpli-web-sdk'
   * import {InputUserSchema} from '@/schema/User/InputUserSchema'
   *
   * export class User extends Model {
   *   readonly $schemaSet: SchemaSet = {
   *     input: new InputUserSchema(),
   *   }
   * }
   *
   * function example() {
   *   const user = new User()
   *   user.$translateFrom('input', 'email')
   * }
   *
   * @param schemaRef The schema reference name
   * @param fieldName The schema's field name
   */
  $translateFrom(schemaRef: string, fieldName: string): string {
    const schema = this.$getSchema(schemaRef)
    return schema ? schema.translateFrom(fieldName) : ''
  }

  /**
   * Validates a model's schema by its reference name.
   * If there are errors, then throw an exception.
   *
   * Alias of `this.$getSchema(schemaRef).validate(this, showErrorMessage)`
   *
   * ```typescript
   * import {Model, SchemaSet} from 'simpli-web-sdk'
   * import {InputUserSchema} from '@/schema/User/InputUserSchema'
   *
   * export class User extends Model {
   *   readonly $schemaSet: SchemaSet = {
   *     input: new InputUserSchema(),
   *   }
   * }
   *
   * function example() {
   *   const user = new User()
   *   user.$validate('input')
   * }
   *
   * @param schemaRef The schema reference name
   * @param showErrorMessage If true, then spans the first error message to the user
   */
  $validate(schemaRef = 'input', showErrorMessage = true): void {
    const schema = this.$getSchema(schemaRef)
    schema && schema.validate(this, showErrorMessage)
  }

  /**
   * Clones this model and return its clone.
   *
   * Alias of `Helper.clone(this)`
   *
   * ```typescript
   * import {User} from '@/model/User'
   *
   * function example() {
   *   const user = new User()
   *   const clonedUser = user.$clone() // a copy of user instance
   * }
   */
  $clone(options?: ClassTransformOptions): this {
    return Helper.clone(this, options)
  }
}
