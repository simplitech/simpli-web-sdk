import { ID, ResourceObject } from '.'
import { Resource } from '../app'

export interface ICollection {
  /**
   * Items of the collection
   * @type {Array}
   */
  items: Array<ResourceObject | Resource>

  /**
   * Prepends a empty value into the resource list
   */
  nullableItems(val: ResourceObject | Resource | string | null): Array<ResourceObject | Resource>

  /**
   * Get Resource by ID
   * @param id
   */
  getResource(id: ID | null): ResourceObject | null

  /**
   * Filter Resource by IDs
   * @param ids
   */
  filterResource(ids: ID[]): ResourceObject[]
}
