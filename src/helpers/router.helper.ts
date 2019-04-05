import { $ } from '../simpli'
import { ID } from '../interfaces'

/**
 * Go to a given uri of vue-router
 * @param {string} uri
 */
export const push = (uri: string) => $.router.push(uri)

/**
 * Go to a given name of vue-router
 * @param {string} name
 * @param {ID} id1
 * @param {ID} id2
 */
export const pushByName = (name: string, id1?: ID, id2?: ID) => {
  if (!id1 && !id2) $.router.push({ name })
  else if (id1 && !id2) $.router.push({ name, params: { id: id1 as string } })
  else $.router.push({ name, params: { id1: id1 as string, id2: id2 as string } })
}

/**
 * Open a specific URL
 * @param {string} url
 * @param {boolean} targetBlank
 * @returns {Window | null}
 */
export const openUrl = (url: string, targetBlank?: boolean) => window.open(url, targetBlank ? '_blank' : '_self')

/**
 * Back history
 */
export const backHistory = () => window.history.back()
