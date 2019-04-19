export { ClassType } from 'class-transformer/ClassTransformer'

export type EnumType<E> = Record<keyof E, number | string> & { [k: number]: string }

export interface Dictionary<T> {
  [k: string]: T
}

export interface DataBlueprint {
  [key: string]: string[]
}

export type NormalizedItem<B extends DataBlueprint> = Record<keyof B, string> & { [k: number]: string }
