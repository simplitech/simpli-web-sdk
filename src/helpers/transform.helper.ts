import * as ClassTransformer from 'class-transformer'

/**
 * Converts class (constructor) object to plain (literal) object. Also works with arrays.
 */
export const classToPlain = ClassTransformer.classToPlain

/**
 * Converts class (constructor) object to plain (literal) object.
 * Uses given plain object as source object (it means fills given plain object with data from class object).
 * Also works with arrays.
 */
export const classToPlainFromExist = ClassTransformer.classToPlainFromExist

/**
 * Converts plain (literal) object to class (constructor) object. Also works with arrays.
 */
export const plainToClass = ClassTransformer.plainToClass

/**
 * Converts plain (literal) object to class (constructor) object.
 * Uses given object as source object (it means fills given object with data from plain object).
 *  Also works with arrays.
 */
export const plainToClassFromExist = ClassTransformer.plainToClassFromExist

/**
 * Converts class (constructor) object to new class (constructor) object. Also works with arrays.
 */
export const classToClass = ClassTransformer.classToClass

/**
 * Converts class (constructor) object to plain (literal) object.
 * Uses given plain object as source object (it means fills given plain object with data from class object).
 * Also works with arrays.
 */
export const classToClassFromExist = ClassTransformer.classToClassFromExist

/**
 * Serializes given object to a JSON string.
 */
export const serialize = ClassTransformer.serialize

/**
 * Deserializes given JSON string to a object of the given class.
 */
export const deserialize = ClassTransformer.deserialize

/**
 * Deserializes given JSON string to an array of objects of the given class.
 */
export const deserializeArray = ClassTransformer.deserializeArray
