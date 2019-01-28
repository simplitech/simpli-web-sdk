/**
 * Alias of PageCollection
 * Used to get all items from a paged list response
 */
import { Resource } from './Resource'
import { PageCollection } from './PageCollection'
import { ClassType } from '../../misc'

export default class WholeCollection<T extends Resource> extends PageCollection<T> {
  // Get all items from a paged list response
  constructor(public type: ClassType<T>) {
    super(type, {}, null, null)
  }
}
