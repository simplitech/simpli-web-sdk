import { shuffle, reverse } from 'lodash'
import { Collection, ObjectCollection, Resource } from '../app'
import { ClassType, Enum, ID, IResource } from '../misc'
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
export function objectCollect<E extends Enum<E>>(list: IResource[] | E, i18nPath?: string): ObjectCollection<E> {
  return new ObjectCollection(list, i18nPath)
}

/**
 * Prepends a empty value into the resource list
 * @param list
 * @param placeholder
 */
export function nullableItems<R extends Resource>(
  list: Array<R | IResource>,
  placeholder: string | null = null
): Array<R | IResource | null> {
  let item: IResource | null = null

  if (typeof placeholder === 'string') item = buildResource(0, placeholder)

  const items: Array<R | IResource | null> = clone(list)
  items.splice(0, 0, item)

  return items
}

/**
 * Get Resource by ID
 * @param list
 * @param id
 */
export function getResource<R extends Resource>(list: Array<R | IResource>, id: ID | null): R | IResource | null {
  return clone(list).find((item: R | IResource) => item.$id === id) || null
}

/**
 * Filter Resource by IDs
 * @param list
 * @param ids
 */
export function getManyResource<R extends Resource>(list: Array<R | IResource>, ids: ID[]): Array<R | IResource> {
  return clone(list).filter((item: R | IResource) => ids.find((id: ID) => item.$id === id))
}

/**
 * Get the first item of the list
 * @param list
 */
export function firstResource<R extends Resource>(list: Array<R | IResource>): R | IResource | null {
  return list[0] || null
}

/**
 * Get the last item of the list
 * @param list
 */
export function lastResource<R extends Resource>(list: Array<R | IResource>): R | IResource | null {
  return list[list.length - 1] || null
}

/**
 * Add an item into the begin of the list
 * @param list
 * @param item
 */
export function prependResource<R extends Resource>(
  list: Array<R | IResource>,
  item: R | IResource
): Array<R | IResource> {
  addResource(list, item, 0)
  return list
}

/**
 * Add an item into the end of the list
 * @param list
 * @param item
 */
export function appendResource<R extends Resource>(
  list: Array<R | IResource>,
  item: R | IResource
): Array<R | IResource> {
  addResource(list, item)
  return list
}

/**
 * Shuffle a list of Resource
 * @param list
 */
export function shuffleResource<R extends Resource>(list: Array<R | IResource>): Array<R | IResource> {
  list = shuffle(list)
  return list
}

/**
 * Reverse a list of Resource
 * @param list
 */
export function reverseResource<R extends Resource>(list: Array<R | IResource>): Array<R | IResource> {
  list = reverse(list)
  return list
}

/**
 * Add a Resource
 * @param list
 * @param item
 * @param index
 */
export function addResource<R extends Resource>(list: Array<R | IResource>, item: R | IResource, index?: number) {
  if (index !== undefined) {
    list.splice(index, 0, item)
  } else {
    list.push(item)
  }
}

/**
 * Remove a Resource by ID
 * @param list
 * @param id
 */
export function removeResource<R extends Resource>(list: Array<R | IResource>, id: ID) {
  const index = clone(list).findIndex((item: R | IResource) => item.$id === id)
  if (index) {
    list.splice(index, 1)
  }
}
