# Socket Connections

There are two ways to use socket connection in `simpli-web-sdk`:

- Using the prototype [$](../typedocs/classes/_.md)
- Using the [SocketConnection](../typedocs/classes/socketconnection.md) class

Before to connect a Web Socket, you have to configure it by using the `socket` static variable.

Get more details in [SocketStatic](../typedocs/interfaces/socketstatic.md) and [SocketInstance](../typedocs/interfaces/socketinstance.md).

## Configuration

```typescript
import Simpli, {socket} from 'simpli-web-sdk'  

Simpli.socket = socket.create({  
  baseURL: 'path/to/base/url',  
})

Simpli.install()
```

## Using the prototype [$](../typedocs/classes/_.md)

```typescript
import {$} from 'simpli-web-sdk'  
import {Notification} from '@/model/Notification'  

function onLogin(id: number, token: string) {
  const connection = $.socket.connect('notification', `/user/notification/${token}`, Notification)

  connection.onOpen(() => console.info(`Socket connection with client id=${id} established`))
  connection.onClose(() => console.info(`Socket connection with client id=${id} lost`))
  connection.onError(() => console.error(`Error with socket connection(client id=${id})`))
}

function someFunction() {
  const connection = $.socket.getConnection('notification')

  connection.onData((resp: Notification) => console.log(resp))
}

function onLogout() {
  $.socket.disconnect('notification')
}
```

## Using the [SocketConnection](../typedocs/classes/socketconnection.md) class

```typescript
import {$, SocketConnection} from 'simpli-web-sdk'  
import {Notification} from '@/model/Notification'  

let connection: SocketConnection | null = null

function onLogin(id: number, token: string) {
  connection = new SocketConnection(`/user/notification/${token}`).as(Notification)

  connection.onOpen(() => console.info(`Socket connection with client id=${id} established`))
  connection.onClose(() => console.info(`Socket connection with client id=${id} lost`))
  connection.onError(() => console.error(`Error with socket connection(client id=${id})`))
}

function someFunction() {
  if (connection) {
    connection.onData((resp: Notification) => console.log(resp))
  }
}

function onLogout() {
  if (connection) {
    connection.disconnect()
    connection = null
  }
}
```

## Next Topic
[Models](./models.md)
