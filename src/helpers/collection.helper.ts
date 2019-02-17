import { $ } from '../simpli'
import { Collection, Resource } from '../app'
import { classToClass } from 'class-transformer'
import { ClassType, ID, ResourceObject, TAG } from '../misc'

/**
 * Build a ResourceObject
 * @param $id
 * @param $tag
 */
export const buildResource = ($id: ID, $tag: TAG): ResourceObject => ({ $id, $tag })

/**
 * Lists the enums and mapped it into an array ResourceObject
 * @param objEnum
 * @param i18nPath
 */
export function listOfEnum(objEnum: any, i18nPath?: string): ResourceObject[] {
  return Object.keys(objEnum)
    .filter(val => isNaN(Number(val)))
    .map(key => ({ $id: objEnum[key], $tag: i18nPath ? $.t(`${i18nPath}.${key}`) : key }))
}

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
 * @returns Collection<T>
 */
export function collectResource(list?: ResourceObject[]): Collection<Resource> {
  // @ts-ignore
  return collect(Resource, list as Resource[])
}

/**
 * Lists the enums and mapped it into a collection
 * @param objEnum
 * @param i18nPath
 */
export function collectEnum(objEnum: any, i18nPath?: string): Collection<Resource> {
  return collectResource(listOfEnum(objEnum, i18nPath))
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

/**
 * Clone an entity
 * @param fromEntity
 */
export function clone<T>(fromEntity: T): T {
  return classToClass(fromEntity)
}
