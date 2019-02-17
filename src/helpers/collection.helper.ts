import { Collection, CollectionObject, Resource } from '../app'
import { ClassType, ID, ResourceObject } from '../misc'
import { buildResource, clone } from './misc.helper'

/**
 * Transform a given array of Resource into Collection
 * @param list
 * @param cls
 * @returns Collection<T>
 */
export function collect<R extends Resource>(cls: ClassType<R>, list?: R[]): Collection<R> {
  const collection = new Collection<R>(cls)
  if (list) {
    collection.items = list
  }
  return collection
}

/**
 * Transform a given array of Resource Object into Collection
 * @param list
 * @param i18nPath
 * @returns CollectionObject
 */
export function collectObject(list: ResourceObject[] | object, i18nPath?: string): CollectionObject {
  return new CollectionObject(list, i18nPath)
}

/**
 * Prepends a empty value into the resource list
 * @param list
 * @param val
 */
export function nullableItems<R extends Resource>(
  list: Array<R | ResourceObject>,
  val: R | ResourceObject | string | null = null
): Array<R | ResourceObject> {
  let item = val

  if (val instanceof String) item = buildResource(0, val as string)

  return [item as R, ...list]
}

/**
 * Get ResourceObject by ID
 * @param list
 * @param id
 */
export function getResource<R extends Resource>(
  list: Array<R | ResourceObject>,
  id: ID | null
): R | ResourceObject | null {
  return clone(list).find((item: R | ResourceObject) => item.$id === id) || null
}

/**
 * Filter ResourceObject by IDs
 * @param list
 * @param ids
 */
export function filterResource<R extends Resource>(
  list: Array<R | ResourceObject>,
  ids: ID[]
): Array<R | ResourceObject> {
  return clone(list).filter((item: R | ResourceObject) => ids.find((id: ID) => item.$id === id))
}
