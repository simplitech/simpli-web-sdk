[simpli-web-sdk](../README.md) > [ResourceCollection](../classes/resourcecollection.md)

# Class: ResourceCollection

## Type parameters
#### R :  [Resource](resource.md)
## Hierarchy

 [Collection](collection.md)<`R`>

**↳ ResourceCollection**

↳  [PageCollection](pagecollection.md)

## Implements

* [IResourceCollection](../interfaces/iresourcecollection.md)

## Index

### Constructors

* [constructor](resourcecollection.md#constructor)

### Properties

* [classType](resourcecollection.md#classtype)
* [filters](resourcecollection.md#filters)
* [instance](resourcecollection.md#instance)
* [items](resourcecollection.md#items)

### Accessors

* [lodash](resourcecollection.md#lodash)
* [params](resourcecollection.md#params)
* [spinnerName](resourcecollection.md#spinnername)

### Methods

* [add](resourcecollection.md#add)
* [addFilter](resourcecollection.md#addfilter)
* [addResource](resourcecollection.md#addresource)
* [all](resourcecollection.md#all)
* [allWithPlaceholder](resourcecollection.md#allwithplaceholder)
* [appendResource](resourcecollection.md#appendresource)
* [dataFrom](resourcecollection.md#datafrom)
* [downloadCsv](resourcecollection.md#downloadcsv)
* [first](resourcecollection.md#first)
* [get](resourcecollection.md#get)
* [getManyResource](resourcecollection.md#getmanyresource)
* [getResource](resourcecollection.md#getresource)
* [headerFrom](resourcecollection.md#headerfrom)
* [isEmpty](resourcecollection.md#isempty)
* [isNotEmpty](resourcecollection.md#isnotempty)
* [last](resourcecollection.md#last)
* [prependNullResource](resourcecollection.md#prependnullresource)
* [prependResource](resourcecollection.md#prependresource)
* [queryAs](resourcecollection.md#queryas)
* [queryAsArray](resourcecollection.md#queryasarray)
* [remove](resourcecollection.md#remove)
* [removeResource](resourcecollection.md#removeresource)
* [size](resourcecollection.md#size)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ResourceCollection**(classType: *[ClassType](../#classtype)<`R`>*, items?: *`R`[]*): [ResourceCollection](resourcecollection.md)

*Overrides [Collection](collection.md).[constructor](collection.md#constructor)*

*Defined in [app/collection/ResourceCollection.ts:20](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| classType | [ClassType](../#classtype)<`R`> |
| `Optional` items | `R`[] |

**Returns:** [ResourceCollection](resourcecollection.md)

___

## Properties

<a id="classtype"></a>

###  classType

**● classType**: *[ClassType](../#classtype)<`R`>*

*Defined in [app/collection/ResourceCollection.ts:31](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L31)*

___
<a id="filters"></a>

### `<Protected>` filters

**● filters**: *[QueryFilter](../#queryfilter)[]* =  []

*Defined in [app/collection/ResourceCollection.ts:29](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L29)*

___
<a id="instance"></a>

###  instance

**● instance**: *`R`*

*Defined in [app/collection/ResourceCollection.ts:33](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L33)*

___
<a id="items"></a>

### `<Protected>` items

**● items**: *`R`[]* =  []

*Overrides [Collection](collection.md).[items](collection.md#items)*

*Defined in [app/collection/ResourceCollection.ts:27](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L27)*

___

## Accessors

<a id="lodash"></a>

###  lodash

**get lodash**(): `LoDashExplicitWrapper`<`T`[]>

*Inherited from [Collection](collection.md).[lodash](collection.md#lodash)*

*Defined in [app/collection/Collection.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/Collection.ts#L10)*

**Returns:** `LoDashExplicitWrapper`<`T`[]>

___
<a id="params"></a>

###  params

**get params**(): [Dictionary](../interfaces/dictionary.md)<`any`>

*Defined in [app/collection/ResourceCollection.ts:35](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L35)*

**Returns:** [Dictionary](../interfaces/dictionary.md)<`any`>

___
<a id="spinnername"></a>

###  spinnerName

**get spinnerName**(): `string`

*Defined in [app/collection/ResourceCollection.ts:46](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L46)*

**Returns:** `string`

___

## Methods

<a id="add"></a>

###  add

▸ **add**(item: *`R`*, index?: *`undefined` \| `number`*): `void`

*Inherited from [Collection](collection.md).[add](collection.md#add)*

*Defined in [app/collection/Collection.ts:30](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/Collection.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| item | `R` |
| `Optional` index | `undefined` \| `number` |

**Returns:** `void`

___
<a id="addfilter"></a>

###  addFilter

▸ **addFilter**(filter: *[QueryFilter](../#queryfilter)*): `this`

*Defined in [app/collection/ResourceCollection.ts:66](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filter | [QueryFilter](../#queryfilter) |

**Returns:** `this`

___
<a id="addresource"></a>

###  addResource

▸ **addResource**(id: *[ID](../enums/lang.md#id)*, tag: *[TAG](../#tag)*, index?: *`undefined` \| `number`*): `void`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[addResource](../interfaces/iresourcecollection.md#addresource)*

*Defined in [app/collection/ResourceCollection.ts:99](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L99)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |
| tag | [TAG](../#tag) |
| `Optional` index | `undefined` \| `number` |

**Returns:** `void`

___
<a id="all"></a>

###  all

▸ **all**(): `T`[]

*Inherited from [Collection](collection.md).[all](collection.md#all)*

*Defined in [app/collection/Collection.ts:14](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/Collection.ts#L14)*

**Returns:** `T`[]

___
<a id="allwithplaceholder"></a>

###  allWithPlaceholder

▸ **allWithPlaceholder**(placeholder?: *`string` \| `null`*): `Array`<`R` \| `null`>

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[allWithPlaceholder](../interfaces/iresourcecollection.md#allwithplaceholder)*

*Defined in [app/collection/ResourceCollection.ts:87](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L87)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` placeholder | `string` \| `null` |  null |

**Returns:** `Array`<`R` \| `null`>

___
<a id="appendresource"></a>

###  appendResource

▸ **appendResource**(id: *[ID](../enums/lang.md#id)*, tag: *[TAG](../#tag)*): `this`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[appendResource](../interfaces/iresourcecollection.md#appendresource)*

*Defined in [app/collection/ResourceCollection.ts:116](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L116)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |
| tag | [TAG](../#tag) |

**Returns:** `this`

___
<a id="datafrom"></a>

###  dataFrom

▸ **dataFrom**(schemaRef: *`string`*): `Array`<[Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>>

*Defined in [app/collection/ResourceCollection.ts:75](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L75)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** `Array`<[Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>>

___
<a id="downloadcsv"></a>

###  downloadCsv

▸ **downloadCsv**(schemaRef?: *`string`*, customTitle?: *`undefined` \| `string`*): `void`

*Defined in [app/collection/ResourceCollection.ts:79](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L79)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` schemaRef | `string` | &quot;csv&quot; |
| `Optional` customTitle | `undefined` \| `string` | - |

**Returns:** `void`

___
<a id="first"></a>

###  first

▸ **first**(): `T`

*Inherited from [Collection](collection.md).[first](collection.md#first)*

*Defined in [app/collection/Collection.ts:22](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/Collection.ts#L22)*

**Returns:** `T`

___
<a id="get"></a>

###  get

▸ **get**(index: *`number`*): `T`

*Inherited from [Collection](collection.md).[get](collection.md#get)*

*Defined in [app/collection/Collection.ts:18](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/Collection.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `T`

___
<a id="getmanyresource"></a>

###  getManyResource

▸ **getManyResource**(ids: *[ID](../enums/lang.md#id)[]*): `R`[]

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[getManyResource](../interfaces/iresourcecollection.md#getmanyresource)*

*Defined in [app/collection/ResourceCollection.ts:95](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L95)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ids | [ID](../enums/lang.md#id)[] |

**Returns:** `R`[]

___
<a id="getresource"></a>

###  getResource

▸ **getResource**(id: *[ID](../enums/lang.md#id) \| `null`*): `R` \| `null`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[getResource](../interfaces/iresourcecollection.md#getresource)*

*Defined in [app/collection/ResourceCollection.ts:91](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L91)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) \| `null` |

**Returns:** `R` \| `null`

___
<a id="headerfrom"></a>

###  headerFrom

▸ **headerFrom**(schemaRef: *`string`*): [Dictionary](../interfaces/dictionary.md)<`string`>

*Defined in [app/collection/ResourceCollection.ts:71](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L71)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** [Dictionary](../interfaces/dictionary.md)<`string`>

___
<a id="isempty"></a>

###  isEmpty

▸ **isEmpty**(): `boolean`

*Inherited from [Collection](collection.md).[isEmpty](collection.md#isempty)*

*Defined in [app/collection/Collection.ts:49](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/Collection.ts#L49)*

**Returns:** `boolean`

___
<a id="isnotempty"></a>

###  isNotEmpty

▸ **isNotEmpty**(): `boolean`

*Inherited from [Collection](collection.md).[isNotEmpty](collection.md#isnotempty)*

*Defined in [app/collection/Collection.ts:53](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/Collection.ts#L53)*

**Returns:** `boolean`

___
<a id="last"></a>

###  last

▸ **last**(): `T`

*Inherited from [Collection](collection.md).[last](collection.md#last)*

*Defined in [app/collection/Collection.ts:26](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/Collection.ts#L26)*

**Returns:** `T`

___
<a id="prependnullresource"></a>

###  prependNullResource

▸ **prependNullResource**(tag: *[TAG](../#tag)*, useI18n?: *`boolean`*): `this`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[prependNullResource](../interfaces/iresourcecollection.md#prependnullresource)*

*Defined in [app/collection/ResourceCollection.ts:112](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L112)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| tag | [TAG](../#tag) | - |
| `Default value` useI18n | `boolean` | true |

**Returns:** `this`

___
<a id="prependresource"></a>

###  prependResource

▸ **prependResource**(id: *[ID](../enums/lang.md#id)*, tag: *[TAG](../#tag)*): `this`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[prependResource](../interfaces/iresourcecollection.md#prependresource)*

*Defined in [app/collection/ResourceCollection.ts:107](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L107)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |
| tag | [TAG](../#tag) |

**Returns:** `this`

___
<a id="queryas"></a>

###  queryAs

▸ **queryAs**<`T`>(responseType: *[ResponseType](../#responsetype)<`T`>*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [app/collection/ResourceCollection.ts:58](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L58)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| responseType | [ResponseType](../#responsetype)<`T`> |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="queryasarray"></a>

###  queryAsArray

▸ **queryAsArray**(): `Promise`<`AxiosResponse`<`R`[]>>

*Defined in [app/collection/ResourceCollection.ts:50](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L50)*

**Returns:** `Promise`<`AxiosResponse`<`R`[]>>

___
<a id="remove"></a>

###  remove

▸ **remove**(item: *`R`*): `void`

*Inherited from [Collection](collection.md).[remove](collection.md#remove)*

*Defined in [app/collection/Collection.ts:38](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/Collection.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| item | `R` |

**Returns:** `void`

___
<a id="removeresource"></a>

###  removeResource

▸ **removeResource**(id: *[ID](../enums/lang.md#id)*): `void`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[removeResource](../interfaces/iresourcecollection.md#removeresource)*

*Defined in [app/collection/ResourceCollection.ts:103](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/ResourceCollection.ts#L103)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |

**Returns:** `void`

___
<a id="size"></a>

###  size

▸ **size**(): `number`

*Inherited from [Collection](collection.md).[size](collection.md#size)*

*Defined in [app/collection/Collection.ts:45](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/app/collection/Collection.ts#L45)*

**Returns:** `number`

___

