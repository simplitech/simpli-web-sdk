[simpli-web-sdk](../README.md) > [AwaitController](../classes/awaitcontroller.md)

# Class: AwaitController

## Hierarchy

**AwaitController**

## Index

### Properties

* [defaultSpinner](awaitcontroller.md#defaultspinner)
* [defaultSpinnerColor](awaitcontroller.md#defaultspinnercolor)
* [defaultSpinnerPadding](awaitcontroller.md#defaultspinnerpadding)
* [defaultSpinnerScale](awaitcontroller.md#defaultspinnerscale)
* [defaultTransition](awaitcontroller.md#defaulttransition)
* [loaders](awaitcontroller.md#loaders)

### Methods

* [addLoader](awaitcontroller.md#addloader)
* [done](awaitcontroller.md#done)
* [error](awaitcontroller.md#error)
* [init](awaitcontroller.md#init)
* [run](awaitcontroller.md#run)

---

## Properties

<a id="defaultspinner"></a>

###  defaultSpinner

**● defaultSpinner**: *`string` \| `null`* =  null

*Defined in [components/utils/Await.ts:50](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Await.ts#L50)*

___
<a id="defaultspinnercolor"></a>

###  defaultSpinnerColor

**● defaultSpinnerColor**: *`string`* = "#42b983"

*Defined in [components/utils/Await.ts:51](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Await.ts#L51)*

___
<a id="defaultspinnerpadding"></a>

###  defaultSpinnerPadding

**● defaultSpinnerPadding**: *`string`* = "10px"

*Defined in [components/utils/Await.ts:52](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Await.ts#L52)*

___
<a id="defaultspinnerscale"></a>

###  defaultSpinnerScale

**● defaultSpinnerScale**: *`number`* = 1

*Defined in [components/utils/Await.ts:53](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Await.ts#L53)*

___
<a id="defaulttransition"></a>

###  defaultTransition

**● defaultTransition**: *`string` \| `null`* =  null

*Defined in [components/utils/Await.ts:49](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Await.ts#L49)*

___
<a id="loaders"></a>

###  loaders

**● loaders**: *[Dictionary](../interfaces/dictionary.md)<`CP`>*

*Defined in [components/utils/Await.ts:55](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Await.ts#L55)*

___

## Methods

<a id="addloader"></a>

###  addLoader

▸ **addLoader**(name: *`string`*, component: *`CP`*): `void`

*Defined in [components/utils/Await.ts:57](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Await.ts#L57)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| component | `CP` |

**Returns:** `void`

___
<a id="done"></a>

###  done

▸ **done**(name?: *`undefined` \| `string`*): `void`

*Defined in [components/utils/Await.ts:64](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Await.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` name | `undefined` \| `string` |

**Returns:** `void`

___
<a id="error"></a>

###  error

▸ **error**(name?: *`undefined` \| `string`*): `void`

*Defined in [components/utils/Await.ts:67](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Await.ts#L67)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` name | `undefined` \| `string` |

**Returns:** `void`

___
<a id="init"></a>

###  init

▸ **init**(name?: *`undefined` \| `string`*): `void`

*Defined in [components/utils/Await.ts:61](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Await.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` name | `undefined` \| `string` |

**Returns:** `void`

___
<a id="run"></a>

###  run

▸ **run**<`T`>(name: *`string`*, func: *`function`*, delay?: *`undefined` \| `number`*): `Promise`<`T`>

*Defined in [components/utils/Await.ts:71](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Await.ts#L71)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| func | `function` |
| `Optional` delay | `undefined` \| `number` |

**Returns:** `Promise`<`T`>

___

