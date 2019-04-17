/**
 * ClassType
 */
export { ClassType } from 'class-transformer/ClassTransformer'

/**
 * This type represent any Enum type
 */
export type EnumType<E> = Record<keyof E, number | string> & { [k: number]: string }

/**
 * Dictionary
 */
export interface Dictionary<T> {
  [k: string]: T
}

/**
 * Data blueprint
 */
export interface DataBlueprint {
  [key: string]: string[]
}

/**
 * Normalized item
 */
export type NormalizedItem<B extends DataBlueprint> = Record<keyof B, string> & { [k: number]: string }
