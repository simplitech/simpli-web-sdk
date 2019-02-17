import { $ } from '../simpli'
import { classToClass } from 'class-transformer'
import { ID, ResourceObject, TAG } from '../misc'
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
 * Build a ResourceObject
 * @param $id
 * @param $tag
 */
export const buildResource = ($id: ID, $tag: TAG): ResourceObject => ({ $id, $tag })

/**
 * Lists the enums and mapped it into an array ResourceObject
 * @param obj
 * @param i18nPath
 */
export function listOfObject(obj: object, i18nPath?: string): ResourceObject[] {
  return Object.keys(obj)
    .filter(val => isNaN(Number(val)))
    .map(key => ({ $id: obj[key], $tag: i18nPath ? $.t(`${i18nPath}.${key}`) : key }))
}

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

/**
 * Clone an entity
 * @param fromEntity
 */
export function clone<T>(fromEntity: T): T {
  return classToClass(fromEntity)
}
