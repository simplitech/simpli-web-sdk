
#  simpli-web-sdk

## Index

### Enumerations

* [Byte](enums/byte.md)
* [Currency](enums/currency.md)
* [FileFormat](enums/fileformat.md)
* [HttpStatus](enums/httpstatus.md)
* [Lang](enums/lang.md)

### Classes

* [$](classes/_.md)
* [AdapOrderby](classes/adaporderby.md)
* [AdapPagination](classes/adappagination.md)
* [AdapSearchfield](classes/adapsearchfield.md)
* [AjvController](classes/ajvcontroller.md)
* [AjvI18n](classes/ajvi18n.md)
* [AjvType](classes/ajvtype.md)
* [Await](classes/await.md)
* [AwaitController](classes/awaitcontroller.md)
* [CnpjMaskPreset](classes/cnpjmaskpreset.md)
* [Collection](classes/collection.md)
* [CpfCnpjMaskPreset](classes/cpfcnpjmaskpreset.md)
* [CpfMaskPreset](classes/cpfmaskpreset.md)
* [DateMaskPreset](classes/datemaskpreset.md)
* [DatetimeMaskPreset](classes/datetimemaskpreset.md)
* [DefaultConfig](classes/defaultconfig.md)
* [EnumCollection](classes/enumcollection.md)
* [InputCheckbox](classes/inputcheckbox.md)
* [InputSelect](classes/inputselect.md)
* [InputText](classes/inputtext.md)
* [MaskPresetConfig](classes/maskpresetconfig.md)
* [MixinQueryRouter](classes/mixinqueryrouter.md)
* [MixinUpload](classes/mixinupload.md)
* [Modal](classes/modal.md)
* [ModalController](classes/modalcontroller.md)
* [Model](classes/model.md)
* [PageCollection](classes/pagecollection.md)
* [PhoneMaskPreset](classes/phonemaskpreset.md)
* [Render](classes/render.md)
* [RenderAnchor](classes/renderanchor.md)
* [RenderImage](classes/renderimage.md)
* [RenderSchema](classes/renderschema.md)
* [Request](classes/request.md)
* [Resource](classes/resource.md)
* [ResourceCollection](classes/resourcecollection.md)
* [Response](classes/response.md)
* [RgMaskPreset](classes/rgmaskpreset.md)
* [Schema](classes/schema.md)
* [SchemaBuilder](classes/schemabuilder.md)
* [Simpli](classes/simpli.md)
* [SocketConnection](classes/socketconnection.md)
* [Tip](classes/tip.md)
* [TipController](classes/tipcontroller.md)
* [ToastConfig](classes/toastconfig.md)
* [UploadConfig](classes/uploadconfig.md)
* [ZipcodeMaskPreset](classes/zipcodemaskpreset.md)

### Interfaces

* [$Prototype](interfaces/_prototype.md)
* [ComponentOptions](interfaces/componentoptions.md)
* [DataBlueprint](interfaces/datablueprint.md)
* [Dictionary](interfaces/dictionary.md)
* [DictionaryOfValidation](interfaces/dictionaryofvalidation.md)
* [FieldComponent](interfaces/fieldcomponent.md)
* [FieldSet](interfaces/fieldset.md)
* [FileObject](interfaces/fileobject.md)
* [FilterOptions](interfaces/filteroptions.md)
* [IResource](interfaces/iresource.md)
* [IResourceCollection](interfaces/iresourcecollection.md)
* [ISchema](interfaces/ischema.md)
* [LocaleOptions](interfaces/localeoptions.md)
* [MaskToken](interfaces/masktoken.md)
* [QueryRouter](interfaces/queryrouter.md)
* [ResourceAction](interfaces/resourceaction.md)
* [ResourceActionConfig](interfaces/resourceactionconfig.md)
* [SchemaResult](interfaces/schemaresult.md)
* [SchemaSet](interfaces/schemaset.md)
* [SocketConfig](interfaces/socketconfig.md)
* [SocketInstance](interfaces/socketinstance.md)
* [SocketStatic](interfaces/socketstatic.md)
* [ValidationArray](interfaces/validationarray.md)
* [ValidationNumber](interfaces/validationnumber.md)
* [ValidationString](interfaces/validationstring.md)

