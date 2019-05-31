[simpli-web-sdk](../README.md) > [InputSelect](../classes/inputselect.md)

# Class: InputSelect

## Hierarchy

 `object` & `object` & `Vue`<`this`>

**↳ InputSelect**

## Index

### Properties

* [deselectLabel](inputselect.md#deselectlabel)
* [disabled](inputselect.md#disabled)
* [emptyResource](inputselect.md#emptyresource)
* [idKey](inputselect.md#idkey)
* [inputClass](inputselect.md#inputclass)
* [items](inputselect.md#items)
* [label](inputselect.md#label)
* [model](inputselect.md#model)
* [noOptionsLabel](inputselect.md#nooptionslabel)
* [noResultLabel](inputselect.md#noresultlabel)
* [options](inputselect.md#options)
* [placeholder](inputselect.md#placeholder)
* [required](inputselect.md#required)
* [selectLabel](inputselect.md#selectlabel)
* [selectedLabel](inputselect.md#selectedlabel)
* [tagKey](inputselect.md#tagkey)
* [tagPlaceholder](inputselect.md#tagplaceholder)
* [taggable](inputselect.md#taggable)
* [value](inputselect.md#value)

### Accessors

* [computedModel](inputselect.md#computedmodel)
* [isCloseOnSelect](inputselect.md#iscloseonselect)
* [isDisabled](inputselect.md#isdisabled)
* [isHideSelected](inputselect.md#ishideselected)
* [isMultiple](inputselect.md#ismultiple)
* [isMultipleNotTaggable](inputselect.md#ismultiplenottaggable)
* [isTaggable](inputselect.md#istaggable)
* [vBind](inputselect.md#vbind)
* [vOn](inputselect.md#von)

### Methods

* [itemsEvent](inputselect.md#itemsevent)
* [removeEvent](inputselect.md#removeevent)
* [tagEvent](inputselect.md#tagevent)
* [valueEvent](inputselect.md#valueevent)

---

## Properties

<a id="deselectlabel"></a>

###  deselectLabel

**● deselectLabel**: *`string`*

*Defined in [components/input/InputSelect.ts:88](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L88)*

___
<a id="disabled"></a>

### `<Optional>` disabled

**● disabled**: *`undefined` \| `false` \| `true`*

*Defined in [components/input/InputSelect.ts:61](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L61)*

___
<a id="emptyresource"></a>

###  emptyResource

**● emptyResource**: *[IResource](../interfaces/iresource.md)* =  build(0, '')

*Defined in [components/input/InputSelect.ts:96](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L96)*

___
<a id="idkey"></a>

###  idKey

**● idKey**: *`string`*

*Defined in [components/input/InputSelect.ts:64](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L64)*

___
<a id="inputclass"></a>

### `<Optional>` inputClass

**● inputClass**: *`undefined` \| `string`*

*Defined in [components/input/InputSelect.ts:55](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L55)*

___
<a id="items"></a>

###  items

**● items**: *`InputItems`*

*Defined in [components/input/InputSelect.ts:70](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L70)*

___
<a id="label"></a>

### `<Optional>` label

**● label**: *`undefined` \| `string`*

*Defined in [components/input/InputSelect.ts:49](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L49)*

___
<a id="model"></a>

###  model

**● model**: *[IResource](../interfaces/iresource.md) \| [IResource](../interfaces/iresource.md)[]* =  []

*Defined in [components/input/InputSelect.ts:98](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L98)*

___
<a id="nooptionslabel"></a>

###  noOptionsLabel

**● noOptionsLabel**: *`string` \| `null`*

*Defined in [components/input/InputSelect.ts:94](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L94)*

___
<a id="noresultlabel"></a>

###  noResultLabel

**● noResultLabel**: *`string` \| `null`*

*Defined in [components/input/InputSelect.ts:91](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L91)*

___
<a id="options"></a>

###  options

**● options**: *`InputItems`* =  []

*Defined in [components/input/InputSelect.ts:99](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L99)*

___
<a id="placeholder"></a>

###  placeholder

**● placeholder**: *`string`*

*Defined in [components/input/InputSelect.ts:76](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L76)*

___
<a id="required"></a>

### `<Optional>` required

**● required**: *`undefined` \| `false` \| `true`*

*Defined in [components/input/InputSelect.ts:58](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L58)*

___
<a id="selectlabel"></a>

###  selectLabel

**● selectLabel**: *`string`*

*Defined in [components/input/InputSelect.ts:82](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L82)*

___
<a id="selectedlabel"></a>

###  selectedLabel

**● selectedLabel**: *`string`*

*Defined in [components/input/InputSelect.ts:85](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L85)*

___
<a id="tagkey"></a>

###  tagKey

**● tagKey**: *`string`*

*Defined in [components/input/InputSelect.ts:67](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L67)*

___
<a id="tagplaceholder"></a>

###  tagPlaceholder

**● tagPlaceholder**: *`string`*

*Defined in [components/input/InputSelect.ts:79](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L79)*

___
<a id="taggable"></a>

### `<Optional>` taggable

**● taggable**: *`undefined` \| `false` \| `true`*

*Defined in [components/input/InputSelect.ts:73](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L73)*

___
<a id="value"></a>

### `<Optional>` value

**● value**: *`InputModel`*

*Defined in [components/input/InputSelect.ts:52](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L52)*

___

## Accessors

<a id="computedmodel"></a>

###  computedModel

**get computedModel**(): `null` \| [IResource](../interfaces/iresource.md) \| [IResource](../interfaces/iresource.md)[]

**set computedModel**(val: *`InputModel`*): `void`

*Defined in [components/input/InputSelect.ts:127](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L127)*

**Returns:** `null` \| [IResource](../interfaces/iresource.md) \| [IResource](../interfaces/iresource.md)[]

*Defined in [components/input/InputSelect.ts:144](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L144)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `InputModel` |

**Returns:** `void`

___
<a id="iscloseonselect"></a>

###  isCloseOnSelect

**get isCloseOnSelect**(): `boolean`

*Defined in [components/input/InputSelect.ts:183](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L183)*

**Returns:** `boolean`

___
<a id="isdisabled"></a>

###  isDisabled

**get isDisabled**(): `boolean`

*Defined in [components/input/InputSelect.ts:179](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L179)*

**Returns:** `boolean`

___
<a id="ishideselected"></a>

###  isHideSelected

**get isHideSelected**(): `boolean`

*Defined in [components/input/InputSelect.ts:187](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L187)*

**Returns:** `boolean`

___
<a id="ismultiple"></a>

###  isMultiple

**get isMultiple**(): `boolean`

*Defined in [components/input/InputSelect.ts:167](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L167)*

**Returns:** `boolean`

___
<a id="ismultiplenottaggable"></a>

###  isMultipleNotTaggable

**get isMultipleNotTaggable**(): `boolean`

*Defined in [components/input/InputSelect.ts:171](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L171)*

**Returns:** `boolean`

___
<a id="istaggable"></a>

###  isTaggable

**get isTaggable**(): `boolean`

*Defined in [components/input/InputSelect.ts:175](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L175)*

**Returns:** `boolean`

___
<a id="vbind"></a>

###  vBind

**get vBind**(): `object`

*Defined in [components/input/InputSelect.ts:117](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L117)*

**Returns:** `object`

___
<a id="von"></a>

###  vOn

**get vOn**(): `object`

*Defined in [components/input/InputSelect.ts:121](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L121)*

**Returns:** `object`

___

## Methods

<a id="itemsevent"></a>

###  itemsEvent

▸ **itemsEvent**(val: *`InputItems`*): `void`

*Defined in [components/input/InputSelect.ts:111](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L111)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `InputItems` |

**Returns:** `void`

___
<a id="removeevent"></a>

###  removeEvent

▸ **removeEvent**(val: *[IResource](../interfaces/iresource.md)*): `void`

*Defined in [components/input/InputSelect.ts:208](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L208)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | [IResource](../interfaces/iresource.md) |

**Returns:** `void`

___
<a id="tagevent"></a>

###  tagEvent

▸ **tagEvent**(val: *`string`*): `void`

*Defined in [components/input/InputSelect.ts:191](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L191)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `string` |

**Returns:** `void`

___
<a id="valueevent"></a>

###  valueEvent

▸ **valueEvent**(val: *`InputItems`*): `void`

*Defined in [components/input/InputSelect.ts:102](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/components/input/InputSelect.ts#L102)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `InputItems` |

**Returns:** `void`

___

