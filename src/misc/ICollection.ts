import { ID, IResource } from '../misc'

export interface ICollection {
  /**
   * Items of the collection
   * @type {Array}
   */
  readonly items: IResource[]

  /**
   * Prepends a empty value into the resource list
   */
  nullableItems(val: IResource | string | null): IResource[]

  /**
   * Get Resource by ID
   * @param id
   */
  getResource(id: ID | null): IResource | null

  /**
   * Filter Resource by IDs
   * @param ids
   */
  filterResource(ids: ID[]): IResource[]
}
