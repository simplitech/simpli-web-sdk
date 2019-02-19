import { Resource } from '../app'
import { ID, TAG, IResource } from '../misc'

export interface ICollection {
  /**
   * Items of the collection
   * @type {Array}
   */
  items: IResource[]

  /**
   * Prepends a empty value into the resource list
   */
  nullableItems(val: string | null): Array<IResource | null>

  /**
   * Get Resource by ID
   * @param id
   */
  get(id: ID | null): IResource | null

  /**
   * Filter Resource by IDs
   * @param ids
   */
  getMany(ids: ID[]): IResource[]

  /**
   * Get the first item of the list
   */
  first(): IResource | null

  /**
   * Get the last item of the list
   */
  last(): IResource | null

  /**
   * Add a null item into the begin of the list
   * @param tag
   * @param useI18n
   */
  prependNull(tag: TAG, useI18n: boolean): this

  /**
   * Add an item into the begin of the list
   * @param id
   * @param tag
   */
  prepend(id: ID, tag: TAG): this

  /**
   * Add an item into the end of the list
   * @param id
   * @param tag
   */
  append(id: ID, tag: TAG): this

  /**
   * Shuffle a list of Resource
   */
  shuffle(): this

  /**
   * Reverse a list of Resource
   */
  reverse(): this

  /**
   * Add a Resource
   * @param id
   * @param tag
   * @param index
   */
  add(id: ID, tag: TAG, index?: number): void

  /**
   * Remove a Resource by ID
   * @param id
   */
  remove(id: ID): void
}
