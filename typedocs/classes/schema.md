[simpli-web-sdk](../README.md) > [Schema](../classes/schema.md)

# Class: Schema

## Hierarchy

**Schema**

## Index

### Properties

* [fieldSet](schema.md#fieldset)
* [name](schema.md#name)
* [defaultI18nPath](schema.md#defaulti18npath)

### Accessors

* [allFields](schema.md#allfields)
* [allHeaders](schema.md#allheaders)
* [header](schema.md#header)

### Methods

* [build](schema.md#build)
* [downloadCsv](schema.md#downloadcsv)
* [getAjvSchema](schema.md#getajvschema)
* [getModelData](schema.md#getmodeldata)
* [toCsv](schema.md#tocsv)
* [toJson](schema.md#tojson)
* [toList](schema.md#tolist)
* [translateFrom](schema.md#translatefrom)
* [validate](schema.md#validate)
* [validateErrors](schema.md#validateerrors)

---

## Properties

<a id="fieldset"></a>

### `<Abstract>` fieldSet

**● fieldSet**: *[FieldSet](../interfaces/fieldset.md)<`any`>*

*Defined in [app/utils/Schema.ts:12](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L12)*

___
<a id="name"></a>

### `<Abstract>` name

**● name**: *`string`*

*Defined in [app/utils/Schema.ts:11](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L11)*

___
<a id="defaulti18npath"></a>

### `<Static>` defaultI18nPath

**● defaultI18nPath**: *`string`* = "schema.{schemaName}.{fieldName}"

*Defined in [app/utils/Schema.ts:9](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L9)*

___

## Accessors

<a id="allfields"></a>

###  allFields

**get allFields**(): `string`[]

*Defined in [app/utils/Schema.ts:14](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L14)*

**Returns:** `string`[]

___
<a id="allheaders"></a>

###  allHeaders

**get allHeaders**(): `string`[]

*Defined in [app/utils/Schema.ts:18](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L18)*

**Returns:** `string`[]

___
<a id="header"></a>

###  header

**get header**(): [Dictionary](../interfaces/dictionary.md)<`string`>

*Defined in [app/utils/Schema.ts:22](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L22)*

**Returns:** [Dictionary](../interfaces/dictionary.md)<`string`>

___

## Methods

<a id="build"></a>

###  build

▸ **build**<`M`>(model: *`M`*, fieldName: *`string`*): [SchemaBuilder](schemabuilder.md)<`M`>

*Defined in [app/utils/Schema.ts:34](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L34)*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| model | `M` |
| fieldName | `string` |

**Returns:** [SchemaBuilder](schemabuilder.md)<`M`>

___
<a id="downloadcsv"></a>

###  downloadCsv

▸ **downloadCsv**<`M`>(list: *`M`[]*, customTitle?: *`undefined` \| `string`*): `void`

*Defined in [app/utils/Schema.ts:96](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L96)*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `M`[] |
| `Optional` customTitle | `undefined` \| `string` |

**Returns:** `void`

___
<a id="getajvschema"></a>

###  getAjvSchema

▸ **getAjvSchema**<`M`>(model: *`M`*): [DictionaryOfValidation](../interfaces/dictionaryofvalidation.md)<[FieldValidation](../#fieldvalidation)>

*Defined in [app/utils/Schema.ts:48](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L48)*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| model | `M` |

**Returns:** [DictionaryOfValidation](../interfaces/dictionaryofvalidation.md)<[FieldValidation](../#fieldvalidation)>

___
<a id="getmodeldata"></a>

###  getModelData

▸ **getModelData**<`M`>(model: *`M`*): [Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>

*Defined in [app/utils/Schema.ts:38](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L38)*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| model | `M` |

**Returns:** [Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>

___
<a id="tocsv"></a>

###  toCsv

▸ **toCsv**<`M`>(list: *`M`[]*): `string`

*Defined in [app/utils/Schema.ts:88](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L88)*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `M`[] |

**Returns:** `string`

___
<a id="tojson"></a>

###  toJson

▸ **toJson**<`M`>(list: *`M`[]*): `string`

*Defined in [app/utils/Schema.ts:92](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L92)*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `M`[] |

**Returns:** `string`

___
<a id="tolist"></a>

###  toList

▸ **toList**<`M`>(list: *`M`[]*): `Array`<[Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>>

*Defined in [app/utils/Schema.ts:81](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L81)*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | `M`[] |

**Returns:** `Array`<[Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>>

___
<a id="translatefrom"></a>

###  translateFrom

▸ **translateFrom**(fieldName: *`string`*): `string`

*Defined in [app/utils/Schema.ts:26](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fieldName | `string` |

**Returns:** `string`

___
<a id="validate"></a>

###  validate

▸ **validate**<`M`>(model: *`M`*): `void`

*Defined in [app/utils/Schema.ts:67](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L67)*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| model | `M` |

**Returns:** `void`

___
<a id="validateerrors"></a>

###  validateErrors

▸ **validateErrors**<`M`>(model: *`M`*): `ErrorObject`[] \| `null`

*Defined in [app/utils/Schema.ts:63](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Schema.ts#L63)*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| model | `M` |

**Returns:** `ErrorObject`[] \| `null`

___

