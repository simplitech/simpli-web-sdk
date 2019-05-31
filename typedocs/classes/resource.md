[simpli-web-sdk](../README.md) > [Resource](../classes/resource.md)

# Class: Resource

## Hierarchy

 [Model](model.md)

**↳ Resource**

## Implements

* [ISchema](../interfaces/ischema.md)
* [IResource](../interfaces/iresource.md)

## Index

### Properties

* [$axiosConfig](resource.md#_axiosconfig)
* [$customActionConfig](resource.md#_customactionconfig)
* [$endpoint](resource.md#_endpoint)
* [$schemaSet](resource.md#_schemaset)

### Accessors

* [$action](resource.md#_action)
* [$allParamKeys](resource.md#_allparamkeys)
* [$firstParamKey](resource.md#_firstparamkey)
* [$id](resource.md#_id)
* [$tag](resource.md#_tag)

### Methods

* [$allFieldsFrom](resource.md#_allfieldsfrom)
* [$allHeadersFrom](resource.md#_allheadersfrom)
* [$clone](resource.md#_clone)
* [$dataFrom](resource.md#_datafrom)
* [$getMany](resource.md#_getmany)
* [$getOne](resource.md#_getone)
* [$getSchema](resource.md#_getschema)
* [$getSchemaName](resource.md#_getschemaname)
* [$getSpinnerName](resource.md#_getspinnername)
* [$headerFrom](resource.md#_headerfrom)
* [$listFrom](resource.md#_listfrom)
* [$persistFrom](resource.md#_persistfrom)
* [$populateFrom](resource.md#_populatefrom)
* [$query](resource.md#_query)
* [$remove](resource.md#_remove)
* [$removeFrom](resource.md#_removefrom)
* [$save](resource.md#_save)
* [$translateFrom](resource.md#_translatefrom)
* [$update](resource.md#_update)
* [$updateFrom](resource.md#_updatefrom)
* [$validate](resource.md#_validate)

---

## Properties

<a id="_axiosconfig"></a>

###  $axiosConfig

**● $axiosConfig**: *`AxiosRequestConfig`*

*Defined in [app/utils/Resource.ts:21](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L21)*

___
<a id="_customactionconfig"></a>

###  $customActionConfig

**● $customActionConfig**: *[ResourceActionConfig](../interfaces/resourceactionconfig.md)*

*Defined in [app/utils/Resource.ts:19](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L19)*

___
<a id="_endpoint"></a>

###  $endpoint

**● $endpoint**: *`string`* = ""

*Defined in [app/utils/Resource.ts:17](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L17)*

___
<a id="_schemaset"></a>

###  $schemaSet

**● $schemaSet**: *[SchemaSet](../interfaces/schemaset.md)*

*Implementation of [ISchema](../interfaces/ischema.md).[$schemaSet](../interfaces/ischema.md#_schemaset)*

*Inherited from [Model](model.md).[$schemaSet](model.md#_schemaset)*

*Defined in [app/utils/Model.ts:8](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L8)*

___

## Accessors

<a id="_action"></a>

###  $action

**get $action**(): [ResourceAction](../interfaces/resourceaction.md)

*Defined in [app/utils/Resource.ts:23](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L23)*

**Returns:** [ResourceAction](../interfaces/resourceaction.md)

___
<a id="_allparamkeys"></a>

###  $allParamKeys

**get $allParamKeys**(): `string`[]

*Defined in [app/utils/Resource.ts:101](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L101)*

**Returns:** `string`[]

___
<a id="_firstparamkey"></a>

###  $firstParamKey

**get $firstParamKey**(): `null` \| `string`

*Defined in [app/utils/Resource.ts:115](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L115)*

**Returns:** `null` \| `string`

___
<a id="_id"></a>

###  $id

**get $id**(): `string` \| `number`

**set $id**(val: *[ID](../enums/lang.md#id)*): `any`

*Defined in [app/utils/Resource.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L7)*

**Returns:** `string` \| `number`

*Defined in [app/utils/Resource.ts:8](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | [ID](../enums/lang.md#id) |

**Returns:** `any`

___
<a id="_tag"></a>

###  $tag

**get $tag**(): `string`

**set $tag**(val: *[TAG](../#tag)*): `void`

*Defined in [app/utils/Resource.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L10)*

**Returns:** `string`

*Defined in [app/utils/Resource.ts:13](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | [TAG](../#tag) |

**Returns:** `void`

___

## Methods

<a id="_allfieldsfrom"></a>

###  $allFieldsFrom

▸ **$allFieldsFrom**(schemaRef: *`string`*): `string`[]

*Inherited from [Model](model.md).[$allFieldsFrom](model.md#_allfieldsfrom)*

*Defined in [app/utils/Model.ts:58](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** `string`[]

___
<a id="_allheadersfrom"></a>

###  $allHeadersFrom

▸ **$allHeadersFrom**(schemaRef: *`string`*): `string`[]

*Inherited from [Model](model.md).[$allHeadersFrom](model.md#_allheadersfrom)*

*Defined in [app/utils/Model.ts:63](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L63)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** `string`[]

___
<a id="_clone"></a>

###  $clone

▸ **$clone**(): `this`

*Inherited from [Model](model.md).[$clone](model.md#_clone)*

*Defined in [app/utils/Model.ts:88](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L88)*

**Returns:** `this`

___
<a id="_datafrom"></a>

###  $dataFrom

▸ **$dataFrom**(schemaRef: *`string`*): [Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>

*Inherited from [Model](model.md).[$dataFrom](model.md#_datafrom)*

*Defined in [app/utils/Model.ts:73](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L73)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** [Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>

___
<a id="_getmany"></a>

###  $getMany

▸ **$getMany**(params?: *`any`*): `Promise`<`AxiosResponse`<`this`[]>>

*Defined in [app/utils/Resource.ts:136](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L136)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` params | `any` |

**Returns:** `Promise`<`AxiosResponse`<`this`[]>>

___
<a id="_getone"></a>

###  $getOne

▸ **$getOne**(...ids: *[ID](../enums/lang.md#id)[]*): `Promise`<`AxiosResponse`<`this`>>

*Defined in [app/utils/Resource.ts:119](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L119)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` ids | [ID](../enums/lang.md#id)[] |

**Returns:** `Promise`<`AxiosResponse`<`this`>>

___
<a id="_getschema"></a>

###  $getSchema

▸ **$getSchema**(schemaRef: *`string`*): [Schema](schema.md) \| `null`

*Inherited from [Model](model.md).[$getSchema](model.md#_getschema)*

*Defined in [app/utils/Model.ts:49](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** [Schema](schema.md) \| `null`

___
<a id="_getschemaname"></a>

###  $getSchemaName

▸ **$getSchemaName**(schemaRef: *`string`*): `string` \| `null`

*Inherited from [Model](model.md).[$getSchemaName](model.md#_getschemaname)*

*Defined in [app/utils/Model.ts:53](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** `string` \| `null`

___
<a id="_getspinnername"></a>

###  $getSpinnerName

▸ **$getSpinnerName**(command: *`string`*): `string`

*Inherited from [Model](model.md).[$getSpinnerName](model.md#_getspinnername)*

*Defined in [app/utils/Model.ts:45](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L45)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | `string` |

**Returns:** `string`

___
<a id="_headerfrom"></a>

###  $headerFrom

▸ **$headerFrom**(schemaRef: *`string`*): [Dictionary](../interfaces/dictionary.md)<`string`>

*Inherited from [Model](model.md).[$headerFrom](model.md#_headerfrom)*

*Defined in [app/utils/Model.ts:68](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L68)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** [Dictionary](../interfaces/dictionary.md)<`string`>

___
<a id="_listfrom"></a>

###  $listFrom

▸ **$listFrom**(url: *`string`*): `Promise`<`AxiosResponse`<`this`[]>>

*Inherited from [Model](model.md).[$listFrom](model.md#_listfrom)*

*Defined in [app/utils/Model.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`AxiosResponse`<`this`[]>>

___
<a id="_persistfrom"></a>

###  $persistFrom

▸ **$persistFrom**(url: *`string`*): `Promise`<`AxiosResponse`<`any`>>

*Inherited from [Model](model.md).[$persistFrom](model.md#_persistfrom)*

*Defined in [app/utils/Model.ts:24](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`AxiosResponse`<`any`>>

___
<a id="_populatefrom"></a>

###  $populateFrom

▸ **$populateFrom**(url: *`string`*): `Promise`<`AxiosResponse`<`this`>>

*Inherited from [Model](model.md).[$populateFrom](model.md#_populatefrom)*

*Defined in [app/utils/Model.ts:17](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`AxiosResponse`<`this`>>

___
<a id="_query"></a>

###  $query

▸ **$query**(params?: *`any`*): `Promise`<`AxiosResponse`<`this`>>

*Defined in [app/utils/Resource.ts:144](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L144)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` params | `any` |

**Returns:** `Promise`<`AxiosResponse`<`this`>>

___
<a id="_remove"></a>

###  $remove

▸ **$remove**(params?: *`any`*): `Promise`<`AxiosResponse`<`any`>>

*Defined in [app/utils/Resource.ts:175](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L175)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` params | `any` |

**Returns:** `Promise`<`AxiosResponse`<`any`>>

___
<a id="_removefrom"></a>

###  $removeFrom

▸ **$removeFrom**(url: *`string`*): `Promise`<`AxiosResponse`<`any`>>

*Inherited from [Model](model.md).[$removeFrom](model.md#_removefrom)*

*Defined in [app/utils/Model.ts:38](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`AxiosResponse`<`any`>>

___
<a id="_save"></a>

###  $save

▸ **$save**(params?: *`any`*): `Promise`<`AxiosResponse`<`any`>>

*Defined in [app/utils/Resource.ts:152](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L152)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` params | `any` |

**Returns:** `Promise`<`AxiosResponse`<`any`>>

___
<a id="_translatefrom"></a>

###  $translateFrom

▸ **$translateFrom**(schemaRef: *`string`*, fiendName: *`string`*): `string`

*Inherited from [Model](model.md).[$translateFrom](model.md#_translatefrom)*

*Defined in [app/utils/Model.ts:78](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |
| fiendName | `string` |

**Returns:** `string`

___
<a id="_update"></a>

###  $update

▸ **$update**(params?: *`any`*): `Promise`<`AxiosResponse`<`any`>>

*Defined in [app/utils/Resource.ts:160](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Resource.ts#L160)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` params | `any` |

**Returns:** `Promise`<`AxiosResponse`<`any`>>

___
<a id="_updatefrom"></a>

###  $updateFrom

▸ **$updateFrom**(url: *`string`*): `Promise`<`AxiosResponse`<`any`>>

*Inherited from [Model](model.md).[$updateFrom](model.md#_updatefrom)*

*Defined in [app/utils/Model.ts:31](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`AxiosResponse`<`any`>>

___
<a id="_validate"></a>

###  $validate

▸ **$validate**(schemaRef?: *`string`*): `void`

*Inherited from [Model](model.md).[$validate](model.md#_validate)*

*Defined in [app/utils/Model.ts:83](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/utils/Model.ts#L83)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` schemaRef | `string` | &quot;input&quot; |

**Returns:** `void`

___

