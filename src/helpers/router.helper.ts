import { $ } from '../simpli'
import { ID } from '../interfaces'

export function push(uri: string) {
  return $.router.push(uri)
}

export function pushByName(name: string, ...ids: ID[]) {
  const params: any = {}

  if (ids.length > 1) {
    ids.forEach((id, index) => (params[`id${index}`] = id))
  } else if (ids.length === 1) {
    params.id = ids[0]
  }

  $.router.push({ name, params })
}

export function openUrl(url: string, targetBlank?: boolean) {
  return window.open(url, targetBlank ? '_blank' : '_self')
}

export function historyBack() {
  return window.history.back()
}
