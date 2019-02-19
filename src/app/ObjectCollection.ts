import { ID, TAG, Enum, ICollection, IResource } from '../misc'
import * as Helper from '../helpers'

export class ObjectCollection<E extends Enum<E>> implements ICollection {
  /**
   * Items of the collection
   * @type {Array}
   */
  items: IResource[] = []

  constructor(list?: IResource[] | E, i18nPath?: string) {
    if (list instanceof Array) {
      this.items = list as IResource[]
    } else if (typeof list === 'object') {
      this.items = Helper.listObject(list, i18nPath)
    }
  }

  /**
   * Prepends a empty value into the resource list
   * @param placeholder
   */
  nullableItems(placeholder: string | null = null): Array<IResource | null> {
    return Helper.nullableItems(this.items, placeholder) as Array<IResource | null>
  }

  /**
   * Get Resource by ID
   * @param id
   */
  get(id: ID | null): IResource | null {
    return Helper.getResource(this.items, id) as IResource | null
  }

  /**
   * Filter Resource by IDs
   * @param ids
   */
  getMany(ids: ID[]): IResource[] {
    return Helper.getManyResource(this.items, ids) as IResource[]
  }

  /**
   * Get the first item of the list
   */
  first(): IResource | null {
    return Helper.firstResource(this.items) as IResource | null
  }

  /**
   * Get the last item of the list
   */
  last(): IResource | null {
    return Helper.lastResource(this.items) as IResource | null
  }

  /**
   * Add an item into the begin of the list
   * @param list
   * @param item
   */
  prepend(id: ID, tag: TAG): this {
    Helper.prependResource(this.items, Helper.buildResource(id, tag))
    return this
  }

  /**
   * Add an item into the end of the list
   * @param list
   * @param item
   */
  append(id: ID, tag: TAG): this {
    Helper.appendResource(this.items, Helper.buildResource(id, tag))
    return this
  }

  /**
   * Shuffle a list of Resource
   * @param list
   */
  shuffle(): this {
    this.items = Helper.shuffleResource(this.items) as IResource[]
    return this
  }

  /**
   * Reverse a list of Resource
   */
  reverse(): this {
    this.items = Helper.reverseResource(this.items) as IResource[]
    return this
  }

  /**
   * Add a Resource
   * @param id
   * @param tag
   * @param index
   */
  add(id: ID, tag: TAG, index?: number) {
    Helper.addResource(this.items, Helper.buildResource(id, tag), index)
  }

  /**
   * Remove a Resource by ID
   * @param id
   */
  remove(id: ID) {
    Helper.removeResource(this.items, id)
  }
}
