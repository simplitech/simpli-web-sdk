import { SocketConnection } from './SocketConnection'
import { Dictionary, SocketConfig, SocketInstance, SocketStatic } from '../../interfaces'

export const socket: SocketStatic = {
  create(config: SocketConfig = {}): SocketInstance {
    const socketConnection: Dictionary<SocketConnection<any>> = {}

    const connect = <T>(name: string, connection: SocketConnection<T>) => {
      if (socketConnection[name]) {
        socketConnection[name].disconnect()
      }
      socketConnection[name] = connection
    }

    const getConnection = (name: string) => socketConnection[name]

    const disconnectAll = () => {
      for (const name in socketConnection) {
        socketConnection[name].disconnect()
      }
    }

    return { config, connect, getConnection, disconnectAll }
  },
}
