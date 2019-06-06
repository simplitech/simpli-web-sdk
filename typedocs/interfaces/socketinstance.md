[simpli-web-sdk](../README.md) > [SocketInstance](../interfaces/socketinstance.md)

# Interface: SocketInstance

## Hierarchy

**SocketInstance**

## Index

### Properties

* [config](socketinstance.md#config)
* [connect](socketinstance.md#connect)
* [disconnect](socketinstance.md#disconnect)
* [disconnectAll](socketinstance.md#disconnectall)
* [getConnection](socketinstance.md#getconnection)

---

## Properties

<a id="config"></a>

###  config

**● config**: *[SocketConfig](socketconfig.md)*

*Defined in [interfaces/socket.interface.ts:13](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/socket.interface.ts#L13)*

___
<a id="connect"></a>

###  connect

**● connect**: *`function`*

*Defined in [interfaces/socket.interface.ts:14](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/socket.interface.ts#L14)*

#### Type declaration
▸<`T`>(name: *`string`*, url: *`string`*, classType?: *[ClassType](../#classtype)<`T`>*): [SocketConnection](../classes/socketconnection.md)<`T`>

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| url | `string` |
| `Optional` classType | [ClassType](../#classtype)<`T`> |

**Returns:** [SocketConnection](../classes/socketconnection.md)<`T`>

___
<a id="disconnect"></a>

###  disconnect

**● disconnect**: *`function`*

*Defined in [interfaces/socket.interface.ts:15](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/socket.interface.ts#L15)*

#### Type declaration
▸(name: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `void`

___
<a id="disconnectall"></a>

###  disconnectAll

**● disconnectAll**: *`function`*

*Defined in [interfaces/socket.interface.ts:17](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/socket.interface.ts#L17)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="getconnection"></a>

###  getConnection

**● getConnection**: *`function`*

*Defined in [interfaces/socket.interface.ts:16](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/socket.interface.ts#L16)*

#### Type declaration
▸<`T`>(name: *`string`*): [SocketConnection](../classes/socketconnection.md)<`T`> \| `null`

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [SocketConnection](../classes/socketconnection.md)<`T`> \| `null`

___

