import { SocketConnection } from '../app'
import { ClassType } from '../interfaces'

export interface SocketStatic {
  create(config?: SocketConfig): SocketInstance
}

export interface SocketConfig {
  baseURL?: string
}

export interface SocketInstance {
  config: SocketConfig
  connect: <T>(name: string, url: string, classType?: ClassType<T>) => SocketConnection<T>
  disconnect: (name: string) => void
  getConnection: <T>(name: string) => SocketConnection<T> | null
  disconnectAll: () => void
}
