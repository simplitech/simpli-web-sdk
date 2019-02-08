import { classToClass } from 'class-transformer'
import { $ } from '../simpli'
import { Collection, Resource } from '../app'
import { ClassType, ResourceObject } from '../misc'

const shortid = require('shortid')

/**
 * Generate a random unique hash
 * @param {string} prefix
 * @param {string} suffix
 * @returns {string}
 */
export const uid = (prefix?: string, suffix?: string) => `${prefix || ''}${shortid.generate()}${suffix || ''}`

/**
 * Pause process for a while
 * @param {number} ms time in ms to wait
 * @returns {Promise<any>}
 */
export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Transform a given array of Resource into Collection
 * @param list
 * @param cls
 * @returns Collection<T>
 */
export function collect<T extends Resource>(cls: ClassType<T>, list?: T[]): Collection<T> {
  const collection = new Collection<T>(cls)
  if (list) {
    collection.items = list
  }
  return collection
}

/**
 * Clone an entity
 * @param fromEntity
 * @returns {any}
 */
export function clone<T>(fromEntity: T): T {
  return classToClass(fromEntity)
}

/**
 * Lists the enums and mapped it into ResourceObject
 * @param objEnum
 * @param i18nPath
 */
export const listEnum = (objEnum: any, i18nPath?: string): ResourceObject[] =>
  Object.keys(objEnum)
    .filter(val => isNaN(Number(val)))
    .map(key => ({ $id: objEnum[key], $tag: i18nPath ? $.t(`${i18nPath}.${key}`) : key }))

/**
 * Generate a download file from a CSV string
 * @param {string} filename
 * @param {string} csvStr
 */
export function createCsvFile(filename: string, csvStr: string) {
  const csvData = new Blob([`\uFEFF${csvStr}`], { type: 'text/csv;charset=utf-8;' })
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(csvData, filename)
  } else {
    const link = document.createElement('a')
    // feature detection
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(csvData)
    link.setAttribute('href', url)
    link.setAttribute('download', filename)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

/**
 * Used for currency configuration
 * @param {string} currency
 * @returns object
 */
export function currencyConfig(currency: string) {
  return {
    decimal: $.t('lang.decimal') as string,
    thousands: $.t('lang.thousands') as string,
    prefix: $.t(`currency.${currency}.prefix`) as string,
    precision: Number($.t(`currency.${currency}.precision`) as string),
  }
}
