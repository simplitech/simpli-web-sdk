import { plainToClassFromExist } from 'class-transformer'
import { $ } from '../simpli'
import { Collection, Resource } from '../app'

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
 * @param type
 * @returns Collection<T>
 */
export function collect<T extends Resource>(type: typeof Resource, list?: T[]): Collection<T> {
  const collection = new Collection<T>(type)
  if (list) {
    collection.items = list
  }
  return collection
}

/**
 * Clone an entity
 * @param newEntity
 * @param fromEntity
 * @returns {any}
 */
export function clone(newEntity: any, fromEntity: any) {
  const json = JSON.stringify(fromEntity)
  const data = JSON.parse(json)
  return plainToClassFromExist(newEntity, data) as typeof newEntity
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
