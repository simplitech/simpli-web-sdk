[simpli-web-sdk](../README.md) > [ZipcodeMaskPreset](../classes/zipcodemaskpreset.md)

# Class: ZipcodeMaskPreset

## Hierarchy

 [MaskPresetConfig](maskpresetconfig.md)

**↳ ZipcodeMaskPreset**

## Index

### Properties

* [isValid](zipcodemaskpreset.md#isvalid)
* [masked](zipcodemaskpreset.md#masked)
* [tokens](zipcodemaskpreset.md#tokens)
* [value](zipcodemaskpreset.md#value)

### Accessors

* [mask](zipcodemaskpreset.md#mask)

### Methods

* [getterTransform](zipcodemaskpreset.md#gettertransform)
* [setterTransform](zipcodemaskpreset.md#settertransform)

---

## Properties

<a id="isvalid"></a>

###  isValid

**● isValid**: *`boolean` \| `null`* =  null

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[isValid](maskpresetconfig.md#isvalid)*

*Defined in [app/config/MaskPresetConfig.ts:9](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/MaskPresetConfig.ts#L9)*

___
<a id="masked"></a>

### `<Optional>` masked

**● masked**: *`undefined` \| `false` \| `true`*

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[masked](maskpresetconfig.md#masked)*

*Defined in [app/config/MaskPresetConfig.ts:6](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/MaskPresetConfig.ts#L6)*

___
<a id="tokens"></a>

### `<Optional>` tokens

**● tokens**: *[Dictionary](../interfaces/dictionary.md)<[MaskToken](../interfaces/masktoken.md)>*

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[tokens](maskpresetconfig.md#tokens)*

*Defined in [app/config/MaskPresetConfig.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/MaskPresetConfig.ts#L7)*

___
<a id="value"></a>

###  value

**● value**: *`string` \| `null`* =  null

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[value](maskpresetconfig.md#value)*

*Defined in [app/config/MaskPresetConfig.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/MaskPresetConfig.ts#L10)*

___

## Accessors

<a id="mask"></a>

###  mask

**get mask**(): `string` \| `string`[]

*Overrides [MaskPresetConfig](maskpresetconfig.md).[mask](maskpresetconfig.md#mask)*

*Defined in [app/preset/ZipcodeMaskPreset.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/preset/ZipcodeMaskPreset.ts#L7)*

**Returns:** `string` \| `string`[]

___

## Methods

<a id="gettertransform"></a>

###  getterTransform

▸ **getterTransform**(input: *[InputType](../#inputtype)*): `null` \| `string` \| `number`

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[getterTransform](maskpresetconfig.md#gettertransform)*

*Defined in [app/config/MaskPresetConfig.ts:12](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/MaskPresetConfig.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | [InputType](../#inputtype) |

**Returns:** `null` \| `string` \| `number`

___
<a id="settertransform"></a>

###  setterTransform

▸ **setterTransform**(input: *[InputType](../#inputtype)*): [InputType](../#inputtype) \| `undefined`

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[setterTransform](maskpresetconfig.md#settertransform)*

*Defined in [app/config/MaskPresetConfig.ts:16](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/MaskPresetConfig.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | [InputType](../#inputtype) |

**Returns:** [InputType](../#inputtype) \| `undefined`

___

