[simpli-web-sdk](../README.md) > [Modal](../classes/modal.md)

# Class: Modal

## Hierarchy

 `object` & `object` & `Vue`<`this`>

**↳ Modal**

## Index

### Properties

* [backgroundEffect](modal.md#backgroundeffect)
* [body](modal.md#body)
* [bodyOverflowY](modal.md#bodyoverflowy)
* [closable](modal.md#closable)
* [closeOutside](modal.md#closeoutside)
* [effect](modal.md#effect)
* [innerClass](modal.md#innerclass)
* [name](modal.md#name)
* [open](modal.md#open)
* [state](modal.md#state)
* [title](modal.md#title)

### Methods

* [beforeMount](modal.md#beforemount)
* [closeAction](modal.md#closeaction)
* [closeFromView](modal.md#closefromview)
* [openAction](modal.md#openaction)
* [openEvent](modal.md#openevent)
* [stateEvent](modal.md#stateevent)

---

## Properties

<a id="backgroundeffect"></a>

### `<Optional>` backgroundEffect

**● backgroundEffect**: *`undefined` \| `string`*

*Defined in [components/utils/Modal.ts:81](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L81)*

___
<a id="body"></a>

###  body

**● body**: *`HTMLElement` \| `null`* =  null

*Defined in [components/utils/Modal.ts:99](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L99)*

___
<a id="bodyoverflowy"></a>

###  bodyOverflowY

**● bodyOverflowY**: *`string` \| `null`* =  null

*Defined in [components/utils/Modal.ts:100](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L100)*

___
<a id="closable"></a>

### `<Optional>` closable

**● closable**: *`undefined` \| `false` \| `true`*

*Defined in [components/utils/Modal.ts:84](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L84)*

___
<a id="closeoutside"></a>

### `<Optional>` closeOutside

**● closeOutside**: *`undefined` \| `false` \| `true`*

*Defined in [components/utils/Modal.ts:87](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L87)*

___
<a id="effect"></a>

### `<Optional>` effect

**● effect**: *`undefined` \| `string`*

*Defined in [components/utils/Modal.ts:78](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L78)*

___
<a id="innerclass"></a>

### `<Optional>` innerClass

**● innerClass**: *`undefined` \| `string`*

*Defined in [components/utils/Modal.ts:75](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L75)*

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`undefined` \| `string`*

*Defined in [components/utils/Modal.ts:69](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L69)*

___
<a id="open"></a>

### `<Optional>` open

**● open**: *`any`*

*Defined in [components/utils/Modal.ts:90](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L90)*

___
<a id="state"></a>

###  state

**● state**: *`State`* =  State.HIDDEN

*Defined in [components/utils/Modal.ts:92](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L92)*

___
<a id="title"></a>

### `<Optional>` title

**● title**: *`undefined` \| `string`*

*Defined in [components/utils/Modal.ts:72](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L72)*

___

## Methods

<a id="beforemount"></a>

###  beforeMount

▸ **beforeMount**(): `void`

*Defined in [components/utils/Modal.ts:137](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L137)*

**Returns:** `void`

___
<a id="closeaction"></a>

###  closeAction

▸ **closeAction**(force?: *`boolean`*): `void`

*Defined in [components/utils/Modal.ts:124](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L124)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` force | `boolean` | false |

**Returns:** `void`

___
<a id="closefromview"></a>

###  closeFromView

▸ **closeFromView**(e: *`Event`*): `void`

*Defined in [components/utils/Modal.ts:131](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L131)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `Event` |

**Returns:** `void`

___
<a id="openaction"></a>

###  openAction

▸ **openAction**(payload: *`any`*): `void`

*Defined in [components/utils/Modal.ts:119](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L119)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| payload | `any` |

**Returns:** `void`

___
<a id="openevent"></a>

###  openEvent

▸ **openEvent**(val: *`any`*): `void`

*Defined in [components/utils/Modal.ts:103](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L103)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `any` |

**Returns:** `void`

___
<a id="stateevent"></a>

###  stateEvent

▸ **stateEvent**(val: *`State`*): `void`

*Defined in [components/utils/Modal.ts:111](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/components/utils/Modal.ts#L111)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `State` |

**Returns:** `void`

___

