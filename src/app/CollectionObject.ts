import { ICollection, ID, ResourceObject } from '../misc'
import { nullableItems, getResource, filterResource, listOfObject } from '../helpers'

export class CollectionObject implements ICollection {
  /**
   * Items of the collection
   * @type {Array}
   */
  items: ResourceObject[] = []

  constructor(list: ResourceObject[] | object, i18nPath?: string) {
    if (list instanceof Array) {
      this.items = list as ResourceObject[]
    } else {
      this.items = listOfObject(list, i18nPath)
    }
  }

  /**
   * Prepends a empty value into the resource list
   */
  nullableItems(val: ResourceObject | string | null = null): ResourceObject[] {
    return nullableItems(this.items, val) as ResourceObject[]
  }

  /**
   * Get Resource by ID
   * @param id
   */
  getResource(id: ID | null): ResourceObject | null {
    return getResource(this.items, id) as ResourceObject | null
  }

  /**
   * Filter Resource by IDs
   * @param ids
   */
  filterResource(ids: ID[]): ResourceObject[] {
    return filterResource(this.items, ids) as ResourceObject[]
  }
}
