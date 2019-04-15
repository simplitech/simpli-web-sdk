import { Exclude, Expose, Type } from 'class-transformer'

/**
 * Serialize nested objects
 * @param {Function} func
 */
export function ResponseSerialize(func: Function) {
  return Type(() => func)
}

/**
 * Show a property during the serialization
 * Note: this decorator is set by default
 * @param {string} name
 */
export function ResponseFill(name?: string) {
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
export function ResponseHidden() {
  return Exclude({ toClassOnly: true })
}

/**
 * Ignore the request and response of a property
 */
export function HttpIgnore() {
  return Exclude()
}
