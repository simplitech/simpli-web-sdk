import _ from 'lodash'

export class Collection<T = any> {
  constructor(items: T[] = []) {
    this.items = items
  }

  protected items: T[]

  get lodash() {
    return _.chain(this.items)
  }

  all() {
    return this.items
  }

  get(index: number) {
    return this.items[index]
  }

  first() {
    return this.items[0]
  }

  last() {
    return this.items[this.items.length - 1]
  }

  add(item: T, index?: number) {
    if (index !== undefined) {
      this.items.splice(index, 0, item)
    } else {
      this.items.push(item)
    }
  }

  addAll(list: T[], index?: number) {
    if (index !== undefined) {
      this.items.splice(index, 0, ...list)
    } else {
      this.items.push(...list)
    }
  }

  remove(item: T) {
    const index = this.items.indexOf(item)
    if (index >= 0) {
      this.items.splice(index, 1)
    }
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return !this.items.length
  }

  isNotEmpty() {
    return !!this.items.length
  }

  clear() {
    this.items = []
  }

  pop = this.items.pop

  concat = this.items.concat

  join = this.items.join

  reverse = this.items.reverse

  shift = this.items.shift

  slice = this.items.slice

  splice = this.items.splice

  unshift = this.items.unshift

  indexOf = this.items.indexOf

  lastIndexOf = this.items.lastIndexOf

  every = this.items.every

  some = this.items.some

  forEach = this.items.forEach

  map = this.items.map

  filter = this.items.filter

  reduce = this.items.reduce

  reduceRight = this.items.reduceRight

  find = this.items.find

  findIndex = this.items.findIndex

  entries = this.items.entries

  keys = this.items.keys

  values = this.items.values

  includes = this.items.includes
}