### Type aliases

* [ClassType](#classtype)
* [EnumType](#enumtype)
* [FieldContent](#fieldcontent)
* [FieldController](#fieldcontroller)
* [FieldData](#fielddata)
* [FieldValidation](#fieldvalidation)
* [ID](#id)
* [InputType](#inputtype)
* [NormalizedItem](#normalizeditem)
* [QueryFilter](#queryfilter)
* [ResponseType](#responsetype)
* [TAG](#tag)

### Variables

* [classToClass](#classtoclass)
* [classToClassFromExist](#classtoclassfromexist)
* [classToPlain](#classtoplain)
* [classToPlainFromExist](#classtoplainfromexist)
* [deserialize](#deserialize)
* [deserializeArray](#deserializearray)
* [plainToClass](#plaintoclass)
* [plainToClassFromExist](#plaintoclassfromexist)
* [serialize](#serialize)

### Functions

* [HttpExclude](#httpexclude)
* [HttpExpose](#httpexpose)
* [RequestExclude](#requestexclude)
* [RequestExpose](#requestexpose)
* [ResponseExclude](#responseexclude)
* [ResponseExpose](#responseexpose)
* [ResponseSerialize](#responseserialize)
* [abort](#abort)
* [addResource](#addresource)
* [allWithPlaceholder](#allwithplaceholder)
* [appendResource](#appendresource)
* [bool](#bool)
* [buildResource](#buildresource)
* [clone](#clone)
* [cnpj](#cnpj)
* [copyToClipboard](#copytoclipboard)
* [cpf](#cpf)
* [cpfOrCnpj](#cpforcnpj)
* [createCsvFile](#createcsvfile)
* [csvToData](#csvtodata)
* [csvToNormalizedData](#csvtonormalizeddata)
* [date](#date)
* [datetime](#datetime)
* [error](#error)
* [errorAndPush](#errorandpush)
* [errorValidation](#errorvalidation)
* [getManyResource](#getmanyresource)
* [getResource](#getresource)
* [historyBack](#historyback)
* [info](#info)
* [infoAndPush](#infoandpush)
* [listObject](#listobject)
* [normalizeData](#normalizedata)
* [openUrl](#openurl)
* [pad](#pad)
* [phone](#phone)
* [prependResource](#prependresource)
* [push](#push)
* [pushByName](#pushbyname)
* [removeDelimiters](#removedelimiters)
* [removeResource](#removeresource)
* [rg](#rg)
* [sleep](#sleep)
* [success](#success)
* [successAndPush](#successandpush)
* [time](#time)
* [toString](#tostring)
* [truncate](#truncate)
* [uid](#uid)
* [warning](#warning)
* [warningAndPush](#warningandpush)
* [zipcode](#zipcode)

---

## Type aliases

<a id="classtype"></a>

###  ClassType

**Ƭ ClassType**: *`object`*

*Defined in [interfaces/general.interface.ts:1](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/general.interface.ts#L1)*

#### Type declaration

___
<a id="enumtype"></a>

###  EnumType

**Ƭ EnumType**: *`Record`<`keyof E`, `number` \| `string`> & `object`*

*Defined in [interfaces/general.interface.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/general.interface.ts#L7)*

___
<a id="fieldcontent"></a>

###  FieldContent

**Ƭ FieldContent**: *[FieldComponent](interfaces/fieldcomponent.md) \| [FieldData](#fielddata)*

*Defined in [interfaces/schema.interface.ts:25](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/schema.interface.ts#L25)*

___
<a id="fieldcontroller"></a>

###  FieldController

**Ƭ FieldController**: *`function`*

*Defined in [interfaces/schema.interface.ts:23](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/schema.interface.ts#L23)*

#### Type declaration
▸(schema: *[SchemaResult](interfaces/schemaresult.md)<`M`>*): [FieldContent](#fieldcontent)

**Parameters:**

| Name | Type |
| ------ | ------ |
| schema | [SchemaResult](interfaces/schemaresult.md)<`M`> |

**Returns:** [FieldContent](#fieldcontent)

___
<a id="fielddata"></a>

###  FieldData

**Ƭ FieldData**: *`string` \| `number` \| `null`*

*Defined in [interfaces/schema.interface.ts:27](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/schema.interface.ts#L27)*

___
<a id="fieldvalidation"></a>

###  FieldValidation

**Ƭ FieldValidation**: *`FieldValidation<V>`*

*Defined in [interfaces/schema.interface.ts:37](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/schema.interface.ts#L37)*

___
<a id="id"></a>

###  ID

**Ƭ ID**: *`number` \| `string`*

*Defined in [interfaces/resource.interface.ts:3](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/resource.interface.ts#L3)*

___
<a id="inputtype"></a>

###  InputType

**Ƭ InputType**: *`string` \| `number` \| `null`*

*Defined in [interfaces/general.interface.ts:9](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/general.interface.ts#L9)*

___
<a id="normalizeditem"></a>

###  NormalizedItem

**Ƭ NormalizedItem**: *`Record`<`keyof B`, `string`> & `object`*

*Defined in [interfaces/general.interface.ts:34](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/general.interface.ts#L34)*

___
<a id="queryfilter"></a>

###  QueryFilter

**Ƭ QueryFilter**: *[Dictionary](interfaces/dictionary.md)<`any`>*

*Defined in [interfaces/general.interface.ts:15](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/general.interface.ts#L15)*

___
<a id="responsetype"></a>

###  ResponseType

**Ƭ ResponseType**: *[ClassType](#classtype)<`T`> \| `T`*

*Defined in [interfaces/general.interface.ts:5](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/general.interface.ts#L5)*

___
<a id="tag"></a>

###  TAG

**Ƭ TAG**: *`string`*

*Defined in [interfaces/resource.interface.ts:5](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/interfaces/resource.interface.ts#L5)*

___

## Variables

<a id="classtoclass"></a>

### `<Const>` classToClass

**● classToClass**: *`classToClass`* =  ClassTransformer.classToClass

*Defined in [helpers/transform.helper.ts:30](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/transform.helper.ts#L30)*

Converts class (constructor) object to new class (constructor) object. Also works with arrays.

___
<a id="classtoclassfromexist"></a>

### `<Const>` classToClassFromExist

**● classToClassFromExist**: *`classToClassFromExist`* =  ClassTransformer.classToClassFromExist

*Defined in [helpers/transform.helper.ts:37](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/transform.helper.ts#L37)*

Converts class (constructor) object to plain (literal) object. Uses given plain object as source object (it means fills given plain object with data from class object). Also works with arrays.

___
<a id="classtoplain"></a>

### `<Const>` classToPlain

**● classToPlain**: *`classToPlain`* =  ClassTransformer.classToPlain

*Defined in [helpers/transform.helper.ts:6](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/transform.helper.ts#L6)*

Converts class (constructor) object to plain (literal) object. Also works with arrays.

___
<a id="classtoplainfromexist"></a>

### `<Const>` classToPlainFromExist

**● classToPlainFromExist**: *`classToPlainFromExist`* =  ClassTransformer.classToPlainFromExist

*Defined in [helpers/transform.helper.ts:13](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/transform.helper.ts#L13)*

Converts class (constructor) object to plain (literal) object. Uses given plain object as source object (it means fills given plain object with data from class object). Also works with arrays.

___
<a id="deserialize"></a>

### `<Const>` deserialize

**● deserialize**: *`deserialize`* =  ClassTransformer.deserialize

*Defined in [helpers/transform.helper.ts:47](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/transform.helper.ts#L47)*

Deserializes given JSON string to a object of the given class.

___
<a id="deserializearray"></a>

### `<Const>` deserializeArray

**● deserializeArray**: *`deserializeArray`* =  ClassTransformer.deserializeArray

*Defined in [helpers/transform.helper.ts:52](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/transform.helper.ts#L52)*

Deserializes given JSON string to an array of objects of the given class.

___
<a id="plaintoclass"></a>

### `<Const>` plainToClass

**● plainToClass**: *`plainToClass`* =  ClassTransformer.plainToClass

*Defined in [helpers/transform.helper.ts:18](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/transform.helper.ts#L18)*

Converts plain (literal) object to class (constructor) object. Also works with arrays.

___
<a id="plaintoclassfromexist"></a>

### `<Const>` plainToClassFromExist

**● plainToClassFromExist**: *`plainToClassFromExist`* =  ClassTransformer.plainToClassFromExist

*Defined in [helpers/transform.helper.ts:25](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/transform.helper.ts#L25)*

Converts plain (literal) object to class (constructor) object. Uses given object as source object (it means fills given object with data from plain object). Also works with arrays.

___
<a id="serialize"></a>

### `<Const>` serialize

**● serialize**: *`serialize`* =  ClassTransformer.serialize

*Defined in [helpers/transform.helper.ts:42](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/transform.helper.ts#L42)*

Serializes given object to a JSON string.

___

## Functions

<a id="httpexclude"></a>

###  HttpExclude

▸ **HttpExclude**(): `function`

*Defined in [decorators/http.decorator.ts:27](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/decorators/http.decorator.ts#L27)*

**Returns:** `function`

___
<a id="httpexpose"></a>

###  HttpExpose

▸ **HttpExpose**(name?: *`undefined` \| `string`*): `function`

*Defined in [decorators/http.decorator.ts:15](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/decorators/http.decorator.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` name | `undefined` \| `string` |

**Returns:** `function`

___
<a id="requestexclude"></a>

###  RequestExclude

▸ **RequestExclude**(): `function`

*Defined in [decorators/http.decorator.ts:19](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/decorators/http.decorator.ts#L19)*

**Returns:** `function`

___
<a id="requestexpose"></a>

###  RequestExpose

▸ **RequestExpose**(name?: *`undefined` \| `string`*): `function`

*Defined in [decorators/http.decorator.ts:11](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/decorators/http.decorator.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` name | `undefined` \| `string` |

**Returns:** `function`

___
<a id="responseexclude"></a>

###  ResponseExclude

▸ **ResponseExclude**(): `function`

*Defined in [decorators/http.decorator.ts:23](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/decorators/http.decorator.ts#L23)*

**Returns:** `function`

___
<a id="responseexpose"></a>

###  ResponseExpose

▸ **ResponseExpose**(name?: *`undefined` \| `string`*): `function`

*Defined in [decorators/http.decorator.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/decorators/http.decorator.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` name | `undefined` \| `string` |

**Returns:** `function`

___
<a id="responseserialize"></a>

###  ResponseSerialize

▸ **ResponseSerialize**(func: *`Function`*): `function`

*Defined in [decorators/http.decorator.ts:3](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/decorators/http.decorator.ts#L3)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| func | `Function` |

**Returns:** `function`

___
<a id="abort"></a>

###  abort

▸ **abort**(body: *`string`*, title?: *`undefined` \| `string`*, useI18n?: *`boolean`*, config?: *`SnotifyToastConfig`*): `void`

*Defined in [helpers/toast.helper.ts:41](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/toast.helper.ts#L41)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `string` | - |
| `Optional` title | `undefined` \| `string` | - |
| `Default value` useI18n | `boolean` | true |
| `Default value` config | `SnotifyToastConfig` |  {} |

**Returns:** `void`

___
<a id="addresource"></a>

###  addResource

▸ **addResource**<`R`>(list: *`Array`<`R` \| [IResource](interfaces/iresource.md)>*, item: *`R` \| [IResource](interfaces/iresource.md)*, index?: *`undefined` \| `number`*): `void`

*Defined in [helpers/resource.helper.ts:43](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/resource.helper.ts#L43)*

**Type parameters:**

#### R :  [Resource](classes/resource.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `Array`<`R` \| [IResource](interfaces/iresource.md)> |
| item | `R` \| [IResource](interfaces/iresource.md) |
| `Optional` index | `undefined` \| `number` |

**Returns:** `void`

___
<a id="allwithplaceholder"></a>

###  allWithPlaceholder

▸ **allWithPlaceholder**<`R`>(list: *`Array`<`R` \| [IResource](interfaces/iresource.md)>*, placeholder?: *`string` \| `null`*): `Array`<`R` \| [IResource](interfaces/iresource.md) \| `null`>

*Defined in [helpers/resource.helper.ts:5](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/resource.helper.ts#L5)*

**Type parameters:**

#### R :  [Resource](classes/resource.md)
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| list | `Array`<`R` \| [IResource](interfaces/iresource.md)> | - |
| `Default value` placeholder | `string` \| `null` |  null |

**Returns:** `Array`<`R` \| [IResource](interfaces/iresource.md) \| `null`>

___
<a id="appendresource"></a>

###  appendResource

▸ **appendResource**<`R`>(list: *`Array`<`R` \| [IResource](interfaces/iresource.md)>*, item: *`R` \| [IResource](interfaces/iresource.md)*): `Array`<`R` \| [IResource](interfaces/iresource.md)>

*Defined in [helpers/resource.helper.ts:35](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/resource.helper.ts#L35)*

**Type parameters:**

#### R :  [Resource](classes/resource.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `Array`<`R` \| [IResource](interfaces/iresource.md)> |
| item | `R` \| [IResource](interfaces/iresource.md) |

**Returns:** `Array`<`R` \| [IResource](interfaces/iresource.md)>

___
<a id="bool"></a>

###  bool

▸ **bool**(val?: *`boolean` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:8](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `boolean` \| `null` |

**Returns:** `string`

___
<a id="buildresource"></a>

###  buildResource

▸ **buildResource**($id: *[ID](enums/lang.md#id)*, $tag: *[TAG](#tag)*): [IResource](interfaces/iresource.md)

*Defined in [helpers/utils.helper.ts:21](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/utils.helper.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| $id | [ID](enums/lang.md#id) |
| $tag | [TAG](#tag) |

**Returns:** [IResource](interfaces/iresource.md)

___
<a id="clone"></a>

###  clone

▸ **clone**<`T`>(fromEntity: *`T`*): `T`

*Defined in [helpers/utils.helper.ts:17](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/utils.helper.ts#L17)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fromEntity | `T` |

**Returns:** `T`

___
<a id="cnpj"></a>

###  cnpj

▸ **cnpj**(val?: *`string` \| `number` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:48](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `string` \| `number` \| `null` |

**Returns:** `string`

___
<a id="copytoclipboard"></a>

###  copyToClipboard

▸ **copyToClipboard**(text: *`string`*): `void`

*Defined in [helpers/utils.helper.ts:100](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/utils.helper.ts#L100)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `void`

___
<a id="cpf"></a>

###  cpf

▸ **cpf**(val?: *`string` \| `number` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:44](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `string` \| `number` \| `null` |

**Returns:** `string`

___
<a id="cpforcnpj"></a>

###  cpfOrCnpj

▸ **cpfOrCnpj**(val?: *`string` \| `number` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:52](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `string` \| `number` \| `null` |

**Returns:** `string`

___
<a id="createcsvfile"></a>

###  createCsvFile

▸ **createCsvFile**(filename: *`string`*, csvStr: *`string`*): `void`

*Defined in [helpers/utils.helper.ts:31](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/utils.helper.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filename | `string` |
| csvStr | `string` |

**Returns:** `void`

___
<a id="csvtodata"></a>

###  csvToData

▸ **csvToData**(urlOrFile: *`string` \| `File`*): `Promise`<`ParseResult`>

*Defined in [helpers/utils.helper.ts:58](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/utils.helper.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| urlOrFile | `string` \| `File` |

**Returns:** `Promise`<`ParseResult`>

___
<a id="csvtonormalizeddata"></a>

###  csvToNormalizedData

▸ **csvToNormalizedData**<`T`>(urlOrFile: *`string` \| `File`*, blueprint: *`T`*): `Promise`<`Array`<[NormalizedItem](#normalizeditem)<`T`>>>

*Defined in [helpers/utils.helper.ts:50](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/utils.helper.ts#L50)*

**Type parameters:**

#### T :  [DataBlueprint](interfaces/datablueprint.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| urlOrFile | `string` \| `File` |
| blueprint | `T` |

**Returns:** `Promise`<`Array`<[NormalizedItem](#normalizeditem)<`T`>>>

___
<a id="date"></a>

###  date

▸ **date**(date?: *`string` \| `Date` \| `Moment` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:16](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` date | `string` \| `Date` \| `Moment` \| `null` |

**Returns:** `string`

___
<a id="datetime"></a>

###  datetime

▸ **datetime**(date?: *`string` \| `Date` \| `Moment` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:12](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` date | `string` \| `Date` \| `Moment` \| `null` |

**Returns:** `string`

___
<a id="error"></a>

###  error

▸ **error**(body: *`string`*, title?: *`undefined` \| `string`*, useI18n?: *`boolean`*, config?: *`SnotifyToastConfig`*): `void`

*Defined in [helpers/toast.helper.ts:21](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/toast.helper.ts#L21)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `string` | - |
| `Optional` title | `undefined` \| `string` | - |
| `Default value` useI18n | `boolean` | true |
| `Default value` config | `SnotifyToastConfig` |  {} |

**Returns:** `void`

___
<a id="errorandpush"></a>

###  errorAndPush

▸ **errorAndPush**(body: *`string`*, uri: *`string`*, title?: *`undefined` \| `string`*, useI18n?: *`boolean`*, config?: *`SnotifyToastConfig`*): `void`

*Defined in [helpers/toast.helper.ts:30](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/toast.helper.ts#L30)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `string` | - |
| uri | `string` | - |
| `Optional` title | `undefined` \| `string` | - |
| `Default value` useI18n | `boolean` | true |
| `Optional` config | `SnotifyToastConfig` | - |

**Returns:** `void`

___
<a id="errorvalidation"></a>

###  errorValidation

▸ **errorValidation**(message: *`string`*): `void`

*Defined in [helpers/toast.helper.ts:26](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/toast.helper.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `string` |

**Returns:** `void`

___
<a id="getmanyresource"></a>

###  getManyResource

▸ **getManyResource**<`R`>(list: *`Array`<`R` \| [IResource](interfaces/iresource.md)>*, ids: *[ID](enums/lang.md#id)[]*): `Array`<`R` \| [IResource](interfaces/iresource.md)>

*Defined in [helpers/resource.helper.ts:23](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/resource.helper.ts#L23)*

**Type parameters:**

#### R :  [Resource](classes/resource.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `Array`<`R` \| [IResource](interfaces/iresource.md)> |
| ids | [ID](enums/lang.md#id)[] |

**Returns:** `Array`<`R` \| [IResource](interfaces/iresource.md)>

___
<a id="getresource"></a>

###  getResource

▸ **getResource**<`R`>(list: *`Array`<`R` \| [IResource](interfaces/iresource.md)>*, id: *[ID](enums/lang.md#id) \| `null`*): `R` \| [IResource](interfaces/iresource.md) \| `null`

*Defined in [helpers/resource.helper.ts:19](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/resource.helper.ts#L19)*

**Type parameters:**

#### R :  [Resource](classes/resource.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `Array`<`R` \| [IResource](interfaces/iresource.md)> |
| id | [ID](enums/lang.md#id) \| `null` |

**Returns:** `R` \| [IResource](interfaces/iresource.md) \| `null`

___
<a id="historyback"></a>

###  historyBack

▸ **historyBack**(): `void`

*Defined in [helpers/router.helper.ts:24](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/router.helper.ts#L24)*

**Returns:** `void`

___
<a id="info"></a>

###  info

▸ **info**(body: *`string`*, title?: *`undefined` \| `string`*, useI18n?: *`boolean`*, config?: *`SnotifyToastConfig`*): `void`

*Defined in [helpers/toast.helper.ts:62](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/toast.helper.ts#L62)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `string` | - |
| `Optional` title | `undefined` \| `string` | - |
| `Default value` useI18n | `boolean` | true |
| `Default value` config | `SnotifyToastConfig` |  {} |

**Returns:** `void`

___
<a id="infoandpush"></a>

###  infoAndPush

▸ **infoAndPush**(body: *`string`*, uri: *`string`*, title?: *`undefined` \| `string`*, useI18n?: *`boolean`*, config?: *`SnotifyToastConfig`*): `void`

*Defined in [helpers/toast.helper.ts:67](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/toast.helper.ts#L67)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `string` | - |
| uri | `string` | - |
| `Optional` title | `undefined` \| `string` | - |
| `Default value` useI18n | `boolean` | true |
| `Optional` config | `SnotifyToastConfig` | - |

**Returns:** `void`

___
<a id="listobject"></a>

###  listObject

▸ **listObject**(obj: *[Dictionary](interfaces/dictionary.md)<[ID](enums/lang.md#id)>*, i18nPath?: *`undefined` \| `string`*): [IResource](interfaces/iresource.md)[]

*Defined in [helpers/utils.helper.ts:25](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/utils.helper.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | [Dictionary](interfaces/dictionary.md)<[ID](enums/lang.md#id)> |
| `Optional` i18nPath | `undefined` \| `string` |

**Returns:** [IResource](interfaces/iresource.md)[]

___
<a id="normalizedata"></a>

###  normalizeData

▸ **normalizeData**<`T`>(data: *`any`[]*, blueprint: *`T`*): `Array`<[NormalizedItem](#normalizeditem)<`T`>>

*Defined in [helpers/utils.helper.ts:77](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/utils.helper.ts#L77)*

**Type parameters:**

#### T :  [DataBlueprint](interfaces/datablueprint.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `any`[] |
| blueprint | `T` |

**Returns:** `Array`<[NormalizedItem](#normalizeditem)<`T`>>

___
<a id="openurl"></a>

###  openUrl

▸ **openUrl**(url: *`string`*, targetBlank?: *`undefined` \| `false` \| `true`*): `null` \| `Window`

*Defined in [helpers/router.helper.ts:20](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/router.helper.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` targetBlank | `undefined` \| `false` \| `true` |

**Returns:** `null` \| `Window`

___
<a id="pad"></a>

###  pad

▸ **pad**(val?: *`string` \| `number` \| `null`*, length?: *`undefined` \| `number`*): `string`

*Defined in [helpers/filter.helper.ts:56](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `string` \| `number` \| `null` |
| `Optional` length | `undefined` \| `number` |

**Returns:** `string`

___
<a id="phone"></a>

###  phone

▸ **phone**(val?: *`string` \| `number` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:32](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `string` \| `number` \| `null` |

**Returns:** `string`

___
<a id="prependresource"></a>

###  prependResource

▸ **prependResource**<`R`>(list: *`Array`<`R` \| [IResource](interfaces/iresource.md)>*, item: *`R` \| [IResource](interfaces/iresource.md)*): `Array`<`R` \| [IResource](interfaces/iresource.md)>

*Defined in [helpers/resource.helper.ts:27](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/resource.helper.ts#L27)*

**Type parameters:**

#### R :  [Resource](classes/resource.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `Array`<`R` \| [IResource](interfaces/iresource.md)> |
| item | `R` \| [IResource](interfaces/iresource.md) |

**Returns:** `Array`<`R` \| [IResource](interfaces/iresource.md)>

___
<a id="push"></a>

###  push

▸ **push**(uri: *`string`*): `void`

*Defined in [helpers/router.helper.ts:4](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/router.helper.ts#L4)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| uri | `string` |

**Returns:** `void`

___
<a id="pushbyname"></a>

###  pushByName

▸ **pushByName**(name: *`string`*, ...ids: *[ID](enums/lang.md#id)[]*): `void`

*Defined in [helpers/router.helper.ts:8](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/router.helper.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| `Rest` ids | [ID](enums/lang.md#id)[] |

**Returns:** `void`

___
<a id="removedelimiters"></a>

###  removeDelimiters

▸ **removeDelimiters**(val?: *`string` \| `number` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:28](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `string` \| `number` \| `null` |

**Returns:** `string`

___
<a id="removeresource"></a>

###  removeResource

▸ **removeResource**<`R`>(list: *`Array`<`R` \| [IResource](interfaces/iresource.md)>*, id: *[ID](enums/lang.md#id)*): `void`

*Defined in [helpers/resource.helper.ts:51](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/resource.helper.ts#L51)*

**Type parameters:**

#### R :  [Resource](classes/resource.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `Array`<`R` \| [IResource](interfaces/iresource.md)> |
| id | [ID](enums/lang.md#id) |

**Returns:** `void`

___
<a id="rg"></a>

###  rg

▸ **rg**(val?: *`string` \| `number` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:40](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `string` \| `number` \| `null` |

**Returns:** `string`

___
<a id="sleep"></a>

###  sleep

▸ **sleep**(ms: *`number`*): `Promise`<`Object`>

*Defined in [helpers/utils.helper.ts:13](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/utils.helper.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ms | `number` |

**Returns:** `Promise`<`Object`>

___
<a id="success"></a>

###  success

▸ **success**(body: *`string`*, title?: *`undefined` \| `string`*, useI18n?: *`boolean`*, config?: *`SnotifyToastConfig`*): `void`

*Defined in [helpers/toast.helper.ts:5](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/toast.helper.ts#L5)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `string` | - |
| `Optional` title | `undefined` \| `string` | - |
| `Default value` useI18n | `boolean` | true |
| `Default value` config | `SnotifyToastConfig` |  {} |

**Returns:** `void`

___
<a id="successandpush"></a>

###  successAndPush

▸ **successAndPush**(body: *`string`*, uri: *`string`*, title?: *`undefined` \| `string`*, useI18n?: *`boolean`*, config?: *`SnotifyToastConfig`*): `void`

*Defined in [helpers/toast.helper.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/toast.helper.ts#L10)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `string` | - |
| uri | `string` | - |
| `Optional` title | `undefined` \| `string` | - |
| `Default value` useI18n | `boolean` | true |
| `Optional` config | `SnotifyToastConfig` | - |

**Returns:** `void`

___
<a id="time"></a>

###  time

▸ **time**(date?: *`string` \| `Date` \| `Moment` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:20](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` date | `string` \| `Date` \| `Moment` \| `null` |

**Returns:** `string`

___
<a id="tostring"></a>

###  toString

▸ **toString**(val?: *`string` \| `number` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:4](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L4)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `string` \| `number` \| `null` |

**Returns:** `string`

___
<a id="truncate"></a>

###  truncate

▸ **truncate**(val?: *`string` \| `number` \| `null`*, length?: *`undefined` \| `number`*): `string`

*Defined in [helpers/filter.helper.ts:24](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `string` \| `number` \| `null` |
| `Optional` length | `undefined` \| `number` |

**Returns:** `string`

___
<a id="uid"></a>

###  uid

▸ **uid**(prefix?: *`undefined` \| `string`*, suffix?: *`undefined` \| `string`*): `string`

*Defined in [helpers/utils.helper.ts:9](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/utils.helper.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` prefix | `undefined` \| `string` |
| `Optional` suffix | `undefined` \| `string` |

**Returns:** `string`

___
<a id="warning"></a>

###  warning

▸ **warning**(body: *`string`*, title?: *`undefined` \| `string`*, useI18n?: *`boolean`*, config?: *`SnotifyToastConfig`*): `void`

*Defined in [helpers/toast.helper.ts:46](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/toast.helper.ts#L46)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `string` | - |
| `Optional` title | `undefined` \| `string` | - |
| `Default value` useI18n | `boolean` | true |
| `Default value` config | `SnotifyToastConfig` |  {} |

**Returns:** `void`

___
<a id="warningandpush"></a>

###  warningAndPush

▸ **warningAndPush**(body: *`string`*, uri: *`string`*, title?: *`undefined` \| `string`*, useI18n?: *`boolean`*, config?: *`SnotifyToastConfig`*): `void`

*Defined in [helpers/toast.helper.ts:51](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/toast.helper.ts#L51)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `string` | - |
| uri | `string` | - |
| `Optional` title | `undefined` \| `string` | - |
| `Default value` useI18n | `boolean` | true |
| `Optional` config | `SnotifyToastConfig` | - |

**Returns:** `void`

___
<a id="zipcode"></a>

###  zipcode

▸ **zipcode**(val?: *`string` \| `number` \| `null`*): `string`

*Defined in [helpers/filter.helper.ts:36](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/helpers/filter.helper.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `string` \| `number` \| `null` |

**Returns:** `string`

___

