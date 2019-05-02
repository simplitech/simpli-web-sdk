[simpli-web-sdk](../README.md) > [InputText](../classes/inputtext.md)

# Class: InputText

## Hierarchy

 `object` & `object` & `Vue`<`this`>

**↳ InputText**

## Index

### Properties

* [inputClass](inputtext.md#inputclass)
* [label](inputtext.md#label)
* [mask](inputtext.md#mask)
* [maskPreset](inputtext.md#maskpreset)
* [masked](inputtext.md#masked)
* [preset](inputtext.md#preset)
* [required](inputtext.md#required)
* [selectall](inputtext.md#selectall)
* [tokens](inputtext.md#tokens)
* [type](inputtext.md#type)
* [value](inputtext.md#value)

### Accessors

* [attrs](inputtext.md#attrs)
* [computedModel](inputtext.md#computedmodel)
* [innerClass](inputtext.md#innerclass)
* [input](inputtext.md#input)
* [listeners](inputtext.md#listeners)
* [vBind](inputtext.md#vbind)
* [vOn](inputtext.md#von)

### Methods

* [blurEvent](inputtext.md#blurevent)
* [created](inputtext.md#created)
* [focusEvent](inputtext.md#focusevent)
* [maskPresetEvent](inputtext.md#maskpresetevent)
* [addPreset](inputtext.md#addpreset)

---

## Properties

<a id="inputclass"></a>

### `<Optional>` inputClass

**● inputClass**: *`undefined` \| `string`*

*Defined in [components/input/InputText.ts:90](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L90)*

___
<a id="label"></a>

### `<Optional>` label

**● label**: *`undefined` \| `string`*

*Defined in [components/input/InputText.ts:78](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L78)*

___
<a id="mask"></a>

### `<Optional>` mask

**● mask**: *`string` \| `string`[]*

*Defined in [components/input/InputText.ts:96](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L96)*

___
<a id="maskpreset"></a>

### `<Optional>` maskPreset

**● maskPreset**: *`undefined` \| `string`*

*Defined in [components/input/InputText.ts:93](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L93)*

___
<a id="masked"></a>

### `<Optional>` masked

**● masked**: *`undefined` \| `false` \| `true`*

*Defined in [components/input/InputText.ts:99](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L99)*

___
<a id="preset"></a>

###  preset

**● preset**: *[MaskPresetConfig](maskpresetconfig.md)* =  new class extends MaskPresetConfig {
    mask = []
  }()

*Defined in [components/input/InputText.ts:104](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L104)*

___
<a id="required"></a>

### `<Optional>` required

**● required**: *`undefined` \| `false` \| `true`*

*Defined in [components/input/InputText.ts:84](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L84)*

___
<a id="selectall"></a>

### `<Optional>` selectall

**● selectall**: *`undefined` \| `false` \| `true`*

*Defined in [components/input/InputText.ts:87](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L87)*

___
<a id="tokens"></a>

### `<Optional>` tokens

**● tokens**: *`any`*

*Defined in [components/input/InputText.ts:102](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L102)*

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Defined in [components/input/InputText.ts:81](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L81)*

___
<a id="value"></a>

###  value

**● value**: *[InputType](../#inputtype)*

*Defined in [components/input/InputText.ts:75](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L75)*

___

## Accessors

<a id="attrs"></a>

###  attrs

**get attrs**(): `object`

*Defined in [components/input/InputText.ts:137](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L137)*

**Returns:** `object`

___
<a id="computedmodel"></a>

###  computedModel

**get computedModel**(): [InputType](../#inputtype)

**set computedModel**(input: *[InputType](../#inputtype)*): `void`

*Defined in [components/input/InputText.ts:176](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L176)*

**Returns:** [InputType](../#inputtype)

*Defined in [components/input/InputText.ts:183](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L183)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | [InputType](../#inputtype) |

**Returns:** `void`

___
<a id="innerclass"></a>

###  innerClass

**get innerClass**(): `string`

*Defined in [components/input/InputText.ts:170](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L170)*

**Returns:** `string`

___
<a id="input"></a>

###  input

**get input**(): `null` \| `string` \| `number`

**set input**(val: *[InputType](../#inputtype)*): `void`

*Defined in [components/input/InputText.ts:194](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L194)*

**Returns:** `null` \| `string` \| `number`

*Defined in [components/input/InputText.ts:201](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L201)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | [InputType](../#inputtype) |

**Returns:** `void`

___
<a id="listeners"></a>

###  listeners

**get listeners**(): `object`

*Defined in [components/input/InputText.ts:141](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L141)*

**Returns:** `object`

___
<a id="vbind"></a>

###  vBind

**get vBind**(): `object`

*Defined in [components/input/InputText.ts:147](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L147)*

**Returns:** `object`

___
<a id="von"></a>

###  vOn

**get vOn**(): `object`

*Defined in [components/input/InputText.ts:165](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L165)*

**Returns:** `object`

___

## Methods

<a id="blurevent"></a>

###  blurEvent

▸ **blurEvent**(): `void`

*Defined in [components/input/InputText.ts:223](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L223)*

**Returns:** `void`

___
<a id="created"></a>

###  created

▸ **created**(): `void`

*Defined in [components/input/InputText.ts:209](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L209)*

**Returns:** `void`

___
<a id="focusevent"></a>

###  focusEvent

▸ **focusEvent**(): `void`

*Defined in [components/input/InputText.ts:217](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L217)*

**Returns:** `void`

___
<a id="maskpresetevent"></a>

###  maskPresetEvent

▸ **maskPresetEvent**(val: *`string` \| `undefined`*): `void`

*Defined in [components/input/InputText.ts:124](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L124)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `string` \| `undefined` |

**Returns:** `void`

___
<a id="addpreset"></a>

### `<Static>` addPreset

▸ **addPreset**(name: *`string`*, maskPreset: *[ClassType](../#classtype)<[MaskPresetConfig](maskpresetconfig.md)>*): `void`

*Defined in [components/input/InputText.ts:119](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/input/InputText.ts#L119)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| maskPreset | [ClassType](../#classtype)<[MaskPresetConfig](maskpresetconfig.md)> |

**Returns:** `void`

___

