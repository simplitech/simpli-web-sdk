import { Resource } from '../app'
import { ID, IResource } from '../interfaces'
import { buildResource, clone } from './utils.helper'

export function allWithPlaceholder<R extends Resource>(
  list: Array<R | IResource>,
  placeholder: string | null = null
): Array<R | IResource | null> {
  let item: IResource | null = null

  if (typeof placeholder === 'string') item = buildResource(0, placeholder)

  const items: Array<R | IResource | null> = clone(list)
  items.splice(0, 0, item)

  return items
}

export function getResource<R extends Resource>(list: Array<R | IResource>, id: ID | null): R | IResource | null {
  return clone(list).find((item: R | IResource) => item.$id === id) || null
}

export function getManyResource<R extends Resource>(list: Array<R | IResource>, ids: ID[]): Array<R | IResource> {
  return clone(list).filter((item: R | IResource) => ids.find((id: ID) => item.$id === id))
}

export function prependResource<R extends Resource>(
  list: Array<R | IResource>,
  item: R | IResource
): Array<R | IResource> {
  addResource(list, item, 0)
  return list
}

export function appendResource<R extends Resource>(
  list: Array<R | IResource>,
  item: R | IResource
): Array<R | IResource> {
  addResource(list, item)
  return list
}

export function addResource<R extends Resource>(list: Array<R | IResource>, item: R | IResource, index?: number) {
  if (index !== undefined) {
    list.splice(index, 0, item)
  } else {
    list.push(item)
  }
}

export function removeResource<R extends Resource>(list: Array<R | IResource>, id: ID) {
  const index = clone(list).findIndex((item: R | IResource) => item.$id === id)
  if (index) {
    list.splice(index, 1)
  }
}
