import { $ } from '../../simpli'
import { Collection } from './Collection'
import { ID, TAG, EnumType, IResourceCollection, IResource } from '../../interfaces'
import { Helper } from '../../main'

export class EnumCollection<E> extends Collection implements IResourceCollection {
  constructor(enumType: EnumType<E>, i18nPath?: string) {
    super()
    this.items = Helper.listObject(enumType, i18nPath)
  }

  protected readonly items: IResource[]

  allWithPlaceholder(placeholder: string | null = null): Array<IResource | null> {
    return Helper.allWithPlaceholder(this.items, placeholder) as Array<IResource | null>
  }

  getResource(id: ID | null): IResource | null {
    return Helper.getResource(this.items, id) as IResource | null
  }

  getManyResource(ids: ID[]): IResource[] {
    return Helper.getManyResource(this.items, ids) as IResource[]
  }

  addResource(id: ID, tag: TAG, index?: number) {
    Helper.addResource(this.items, Helper.buildResource(id, tag), index)
  }

  removeResource(id: ID) {
    Helper.removeResource(this.items, id)
  }

  prependResource(id: ID, tag: TAG): this {
    Helper.prependResource(this.items, Helper.buildResource(id, tag))
    return this
  }

  prependNullResource(tag: TAG, useI18n = true): this {
    return this.prependResource(0, useI18n ? ($.t(tag) as string) : tag)
  }

  appendResource(id: ID, tag: TAG): this {
    Helper.appendResource(this.items, Helper.buildResource(id, tag))
    return this
  }
}
