[simpli-web-sdk](../README.md) > [Model](../classes/model.md)

# Class: Model

## Hierarchy

**Model**

↳  [Resource](resource.md)

## Implements

* [ISchema](../interfaces/ischema.md)

## Index

### Properties

* [$schemaSet](model.md#_schemaset)

### Methods

* [$allFieldsFrom](model.md#_allfieldsfrom)
* [$allHeadersFrom](model.md#_allheadersfrom)
* [$clone](model.md#_clone)
* [$dataFrom](model.md#_datafrom)
* [$getSchema](model.md#_getschema)
* [$getSchemaName](model.md#_getschemaname)
* [$getSpinnerName](model.md#_getspinnername)
* [$headerFrom](model.md#_headerfrom)
* [$list](model.md#_list)
* [$persist](model.md#_persist)
* [$populate](model.md#_populate)
* [$translateFrom](model.md#_translatefrom)
* [$validate](model.md#_validate)

---

## Properties

<a id="_schemaset"></a>

###  $schemaSet

**● $schemaSet**: *[SchemaSet](../interfaces/schemaset.md)*

*Implementation of [ISchema](../interfaces/ischema.md).[$schemaSet](../interfaces/ischema.md#_schemaset)*

*Defined in [app/utils/Model.ts:8](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L8)*

___

## Methods

<a id="_allfieldsfrom"></a>

###  $allFieldsFrom

▸ **$allFieldsFrom**(schemaRef: *`string`*): `string`[]

*Defined in [app/utils/Model.ts:44](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** `string`[]

___
<a id="_allheadersfrom"></a>

###  $allHeadersFrom

▸ **$allHeadersFrom**(schemaRef: *`string`*): `string`[]

*Defined in [app/utils/Model.ts:49](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** `string`[]

___
<a id="_clone"></a>

###  $clone

▸ **$clone**(): `this`

*Defined in [app/utils/Model.ts:74](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L74)*

**Returns:** `this`

___
<a id="_datafrom"></a>

###  $dataFrom

▸ **$dataFrom**(schemaRef: *`string`*): [Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>

*Defined in [app/utils/Model.ts:59](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L59)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** [Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>

___
<a id="_getschema"></a>

###  $getSchema

▸ **$getSchema**(schemaRef: *`string`*): [Schema](schema.md) \| `null`

*Defined in [app/utils/Model.ts:35](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** [Schema](schema.md) \| `null`

___
<a id="_getschemaname"></a>

###  $getSchemaName

▸ **$getSchemaName**(schemaRef: *`string`*): `string` \| `null`

*Defined in [app/utils/Model.ts:39](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** `string` \| `null`

___
<a id="_getspinnername"></a>

###  $getSpinnerName

▸ **$getSpinnerName**(command: *`string`*): `string`

*Defined in [app/utils/Model.ts:31](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | `string` |

**Returns:** `string`

___
<a id="_headerfrom"></a>

###  $headerFrom

▸ **$headerFrom**(schemaRef: *`string`*): [Dictionary](../interfaces/dictionary.md)<`string`>

*Defined in [app/utils/Model.ts:54](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** [Dictionary](../interfaces/dictionary.md)<`string`>

___
<a id="_list"></a>

###  $list

▸ **$list**(url: *`string`*): `Promise`<`AxiosResponse`<`this`[]>>

*Defined in [app/utils/Model.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`AxiosResponse`<`this`[]>>

___
<a id="_persist"></a>

###  $persist

▸ **$persist**(url: *`string`*): `Promise`<`AxiosResponse`<`any`>>

*Defined in [app/utils/Model.ts:24](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`AxiosResponse`<`any`>>

___
<a id="_populate"></a>

###  $populate

▸ **$populate**(url: *`string`*): `Promise`<`AxiosResponse`<`this`>>

*Defined in [app/utils/Model.ts:17](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`AxiosResponse`<`this`>>

___
<a id="_translatefrom"></a>

###  $translateFrom

▸ **$translateFrom**(schemaRef: *`string`*, fiendName: *`string`*): `string`

*Defined in [app/utils/Model.ts:64](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |
| fiendName | `string` |

**Returns:** `string`

___
<a id="_validate"></a>

###  $validate

▸ **$validate**(schemaRef?: *`string`*): `void`

*Defined in [app/utils/Model.ts:69](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/utils/Model.ts#L69)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` schemaRef | `string` | &quot;input&quot; |

**Returns:** `void`

___

