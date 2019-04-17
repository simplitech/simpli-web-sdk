import { ID, TAG, IResource } from '../interfaces'

export interface IValidation {
  $validateFirstError?(): Promise<void>
  $validate(): Promise<void>
}

export interface IResource {
  $id: ID
  $tag: TAG
}

export interface IResourceCollection {
  /**
   * Prepends a empty value into the resource list
   * @param placeholder
   */
  allWithPlaceholder(placeholder: string | null): Array<IResource | null>

  /**
   * Get Resource by ID
   * @param id
   */
  getResource(id: ID | null): IResource | null

  /**
   * Filter Resource by IDs
   * @param ids
   */
  getManyResource(ids: ID[]): IResource[]

  /**
   * Add a Resource
   * @param id
   * @param tag
   * @param index
   */
  addResource(id: ID, tag: TAG, index?: number): void

  /**
   * Remove a Resource by ID
   * @param id
   */
  removeResource(id: ID): void

  /**
   * Add an item into the begin of the list
   * @param id
   * @param tag
   */
  prependResource(id: ID, tag: TAG): this

  /**
   * Add a null item into the begin of the list
   * @param tag
   * @param useI18n
   */
  prependNullResource(tag: TAG, useI18n: boolean): this

  /**
   * Add an item into the end of the list
   * @param id
   * @param tag
   */
  appendResource(id: ID, tag: TAG): this
}
