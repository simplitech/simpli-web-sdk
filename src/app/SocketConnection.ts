import { deserialize } from 'class-transformer'
import { ClassType } from '../misc'
import { $ } from '../simpli'

export class SocketConnection<T> {
  cls: ClassType<T>
  socket: WebSocket

  constructor(cls: ClassType<T>, endpoint: string) {
    this.cls = cls
    this.socket = new WebSocket(`${$.socketURL}${encodeURI(endpoint)}`)
  }

  disconnect() {
    this.socket.close()
  }

  onOpen(callback: (e: Event) => any) {
    this.socket.onopen = function(this: WebSocket, e: Event) {
      callback(e)
    }
  }

  onClose(callback: (e: CloseEvent) => any) {
    this.socket.onclose = function(this: WebSocket, e: CloseEvent) {
      callback(e)
    }
  }

  onError(callback: (e: Event) => any) {
    this.socket.onerror = function(this: WebSocket, e: Event) {
      callback(e)
    }
  }

  onData(callback: (resp: T) => any) {
    const self = this
    this.socket.onmessage = function(this: WebSocket, e: MessageEvent) {
      if (self.cls.name === 'String') {
        callback(e.data)
        return
      }

      const data = e.data
      const resp = deserialize<T>(self.cls, data)
      callback(resp)
    }
  }

  onOpenPromise() {
    const promiseFunc = (resolve: Function) => {
      this.onOpen((e: Event) => resolve(e))
    }

    return new Promise<void>(promiseFunc)
  }

  onClosePromise() {
    const promiseFunc = (resolve: Function) => {
      this.onClose((e: CloseEvent) => resolve(e))
    }

    return new Promise<void>(promiseFunc)
  }

  onErrorPromise() {
    const promiseFunc = (resolve: Function) => {
      this.onError((e: Event) => resolve(e))
    }

    return new Promise<void>(promiseFunc)
  }

  onDataPromise() {
    const promiseFunc = (resolve: Function) => {
      this.onData((resp: T) => resolve(resp))
    }

    return new Promise<void>(promiseFunc)
  }
}
