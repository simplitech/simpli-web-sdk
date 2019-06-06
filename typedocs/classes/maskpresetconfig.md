[simpli-web-sdk](../README.md) > [MaskPresetConfig](../classes/maskpresetconfig.md)

# Class: MaskPresetConfig

## Hierarchy

**MaskPresetConfig**

↳  [CnpjMaskPreset](cnpjmaskpreset.md)

↳  [CpfCnpjMaskPreset](cpfcnpjmaskpreset.md)

↳  [CpfMaskPreset](cpfmaskpreset.md)

↳  [DateMaskPreset](datemaskpreset.md)

↳  [DatetimeMaskPreset](datetimemaskpreset.md)

↳  [PhoneMaskPreset](phonemaskpreset.md)

↳  [RgMaskPreset](rgmaskpreset.md)

↳  [ZipcodeMaskPreset](zipcodemaskpreset.md)

## Index

### Properties

* [isValid](maskpresetconfig.md#isvalid)
* [mask](maskpresetconfig.md#mask)
* [masked](maskpresetconfig.md#masked)
* [tokens](maskpresetconfig.md#tokens)
* [value](maskpresetconfig.md#value)

### Methods

* [getterTransform](maskpresetconfig.md#gettertransform)
* [setterTransform](maskpresetconfig.md#settertransform)

---

## Properties

<a id="isvalid"></a>

###  isValid

**● isValid**: *`boolean` \| `null`* =  null

*Defined in [app/config/MaskPresetConfig.ts:9](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/config/MaskPresetConfig.ts#L9)*

___
<a id="mask"></a>

### `<Abstract>` mask

**● mask**: *`string` \| `string`[]*

*Defined in [app/config/MaskPresetConfig.ts:5](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/config/MaskPresetConfig.ts#L5)*

___
<a id="masked"></a>

### `<Optional>` masked

**● masked**: *`undefined` \| `false` \| `true`*

*Defined in [app/config/MaskPresetConfig.ts:6](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/config/MaskPresetConfig.ts#L6)*

___
<a id="tokens"></a>

### `<Optional>` tokens

**● tokens**: *[Dictionary](../interfaces/dictionary.md)<[MaskToken](../interfaces/masktoken.md)>*

*Defined in [app/config/MaskPresetConfig.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/config/MaskPresetConfig.ts#L7)*

___
<a id="value"></a>

###  value

**● value**: *`string` \| `null`* =  null

*Defined in [app/config/MaskPresetConfig.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/config/MaskPresetConfig.ts#L10)*

___

## Methods

<a id="gettertransform"></a>

###  getterTransform

▸ **getterTransform**(input: *[InputType](../#inputtype)*): `null` \| `string` \| `number`

*Defined in [app/config/MaskPresetConfig.ts:12](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/config/MaskPresetConfig.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | [InputType](../#inputtype) |

**Returns:** `null` \| `string` \| `number`

___
<a id="settertransform"></a>

###  setterTransform

▸ **setterTransform**(input: *[InputType](../#inputtype)*): [InputType](../#inputtype) \| `undefined`

*Defined in [app/config/MaskPresetConfig.ts:16](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/config/MaskPresetConfig.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | [InputType](../#inputtype) |

**Returns:** [InputType](../#inputtype) \| `undefined`

___

