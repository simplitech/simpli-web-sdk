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

*Defined in [app/utils/Schema.ts:19](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L19)*

___
<a id="name"></a>

### `<Abstract>` name

**● name**: *`string`*

*Defined in [app/utils/Schema.ts:18](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L18)*

___
<a id="defaulti18npath"></a>

### `<Static>` defaultI18nPath

**● defaultI18nPath**: *`string`* = "schema.{schemaName}.{fieldName}"

*Defined in [app/utils/Schema.ts:16](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L16)*

___

## Accessors

<a id="allfields"></a>

###  allFields

**get allFields**(): `string`[]

*Defined in [app/utils/Schema.ts:21](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L21)*

**Returns:** `string`[]

___
<a id="allheaders"></a>

###  allHeaders

**get allHeaders**(): `string`[]

*Defined in [app/utils/Schema.ts:25](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L25)*

**Returns:** `string`[]

___
<a id="header"></a>

###  header

**get header**(): [Dictionary](../interfaces/dictionary.md)<`string`>

*Defined in [app/utils/Schema.ts:29](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L29)*

**Returns:** [Dictionary](../interfaces/dictionary.md)<`string`>

___

## Methods

<a id="build"></a>

###  build

▸ **build**<`M`>(model: *`M`*, fieldName: *`string`*): [SchemaBuilder](schemabuilder.md)<`M`>

*Defined in [app/utils/Schema.ts:41](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L41)*

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

*Defined in [app/utils/Schema.ts:103](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L103)*

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

*Defined in [app/utils/Schema.ts:55](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L55)*

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

*Defined in [app/utils/Schema.ts:45](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L45)*

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

*Defined in [app/utils/Schema.ts:95](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L95)*

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

*Defined in [app/utils/Schema.ts:99](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L99)*

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

*Defined in [app/utils/Schema.ts:88](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L88)*

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

*Defined in [app/utils/Schema.ts:33](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fieldName | `string` |

**Returns:** `string`

___
<a id="validate"></a>

###  validate

▸ **validate**<`M`>(model: *`M`*): `void`

*Defined in [app/utils/Schema.ts:74](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L74)*

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

*Defined in [app/utils/Schema.ts:70](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/utils/Schema.ts#L70)*

**Type parameters:**

#### M 
**Parameters:**

| Name | Type |
| ------ | ------ |
| model | `M` |

**Returns:** `ErrorObject`[] \| `null`

___

