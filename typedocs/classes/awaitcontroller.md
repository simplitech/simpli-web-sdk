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

*Defined in [components/utils/Await.ts:43](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/utils/Await.ts#L43)*

___
<a id="defaultspinnercolor"></a>

###  defaultSpinnerColor

**● defaultSpinnerColor**: *`string`* = "#42b983"

*Defined in [components/utils/Await.ts:44](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/utils/Await.ts#L44)*

___
<a id="defaultspinnerpadding"></a>

###  defaultSpinnerPadding

**● defaultSpinnerPadding**: *`string`* = "10px"

*Defined in [components/utils/Await.ts:45](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/utils/Await.ts#L45)*

___
<a id="defaultspinnerscale"></a>

###  defaultSpinnerScale

**● defaultSpinnerScale**: *`number`* = 1

*Defined in [components/utils/Await.ts:46](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/utils/Await.ts#L46)*

___
<a id="defaulttransition"></a>

###  defaultTransition

**● defaultTransition**: *`string` \| `null`* =  null

*Defined in [components/utils/Await.ts:42](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/utils/Await.ts#L42)*

___
<a id="loaders"></a>

###  loaders

**● loaders**: *[Loader](../interfaces/loader.md)*

*Defined in [components/utils/Await.ts:48](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/utils/Await.ts#L48)*

___

## Methods

<a id="addloader"></a>

###  addLoader

▸ **addLoader**(name: *`string`*, component: *[CP](../#cp)*): `void`

*Defined in [components/utils/Await.ts:50](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/utils/Await.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| component | [CP](../#cp) |

**Returns:** `void`

___
<a id="done"></a>

###  done

▸ **done**(name?: *`undefined` \| `string`*): `void`

*Defined in [components/utils/Await.ts:57](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/utils/Await.ts#L57)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` name | `undefined` \| `string` |

**Returns:** `void`

___
<a id="error"></a>

###  error

▸ **error**(name?: *`undefined` \| `string`*): `void`

*Defined in [components/utils/Await.ts:60](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/utils/Await.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` name | `undefined` \| `string` |

**Returns:** `void`

___
<a id="init"></a>

###  init

▸ **init**(name?: *`undefined` \| `string`*): `void`

*Defined in [components/utils/Await.ts:54](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/utils/Await.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` name | `undefined` \| `string` |

**Returns:** `void`

___
<a id="run"></a>

###  run

▸ **run**<`T`>(name: *`string`*, func: *`function`*, delay?: *`undefined` \| `number`*): `Promise`<`T`>

*Defined in [components/utils/Await.ts:64](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/utils/Await.ts#L64)*

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

