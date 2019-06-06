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

* [as](socketconnection.md#as)
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

⊕ **new SocketConnection**(url: *`string`*): [SocketConnection](socketconnection.md)

*Defined in [app/socket/SocketConnection.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** [SocketConnection](socketconnection.md)

___

## Properties

<a id="classtype"></a>

### `<Optional>` classType

**● classType**: *[ClassType](../#classtype)<`T`>*

*Defined in [app/socket/SocketConnection.ts:6](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L6)*

___
<a id="socket"></a>

###  socket

**● socket**: *`WebSocket`*

*Defined in [app/socket/SocketConnection.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L7)*

___

## Methods

<a id="as"></a>

###  as

▸ **as**(classType: *[ClassType](../#classtype)<`T`>*): `this`

*Defined in [app/socket/SocketConnection.ts:18](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| classType | [ClassType](../#classtype)<`T`> |

**Returns:** `this`

___
<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `void`

*Defined in [app/socket/SocketConnection.ts:23](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L23)*

**Returns:** `void`

___
<a id="onclose"></a>

###  onClose

▸ **onClose**(callback: *`function`*): `void`

*Defined in [app/socket/SocketConnection.ts:33](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="onclosepromise"></a>

###  onClosePromise

▸ **onClosePromise**(): `Promise`<`void`>

*Defined in [app/socket/SocketConnection.ts:67](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L67)*

**Returns:** `Promise`<`void`>

___
<a id="ondata"></a>

###  onData

▸ **onData**(callback: *`function`*): `void`

*Defined in [app/socket/SocketConnection.ts:45](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L45)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="ondatapromise"></a>

###  onDataPromise

▸ **onDataPromise**(): `Promise`<`void`>

*Defined in [app/socket/SocketConnection.ts:83](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L83)*

**Returns:** `Promise`<`void`>

___
<a id="onerror"></a>

###  onError

▸ **onError**(callback: *`function`*): `void`

*Defined in [app/socket/SocketConnection.ts:39](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="onerrorpromise"></a>

###  onErrorPromise

▸ **onErrorPromise**(): `Promise`<`void`>

*Defined in [app/socket/SocketConnection.ts:75](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L75)*

**Returns:** `Promise`<`void`>

___
<a id="onopen"></a>

###  onOpen

▸ **onOpen**(callback: *`function`*): `void`

*Defined in [app/socket/SocketConnection.ts:27](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="onopenpromise"></a>

###  onOpenPromise

▸ **onOpenPromise**(): `Promise`<`void`>

*Defined in [app/socket/SocketConnection.ts:59](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/socket/SocketConnection.ts#L59)*

**Returns:** `Promise`<`void`>

___

