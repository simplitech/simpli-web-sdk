import { ClassType } from '../interfaces'

export type ResponseType<T> = ClassType<T> | T

export type EnumType<E> = Record<keyof E, number | string> & { [k: number]: string }

export interface Dictionary<T> {
  [k: string]: T
}

export type QueryFilter = Dictionary<any>

export interface QueryRouter {
  q?: string
  page?: string
  order?: string
  asc?: string
}

export interface DataBlueprint {
  [key: string]: string[]
}

export type NormalizedItem<B extends DataBlueprint> = Record<keyof B, string> & { [k: number]: string }

export interface FileObject {
  active: boolean
  data: any
  el: Element
  error?: string
  file: File
  blob?: string
  thumb?: string
  fileObject: boolean
  headers: object
  id: string
  name: string
  postAction?: string
  progress: string
  putAction?: string
  response: any
  size: number
  speed: number
  success: boolean
  timeout: boolean
  type: string
}
