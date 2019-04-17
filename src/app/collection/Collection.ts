import _ from 'lodash'

export class Collection<T = any> {
  constructor(items: T[] = []) {
    this.items = items
  }

  /**
   * Items of the collection
   * @type {Array}
   */
  protected readonly items: T[]

  /**
   * lodash
   */
  get lodash() {
    return _.chain(this.items)
  }

  /**
   * Returns the underlying array represented by the collection
   */
  all() {
    return this.items
  }

  /**
   * Get a item from a given index of the collection
   * @param index
   */
  get(index: number) {
    return this.items[index]
  }

  /**
   * Get the first item of the collection
   */
  first() {
    return this.items[0]
  }

  /**
   * Get the last item of the collection
   */
  last() {
    return this.items[this.items.length - 1]
  }
}
