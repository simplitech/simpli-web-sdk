import { SocketConnection } from './SocketConnection'
import { ClassType, Dictionary, SocketConfig, SocketInstance, SocketStatic } from '../../interfaces'

const socket: SocketStatic = {
  create(config: SocketConfig = {}): SocketInstance {
    const socketConnection: Dictionary<SocketConnection<any>> = {}

    const connect = <T>(name: string, classType: ClassType<T>, url: string) => {
      if (socketConnection[name]) {
        socketConnection[name].disconnect()
      }
      socketConnection[name] = new SocketConnection(classType, url)
      return socketConnection[name]
    }

    const disconnect = (name: string) => {
      socketConnection[name].disconnect()
      delete socketConnection[name]
    }

    const getConnection = (name: string) => socketConnection[name]

    const disconnectAll = () => {
      for (const name in socketConnection) {
        disconnect(name)
      }
    }

    return { config, connect, disconnect, getConnection, disconnectAll }
  },
}

export default socket
