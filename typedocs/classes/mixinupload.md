[simpli-web-sdk](../README.md) > [MixinUpload](../classes/mixinupload.md)

# Class: MixinUpload

This class should be used as an extended class Use whenever it is necessary to use the upload system

## Hierarchy

 `object` & `object` & `Vue`<`this`>

**↳ MixinUpload**

## Index

### Properties

* [COMPRESS_CONFIG](mixinupload.md#compress_config)
* [CROPPER_REF](mixinupload.md#cropper_ref)
* [UPLOAD_CONFIG](mixinupload.md#upload_config)
* [UPLOAD_REF](mixinupload.md#upload_ref)
* [USE_CROP](mixinupload.md#use_crop)
* [cache](mixinupload.md#cache)
* [cropper](mixinupload.md#cropper)
* [files](mixinupload.md#files)
* [shown](mixinupload.md#shown)

### Accessors

* [fileError](mixinupload.md#fileerror)
* [isCompleted](mixinupload.md#iscompleted)
* [isCropperMode](mixinupload.md#iscroppermode)
* [resources](mixinupload.md#resources)

### Methods

* [compressImage](mixinupload.md#compressimage)
* [exitCropperMode](mixinupload.md#exitcroppermode)
* [extension](mixinupload.md#extension)
* [inputFile](mixinupload.md#inputfile)
* [inputFilter](mixinupload.md#inputfilter)
* [onUploadEnd](mixinupload.md#onuploadend)
* [onUploadReady](mixinupload.md#onuploadready)
* [onUploadStart](mixinupload.md#onuploadstart)
* [removeUploadFile](mixinupload.md#removeuploadfile)
* [resetUpload](mixinupload.md#resetupload)
* [startUpload](mixinupload.md#startupload)
* [triggerEvent](mixinupload.md#triggerevent)
* [validate](mixinupload.md#validate)

---

## Properties

<a id="compress_config"></a>

###  COMPRESS_CONFIG

**● COMPRESS_CONFIG**: *`Options`* =  UploadConfig.compressedImageStandard

*Defined in [components/mixins/MixinUpload.ts:24](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L24)*

___
<a id="cropper_ref"></a>

###  CROPPER_REF

**● CROPPER_REF**: *`string`* = "cropper"

*Defined in [components/mixins/MixinUpload.ts:20](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L20)*

___
<a id="upload_config"></a>

###  UPLOAD_CONFIG

**● UPLOAD_CONFIG**: *[UploadConfig](uploadconfig.md)* =  new UploadConfig()

*Defined in [components/mixins/MixinUpload.ts:23](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L23)*

___
<a id="upload_ref"></a>

###  UPLOAD_REF

**● UPLOAD_REF**: *`string`* = "upload"

*Defined in [components/mixins/MixinUpload.ts:19](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L19)*

___
<a id="use_crop"></a>

###  USE_CROP

**● USE_CROP**: *`boolean`* = false

*Defined in [components/mixins/MixinUpload.ts:25](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L25)*

___
<a id="cache"></a>

###  cache

**● cache**: *`string`[]* =  []

*Defined in [components/mixins/MixinUpload.ts:28](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L28)*

___
<a id="cropper"></a>

###  cropper

**● cropper**: *`Cropper` \| `null`* =  null

*Defined in [components/mixins/MixinUpload.ts:30](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L30)*

___
<a id="files"></a>

###  files

**● files**: *[FileObject](../interfaces/fileobject.md)[]* =  []

*Defined in [components/mixins/MixinUpload.ts:27](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L27)*

___
<a id="shown"></a>

###  shown

**● shown**: *`boolean`* = false

*Defined in [components/mixins/MixinUpload.ts:32](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L32)*

___

## Accessors

<a id="fileerror"></a>

###  fileError

**get fileError**(): `string` \| `false`

*Defined in [components/mixins/MixinUpload.ts:81](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L81)*

**Returns:** `string` \| `false`

___
<a id="iscompleted"></a>

###  isCompleted

**get isCompleted**(): `number` \| `false`

*Defined in [components/mixins/MixinUpload.ts:91](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L91)*

**Returns:** `number` \| `false`

___
<a id="iscroppermode"></a>

###  isCropperMode

**get isCropperMode**(): `boolean`

*Defined in [components/mixins/MixinUpload.ts:101](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L101)*

**Returns:** `boolean`

___
<a id="resources"></a>

###  resources

**get resources**(): `Promise`<`AxiosResponse`<`string`>>[]

*Defined in [components/mixins/MixinUpload.ts:70](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L70)*

**Returns:** `Promise`<`AxiosResponse`<`string`>>[]

___

## Methods

<a id="compressimage"></a>

###  compressImage

▸ **compressImage**(newFile: *[FileObject](../interfaces/fileobject.md)*): `Promise`<`void`>

*Defined in [components/mixins/MixinUpload.ts:178](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L178)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| newFile | [FileObject](../interfaces/fileobject.md) |

**Returns:** `Promise`<`void`>

___
<a id="exitcroppermode"></a>

###  exitCropperMode

▸ **exitCropperMode**(): `void`

*Defined in [components/mixins/MixinUpload.ts:246](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L246)*

**Returns:** `void`

___
<a id="extension"></a>

###  extension

▸ **extension**(file: *[FileObject](../interfaces/fileobject.md)*): `string`

*Defined in [components/mixins/MixinUpload.ts:60](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| file | [FileObject](../interfaces/fileobject.md) |

**Returns:** `string`

___
<a id="inputfile"></a>

###  inputFile

▸ **inputFile**(newFile: *[FileObject](../interfaces/fileobject.md)*, oldFile: *[FileObject](../interfaces/fileobject.md)*): `Promise`<`void`>

*Defined in [components/mixins/MixinUpload.ts:136](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L136)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| newFile | [FileObject](../interfaces/fileobject.md) |
| oldFile | [FileObject](../interfaces/fileobject.md) |

**Returns:** `Promise`<`void`>

___
<a id="inputfilter"></a>

###  inputFilter

▸ **inputFilter**(newFile: *[FileObject](../interfaces/fileobject.md)*, oldFile: *[FileObject](../interfaces/fileobject.md)*, prevent: *`Function`*): `Promise`<`any`>

*Defined in [components/mixins/MixinUpload.ts:105](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L105)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| newFile | [FileObject](../interfaces/fileobject.md) |
| oldFile | [FileObject](../interfaces/fileobject.md) |
| prevent | `Function` |

**Returns:** `Promise`<`any`>

___
<a id="onuploadend"></a>

###  onUploadEnd

▸ **onUploadEnd**(urls: *`string`[]*): `void`

*Defined in [components/mixins/MixinUpload.ts:56](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L56)*

Event when the upload ends Do nothing unless it is implemented by the child

**Parameters:**

| Name | Type |
| ------ | ------ |
| urls | `string`[] |

**Returns:** `void`

___
<a id="onuploadready"></a>

###  onUploadReady

▸ **onUploadReady**(): `void`

*Defined in [components/mixins/MixinUpload.ts:40](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L40)*

Event when the upload inputs a file Do nothing unless it is implemented by the child

**Returns:** `void`

___
<a id="onuploadstart"></a>

###  onUploadStart

▸ **onUploadStart**(): `void`

*Defined in [components/mixins/MixinUpload.ts:48](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L48)*

Event when the upload starts Do nothing unless it is implemented by the child

**Returns:** `void`

___
<a id="removeuploadfile"></a>

###  removeUploadFile

▸ **removeUploadFile**(file: *[FileObject](../interfaces/fileobject.md)*): `void`

*Defined in [components/mixins/MixinUpload.ts:239](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L239)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| file | [FileObject](../interfaces/fileobject.md) |

**Returns:** `void`

___
<a id="resetupload"></a>

###  resetUpload

▸ **resetUpload**(): `void`

*Defined in [components/mixins/MixinUpload.ts:250](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L250)*

**Returns:** `void`

___
<a id="startupload"></a>

###  startUpload

▸ **startUpload**(): `Promise`<`void`>

*Defined in [components/mixins/MixinUpload.ts:208](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L208)*

**Returns:** `Promise`<`void`>

___
<a id="triggerevent"></a>

###  triggerEvent

▸ **triggerEvent**(): `Promise`<`void`>

*Defined in [components/mixins/MixinUpload.ts:256](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L256)*

**Returns:** `Promise`<`void`>

___
<a id="validate"></a>

###  validate

▸ **validate**(): `void`

*Defined in [components/mixins/MixinUpload.ts:199](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/mixins/MixinUpload.ts#L199)*

**Returns:** `void`

___

