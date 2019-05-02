[simpli-web-sdk](../README.md) > [CpfMaskPreset](../classes/cpfmaskpreset.md)

# Class: CpfMaskPreset

## Hierarchy

 [MaskPresetConfig](maskpresetconfig.md)

**↳ CpfMaskPreset**

## Index

### Properties

* [isValid](cpfmaskpreset.md#isvalid)
* [masked](cpfmaskpreset.md#masked)
* [tokens](cpfmaskpreset.md#tokens)
* [value](cpfmaskpreset.md#value)

### Accessors

* [mask](cpfmaskpreset.md#mask)

### Methods

* [getterTransform](cpfmaskpreset.md#gettertransform)
* [setterTransform](cpfmaskpreset.md#settertransform)

---

## Properties

<a id="isvalid"></a>

###  isValid

**● isValid**: *`boolean` \| `null`* =  null

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[isValid](maskpresetconfig.md#isvalid)*

*Defined in [app/config/MaskPresetConfig.ts:9](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/config/MaskPresetConfig.ts#L9)*

___
<a id="masked"></a>

### `<Optional>` masked

**● masked**: *`undefined` \| `false` \| `true`*

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[masked](maskpresetconfig.md#masked)*

*Defined in [app/config/MaskPresetConfig.ts:6](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/config/MaskPresetConfig.ts#L6)*

___
<a id="tokens"></a>

### `<Optional>` tokens

**● tokens**: *[Dictionary](../interfaces/dictionary.md)<[MaskToken](../interfaces/masktoken.md)>*

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[tokens](maskpresetconfig.md#tokens)*

*Defined in [app/config/MaskPresetConfig.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/config/MaskPresetConfig.ts#L7)*

___
<a id="value"></a>

###  value

**● value**: *`string` \| `null`* =  null

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[value](maskpresetconfig.md#value)*

*Defined in [app/config/MaskPresetConfig.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/config/MaskPresetConfig.ts#L10)*

___

## Accessors

<a id="mask"></a>

###  mask

**get mask**(): `string` \| `string`[]

*Overrides [MaskPresetConfig](maskpresetconfig.md).[mask](maskpresetconfig.md#mask)*

*Defined in [app/preset/CpfMaskPreset.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/preset/CpfMaskPreset.ts#L7)*

**Returns:** `string` \| `string`[]

___

## Methods

<a id="gettertransform"></a>

###  getterTransform

▸ **getterTransform**(input: *[InputType](../#inputtype)*): `null` \| `string` \| `number`

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[getterTransform](maskpresetconfig.md#gettertransform)*

*Defined in [app/config/MaskPresetConfig.ts:12](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/config/MaskPresetConfig.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | [InputType](../#inputtype) |

**Returns:** `null` \| `string` \| `number`

___
<a id="settertransform"></a>

###  setterTransform

▸ **setterTransform**(input: *[InputType](../#inputtype)*): `null` \| `string`

*Overrides [MaskPresetConfig](maskpresetconfig.md).[setterTransform](maskpresetconfig.md#settertransform)*

*Defined in [app/preset/CpfMaskPreset.ts:11](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/preset/CpfMaskPreset.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | [InputType](../#inputtype) |

**Returns:** `null` \| `string`

___

