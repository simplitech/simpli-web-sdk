[simpli-web-sdk](../README.md) > [SocketConnection](../classes/socketconnection.md)

# Class: SocketConnection

## Type parameters
#### T 
## Hierarchy

**SocketConnection**

## Index

### Constructors

* [constructor](socketconnection.md#constructor)

### Properties

* [classType](socketconnection.md#classtype)
* [socket](socketconnection.md#socket)

### Methods

* [disconnect](socketconnection.md#disconnect)
* [onClose](socketconnection.md#onclose)
* [onClosePromise](socketconnection.md#onclosepromise)
* [onData](socketconnection.md#ondata)
* [onDataPromise](socketconnection.md#ondatapromise)
* [onError](socketconnection.md#onerror)
* [onErrorPromise](socketconnection.md#onerrorpromise)
* [onOpen](socketconnection.md#onopen)
* [onOpenPromise](socketconnection.md#onopenpromise)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SocketConnection**(classType: *[ClassType](../#classtype)<`T`>*, url: *`string`*): [SocketConnection](socketconnection.md)

*Defined in [app/socket/SocketConnection.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| classType | [ClassType](../#classtype)<`T`> |
| url | `string` |

**Returns:** [SocketConnection](socketconnection.md)

___

## Properties

<a id="classtype"></a>

###  classType

**● classType**: *[ClassType](../#classtype)<`T`>*

*Defined in [app/socket/SocketConnection.ts:6](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L6)*

___
<a id="socket"></a>

###  socket

**● socket**: *`WebSocket`*

*Defined in [app/socket/SocketConnection.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L7)*

___

## Methods

<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Defined in [app/socket/SocketConnection.ts:20](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L20)*

**Returns:** `void`

___
<a id="onclose"></a>

###  onClose

▸ **onClose**(callback: *`function`*): `void`

*Defined in [app/socket/SocketConnection.ts:30](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="onclosepromise"></a>

###  onClosePromise

▸ **onClosePromise**(): `Promise`<`void`>

*Defined in [app/socket/SocketConnection.ts:64](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L64)*

**Returns:** `Promise`<`void`>

___
<a id="ondata"></a>

###  onData

▸ **onData**(callback: *`function`*): `void`

*Defined in [app/socket/SocketConnection.ts:42](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L42)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="ondatapromise"></a>

###  onDataPromise

▸ **onDataPromise**(): `Promise`<`void`>

*Defined in [app/socket/SocketConnection.ts:80](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L80)*

**Returns:** `Promise`<`void`>

___
<a id="onerror"></a>

###  onError

▸ **onError**(callback: *`function`*): `void`

*Defined in [app/socket/SocketConnection.ts:36](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="onerrorpromise"></a>

###  onErrorPromise

▸ **onErrorPromise**(): `Promise`<`void`>

*Defined in [app/socket/SocketConnection.ts:72](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L72)*

**Returns:** `Promise`<`void`>

___
<a id="onopen"></a>

###  onOpen

▸ **onOpen**(callback: *`function`*): `void`

*Defined in [app/socket/SocketConnection.ts:24](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="onopenpromise"></a>

###  onOpenPromise

▸ **onOpenPromise**(): `Promise`<`void`>

*Defined in [app/socket/SocketConnection.ts:56](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/socket/SocketConnection.ts#L56)*

**Returns:** `Promise`<`void`>

___

