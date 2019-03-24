import { $ } from '../simpli'
import { classToClass } from 'class-transformer'
import Papa, { ParseError, ParseResult } from 'papaparse'
import { ID, TAG, IResource, DataBlueprint, NormalizedItem } from '../misc'
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
 * Build an IResource
 * @param $id
 * @param $tag
 */
export const buildResource = ($id: ID, $tag: TAG): IResource => ({ $id, $tag })

/**
 * Lists the objects keys and mapped it into an array of Resource
 * @param obj
 * @param i18nPath
 */
export function listObject(obj: { [key: string]: ID }, i18nPath?: string): IResource[] {
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
 * Transform a csv file into a normalized data object
 * @param urlOrFile
 * @param blueprint
 */
export const csvToNormalizedData = async <T extends DataBlueprint>(
  urlOrFile: string | File,
  blueprint: T
): Promise<Array<NormalizedItem<T>>> => {
  const resp = await csvToData(urlOrFile)
  return normalizeData(resp.data, blueprint) as Array<NormalizedItem<T>>
}

/**
 * Transform a csv file into a data object
 * @param urlOrFile
 */
export const csvToData = async (urlOrFile: string | File): Promise<ParseResult> => {
  const promiseFunc = (resolve: Function, reject: Function) => {
    const defaultConfig = {
      header: true,
      skipEmptyLines: true,
      complete: (results: ParseResult) => resolve(results),
      error: (error: ParseError) => reject(error),
    }

    if (urlOrFile instanceof File) {
      Papa.parse(urlOrFile, { ...defaultConfig })
    } else {
      Papa.parse(urlOrFile, { download: true, ...defaultConfig })
    }
  }

  return new Promise<ParseResult>(promiseFunc)
}

/**
 * Normalize a generic data based on CSV Blueprint
 * @param data
 * @param blueprint
 */
export const normalizeData = <T extends DataBlueprint>(data: any[], blueprint: T): Array<NormalizedItem<T>> => {
  return (
    data
      .map((dataItem: any) => {
        const normDataItem: any = {}

        for (const key in blueprint) {
          if (blueprint.hasOwnProperty(key)) {
            const allowedKeys = blueprint[key]
            const keyFromData = allowedKeys.find((k: string) => dataItem[k])
            if (keyFromData) {
              normDataItem[key] = dataItem[keyFromData]
            }
          }
        }

        return normDataItem as NormalizedItem<T>
      })
      // clean invalid rows
      .filter((item: any) => item !== undefined && item !== null)
  )
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

export function copyToClipboard(text: string) {
  const el = document.createElement('textarea')
  el.value = text
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

/**
 * Clone an entity
 * @param fromEntity
 */
export function clone<T>(fromEntity: T): T {
  return classToClass(fromEntity)
}

/**
 * Transform null, undefined and number to string
 * @param val
 */
export function toString(val?: string | number | null): string {
  return val !== null && val !== undefined ? val.toString() : ''
}
