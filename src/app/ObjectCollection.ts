import { ICollection, ID, IResource } from '../misc'
import { clone, nullableItems, getResource, filterResource, listOfResource } from '../helpers'

export class ObjectCollection implements ICollection {
  /**
   * Items of the collection
   * @type {Array}
   */
  readonly items: IResource[]

  constructor(list: IResource[] | object, i18nPath?: string) {
    if (list instanceof Array) {
      this.items = list as IResource[]
    } else {
      this.items = listOfResource(list, i18nPath)
    }
  }

  /**
   * Prepends a empty value into the resource list
   */
  nullableItems(val: IResource | string | null = null): IResource[] {
    return nullableItems(this.items, val) as IResource[]
  }

  /**
   * Get Resource by ID
   * @param id
   */
  getResource(id: ID | null): IResource | null {
    return getResource(clone(this.items), id) as IResource | null
  }

  /**
   * Filter Resource by IDs
   * @param ids
   */
  filterResource(ids: ID[]): IResource[] {
    return filterResource(this.items, ids) as IResource[]
  }
}
