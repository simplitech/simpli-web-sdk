import { $ } from '../../simpli'
import { Collection } from './Collection'
import { ID, TAG, EnumType, IResourceCollection, IResource } from '../../interfaces'
import { Helper } from '../../main'

export class EnumCollection<E> extends Collection implements IResourceCollection {
  constructor(enumType: EnumType<E>, i18nPath?: string) {
    super()
    this.items = Helper.listObject(enumType, i18nPath)
  }

  /**
   * Items of the collection
   * @type {Array}
   */
  protected readonly items: IResource[]

  /**
   * Prepends a empty value into the resource list
   * @param placeholder
   */
  allWithPlaceholder(placeholder: string | null = null): Array<IResource | null> {
    return Helper.allWithPlaceholder(this.items, placeholder) as Array<IResource | null>
  }

  /**
   * Get Resource by ID
   * @param id
   */
  getResource(id: ID | null): IResource | null {
    return Helper.getResource(this.items, id) as IResource | null
  }

  /**
   * Filter Resource by IDs
   * @param ids
   */
  getManyResource(ids: ID[]): IResource[] {
    return Helper.getManyResource(this.items, ids) as IResource[]
  }

  /**
   * Add a Resource
   * @param id
   * @param tag
   * @param index
   */
  addResource(id: ID, tag: TAG, index?: number) {
    Helper.addResource(this.items, Helper.buildResource(id, tag), index)
  }

  /**
   * Remove a Resource by ID
   * @param id
   */
  removeResource(id: ID) {
    Helper.removeResource(this.items, id)
  }

  /**
   * Add an item into the begin of the list
   * @param id
   * @param tag
   */
  prependResource(id: ID, tag: TAG): this {
    Helper.prependResource(this.items, Helper.buildResource(id, tag))
    return this
  }

  /**
   * Add a null item into the begin of the list
   * @param tag
   * @param useI18n
   */
  prependNullResource(tag: TAG, useI18n = true): this {
    return this.prependResource(0, useI18n ? ($.t(tag) as string) : tag)
  }

  /**
   * Add an item into the end of the list
   * @param id
   * @param tag
   */
  appendResource(id: ID, tag: TAG): this {
    Helper.appendResource(this.items, Helper.buildResource(id, tag))
    return this
  }
}
