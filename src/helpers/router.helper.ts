import { $ } from '../simpli'
import { ID } from '../interfaces'

export function push(uri: string) {
  return $.router.push(uri)
}

export function pushByName(name: string, id1?: ID, id2?: ID) {
  if (!id1 && !id2) $.router.push({ name })
  else if (id1 && !id2) $.router.push({ name, params: { id: id1 as string } })
  else $.router.push({ name, params: { id1: id1 as string, id2: id2 as string } })
}

export function openUrl(url: string, targetBlank?: boolean) {
  return window.open(url, targetBlank ? '_blank' : '_self')
}

export function historyBack() {
  return window.history.back()
}
