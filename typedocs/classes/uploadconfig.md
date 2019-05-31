[simpli-web-sdk](../README.md) > [UploadConfig](../classes/uploadconfig.md)

# Class: UploadConfig

## Hierarchy

**UploadConfig**

## Index

### Constructors

* [constructor](uploadconfig.md#constructor)

### Properties

* [accept](uploadconfig.md#accept)
* [addIndex](uploadconfig.md#addindex)
* [data](uploadconfig.md#data)
* [directory](uploadconfig.md#directory)
* [drop](uploadconfig.md#drop)
* [dropDirectory](uploadconfig.md#dropdirectory)
* [endpoint](uploadconfig.md#endpoint)
* [extensions](uploadconfig.md#extensions)
* [headers](uploadconfig.md#headers)
* [maximum](uploadconfig.md#maximum)
* [minSize](uploadconfig.md#minsize)
* [multiple](uploadconfig.md#multiple)
* [size](uploadconfig.md#size)
* [thread](uploadconfig.md#thread)
* [timeout](uploadconfig.md#timeout)

### Object literals

* [compressedImageAvatar](uploadconfig.md#compressedimageavatar)
* [compressedImageStandard](uploadconfig.md#compressedimagestandard)
* [compressedImageThumb](uploadconfig.md#compressedimagethumb)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UploadConfig**(maximum?: *`undefined` \| `number`*): [UploadConfig](uploadconfig.md)

*Defined in [app/config/UploadConfig.ts:41](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` maximum | `undefined` \| `number` |

**Returns:** [UploadConfig](uploadconfig.md)

___

## Properties

<a id="accept"></a>

### `<Optional>` accept

**● accept**: *`undefined` \| `string`*

*Defined in [app/config/UploadConfig.ts:28](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L28)*

___
<a id="addindex"></a>

###  addIndex

**● addIndex**: *`boolean`* = false

*Defined in [app/config/UploadConfig.ts:38](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L38)*

___
<a id="data"></a>

###  data

**● data**: *`any`*

*Defined in [app/config/UploadConfig.ts:40](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L40)*

___
<a id="directory"></a>

###  directory

**● directory**: *`boolean`* = false

*Defined in [app/config/UploadConfig.ts:35](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L35)*

___
<a id="drop"></a>

###  drop

**● drop**: *`boolean`* = true

*Defined in [app/config/UploadConfig.ts:36](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L36)*

___
<a id="dropdirectory"></a>

###  dropDirectory

**● dropDirectory**: *`boolean`* = true

*Defined in [app/config/UploadConfig.ts:37](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L37)*

___
<a id="endpoint"></a>

###  endpoint

**● endpoint**: *`string`* = "/upload"

*Defined in [app/config/UploadConfig.ts:27](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L27)*

___
<a id="extensions"></a>

### `<Optional>` extensions

**● extensions**: *`string`[] \| `String` \| `RegExp`*

*Defined in [app/config/UploadConfig.ts:29](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L29)*

___
<a id="headers"></a>

###  headers

**● headers**: *[Dictionary](../interfaces/dictionary.md)<`String`>*

*Defined in [app/config/UploadConfig.ts:41](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L41)*

___
<a id="maximum"></a>

###  maximum

**● maximum**: *`number`* = 0

*Defined in [app/config/UploadConfig.ts:33](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L33)*

___
<a id="minsize"></a>

###  minSize

**● minSize**: *`number`* = 0

*Defined in [app/config/UploadConfig.ts:30](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L30)*

___
<a id="multiple"></a>

###  multiple

**● multiple**: *`boolean`* = true

*Defined in [app/config/UploadConfig.ts:34](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L34)*

___
<a id="size"></a>

###  size

**● size**: *`number`* =  3 * Byte.MEGA

*Defined in [app/config/UploadConfig.ts:31](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L31)*

___
<a id="thread"></a>

###  thread

**● thread**: *`number`* = 1

*Defined in [app/config/UploadConfig.ts:39](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L39)*

___
<a id="timeout"></a>

###  timeout

**● timeout**: *`number`* = 0

*Defined in [app/config/UploadConfig.ts:32](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L32)*

___

## Object literals

<a id="compressedimageavatar"></a>

### `<Static>` compressedImageAvatar

**compressedImageAvatar**: *`object`*

*Defined in [app/config/UploadConfig.ts:13](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L13)*

<a id="compressedimageavatar.convertsize"></a>

####  convertSize

**● convertSize**: *`number`* = 0

*Defined in [app/config/UploadConfig.ts:14](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L14)*

___
<a id="compressedimageavatar.height"></a>

####  height

**● height**: *`number`* = 720

*Defined in [app/config/UploadConfig.ts:16](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L16)*

___
<a id="compressedimageavatar.quality"></a>

####  quality

**● quality**: *`number`* = 0.8

*Defined in [app/config/UploadConfig.ts:17](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L17)*

___
<a id="compressedimageavatar.width"></a>

####  width

**● width**: *`number`* = 720

*Defined in [app/config/UploadConfig.ts:15](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L15)*

___

___
<a id="compressedimagestandard"></a>

### `<Static>` compressedImageStandard

**compressedImageStandard**: *`object`*

*Defined in [app/config/UploadConfig.ts:6](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L6)*

<a id="compressedimagestandard.convertsize-1"></a>

####  convertSize

**● convertSize**: *`number`* = 0

*Defined in [app/config/UploadConfig.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L7)*

___
<a id="compressedimagestandard.height-1"></a>

####  height

**● height**: *`number`* = 720

*Defined in [app/config/UploadConfig.ts:9](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L9)*

___
<a id="compressedimagestandard.quality-1"></a>

####  quality

**● quality**: *`number`* = 0.8

*Defined in [app/config/UploadConfig.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L10)*

___
<a id="compressedimagestandard.width-1"></a>

####  width

**● width**: *`number`* = 1280

*Defined in [app/config/UploadConfig.ts:8](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L8)*

___

___
<a id="compressedimagethumb"></a>

### `<Static>` compressedImageThumb

**compressedImageThumb**: *`object`*

*Defined in [app/config/UploadConfig.ts:20](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L20)*

<a id="compressedimagethumb.convertsize-2"></a>

####  convertSize

**● convertSize**: *`number`* = 0

*Defined in [app/config/UploadConfig.ts:21](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L21)*

___
<a id="compressedimagethumb.height-2"></a>

####  height

**● height**: *`number`* = 180

*Defined in [app/config/UploadConfig.ts:23](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L23)*

___
<a id="compressedimagethumb.quality-2"></a>

####  quality

**● quality**: *`number`* = 0.7

*Defined in [app/config/UploadConfig.ts:24](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L24)*

___
<a id="compressedimagethumb.width-2"></a>

####  width

**● width**: *`number`* = 320

*Defined in [app/config/UploadConfig.ts:22](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/config/UploadConfig.ts#L22)*

___

___

