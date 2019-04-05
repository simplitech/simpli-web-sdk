import { SocketConnection } from '../app'

export interface SocketStatic {
  create(config?: SocketConfig): SocketInstance
}

export interface SocketConfig {
  baseURL?: string
}

export interface SocketInstance {
  baseURL?: string
  connect: <T>(name: string, connection: SocketConnection<T>) => void
  getConnection: <T>(name: string) => SocketConnection<T>
  disconnectAll: () => void
}
