import { ID, TAG, IResource } from '../interfaces'

export interface IValidation {
  $validateFirstError?(): Promise<void>
  $validate(): Promise<void>
}

export interface IResource {
  $id: ID
  $tag: TAG
}

export interface IResourceCollection {
  allWithPlaceholder(placeholder: string | null): Array<IResource | null>

  getResource(id: ID | null): IResource | null

  getManyResource(ids: ID[]): IResource[]

  addResource(id: ID, tag: TAG, index?: number): void

  removeResource(id: ID): void

  prependResource(id: ID, tag: TAG): this

  prependNullResource(tag: TAG, useI18n: boolean): this

  appendResource(id: ID, tag: TAG): this
}
