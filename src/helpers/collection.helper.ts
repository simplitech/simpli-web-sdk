import { Collection, ObjectCollection, Resource } from '../app'
import { ClassType, ID, IResource } from '../misc'
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
 * @returns ObjectCollection
 */
export function objectCollect(list: IResource[] | object, i18nPath?: string): ObjectCollection {
  return new ObjectCollection(list, i18nPath)
}

/**
 * Prepends a empty value into the resource list
 * @param list
 * @param val
 */
export function nullableItems<R extends Resource>(
  list: Array<R | IResource>,
  val: R | IResource | string | null = null
): Array<R | IResource> {
  let item = val

  if (val instanceof String) item = buildResource(0, val as string)

  return [item as R, ...list]
}

/**
 * Get IResource by ID
 * @param list
 * @param id
 */
export function getResource<R extends Resource>(list: Array<R | IResource>, id: ID | null): R | IResource | null {
  return list.find((item: R | IResource) => item.$id === id) || null
}

/**
 * Filter IResource by IDs
 * @param list
 * @param ids
 */
export function filterResource<R extends Resource>(list: Array<R | IResource>, ids: ID[]): Array<R | IResource> {
  return clone(list).filter((item: R | IResource) => ids.find((id: ID) => item.$id === id))
}
