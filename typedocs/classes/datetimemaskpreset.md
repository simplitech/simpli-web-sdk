[simpli-web-sdk](../README.md) > [DatetimeMaskPreset](../classes/datetimemaskpreset.md)

# Class: DatetimeMaskPreset

## Hierarchy

 [MaskPresetConfig](maskpresetconfig.md)

**↳ DatetimeMaskPreset**

## Index

### Properties

* [isDatetime](datetimemaskpreset.md#isdatetime)
* [isValid](datetimemaskpreset.md#isvalid)
* [masked](datetimemaskpreset.md#masked)
* [tokens](datetimemaskpreset.md#tokens)
* [value](datetimemaskpreset.md#value)

### Accessors

* [mask](datetimemaskpreset.md#mask)

### Methods

* [getterTransform](datetimemaskpreset.md#gettertransform)
* [setterTransform](datetimemaskpreset.md#settertransform)

---

## Properties

<a id="isdatetime"></a>

###  isDatetime

**● isDatetime**: *`boolean` \| `null`* =  null

*Defined in [app/preset/DatetimeMaskPreset.ts:14](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/preset/DatetimeMaskPreset.ts#L14)*

___
<a id="isvalid"></a>

###  isValid

**● isValid**: *`boolean` \| `null`* =  null

*Inherited from [MaskPresetConfig](maskpresetconfig.md).[isValid](maskpresetconfig.md#isvalid)*

*Defined in [app/config/MaskPresetConfig.ts:9](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/MaskPresetConfig.ts#L9)*

___
<a id="masked"></a>

###  masked

**● masked**: *`boolean`* = true

*Overrides [MaskPresetConfig](maskpresetconfig.md).[masked](maskpresetconfig.md#masked)*

*Defined in [app/preset/DatetimeMaskPreset.ts:12](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/preset/DatetimeMaskPreset.ts#L12)*

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

*Defined in [app/preset/DatetimeMaskPreset.ts:8](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/preset/DatetimeMaskPreset.ts#L8)*

**Returns:** `string` \| `string`[]

___

## Methods

<a id="gettertransform"></a>

###  getterTransform

▸ **getterTransform**(input: *[InputType](../#inputtype)*): `null` \| `string`

*Overrides [MaskPresetConfig](maskpresetconfig.md).[getterTransform](maskpresetconfig.md#gettertransform)*

*Defined in [app/preset/DatetimeMaskPreset.ts:16](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/preset/DatetimeMaskPreset.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | [InputType](../#inputtype) |

**Returns:** `null` \| `string`

___
<a id="settertransform"></a>

###  setterTransform

▸ **setterTransform**(input: *[InputType](../#inputtype)*): `undefined` \| `null` \| `string`

*Overrides [MaskPresetConfig](maskpresetconfig.md).[setterTransform](maskpresetconfig.md#settertransform)*

*Defined in [app/preset/DatetimeMaskPreset.ts:28](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/preset/DatetimeMaskPreset.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | [InputType](../#inputtype) |

**Returns:** `undefined` \| `null` \| `string`

___

