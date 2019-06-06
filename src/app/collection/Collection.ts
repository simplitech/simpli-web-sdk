import _ from 'lodash'

export class Collection<T = any> {
  constructor(items: T[] = []) {
    this.items = items
  }

  protected readonly items: T[]

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
}
