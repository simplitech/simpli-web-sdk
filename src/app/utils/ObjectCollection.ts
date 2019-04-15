import { $ } from '../../simpli'
import { ID, TAG, EnumType, ICollection, IResource } from '../../interfaces'
import { Helper } from '../../main'

export class ObjectCollection<E extends EnumType<E>> implements ICollection {
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
  itemsWithPlaceholder(placeholder: string | null = null): Array<IResource | null> {
    return Helper.itemsWithPlaceholder(this.items, placeholder) as Array<IResource | null>
  }

  /**
   * Get Resource by ID
   * @param id
   */
  getOne(id: ID | null): IResource | null {
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
   * Add a null item into the begin of the list
   * @param tag
   * @param useI18n
   */
  prependNull(tag: TAG, useI18n = true): this {
    return this.prepend(0, useI18n ? ($.t(tag) as string) : tag)
  }

  /**
   * Add an item into the begin of the list
   * @param id
   * @param tag
   */
  prepend(id: ID, tag: TAG): this {
    Helper.prependResource(this.items, Helper.buildResource(id, tag))
    return this
  }

  /**
   * Add an item into the end of the list
   * @param id
   * @param tag
   */
  append(id: ID, tag: TAG): this {
    Helper.appendResource(this.items, Helper.buildResource(id, tag))
    return this
  }

  /**
   * Shuffle a list of Resource
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
