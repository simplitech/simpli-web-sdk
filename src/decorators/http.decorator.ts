import { Exclude, Expose, Type } from 'class-transformer'

/**
 * Serialize nested objects
 * @param {Function} func
 */
export function ResponseSerialize(func: Function) {
  return Type(() => func)
}

/**
 * Expose a property during the serialization
 * @param {string} name
 */
export function ResponseExpose(name?: string) {
  return Expose({ name, toClassOnly: true })
}

/**
 * Expose a property during the deserialization
 * @param {string} name
 */
export function RequestExpose(name?: string) {
  return Expose({ name, toPlainOnly: true })
}

/**
 * Expose the request and response of a property
 * Note: this decorator is set by default
 * @param {string} name
 */
export function HttpExpose(name?: string) {
  return Expose({ name })
}

/**
 * Exclude a property during the serialization
 */
export function RequestExclude() {
  return Exclude({ toPlainOnly: true })
}

/**
 * Hide a property during the deserialization
 */
export function ResponseExclude() {
  return Exclude({ toClassOnly: true })
}

/**
 * Exclude the request and response of a property
 */
export function HttpExclude() {
  return Exclude()
}
