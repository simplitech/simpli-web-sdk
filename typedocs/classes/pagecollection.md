[simpli-web-sdk](../README.md) > [PageCollection](../classes/pagecollection.md)

# Class: PageCollection

## Type parameters
#### R :  [Resource](resource.md)
## Hierarchy

↳  [ResourceCollection](resourcecollection.md)<`R`>

**↳ PageCollection**

## Implements

* [IResourceCollection](../interfaces/iresourcecollection.md)

## Index

### Constructors

* [constructor](pagecollection.md#constructor)

### Properties

* [asc](pagecollection.md#asc)
* [classType](pagecollection.md#classtype)
* [currentPage](pagecollection.md#currentpage)
* [filters](pagecollection.md#filters)
* [instance](pagecollection.md#instance)
* [items](pagecollection.md#items)
* [orderBy](pagecollection.md#orderby)
* [perPage](pagecollection.md#perpage)
* [search](pagecollection.md#search)
* [total](pagecollection.md#total)
* [defaultCurrentPage](pagecollection.md#defaultcurrentpage)
* [defaultMinCharToSearch](pagecollection.md#defaultminchartosearch)
* [defaultPerPage](pagecollection.md#defaultperpage)

### Accessors

* [lastPage](pagecollection.md#lastpage)
* [lodash](pagecollection.md#lodash)
* [params](pagecollection.md#params)
* [spinnerName](pagecollection.md#spinnername)

### Methods

* [add](pagecollection.md#add)
* [addFilter](pagecollection.md#addfilter)
* [addResource](pagecollection.md#addresource)
* [all](pagecollection.md#all)
* [allWithPlaceholder](pagecollection.md#allwithplaceholder)
* [appendResource](pagecollection.md#appendresource)
* [cleanFilters](pagecollection.md#cleanfilters)
* [dataFrom](pagecollection.md#datafrom)
* [downloadCsv](pagecollection.md#downloadcsv)
* [first](pagecollection.md#first)
* [get](pagecollection.md#get)
* [getManyResource](pagecollection.md#getmanyresource)
* [getResource](pagecollection.md#getresource)
* [headerFrom](pagecollection.md#headerfrom)
* [isEmpty](pagecollection.md#isempty)
* [isNotEmpty](pagecollection.md#isnotempty)
* [last](pagecollection.md#last)
* [prependNullResource](pagecollection.md#prependnullresource)
* [prependResource](pagecollection.md#prependresource)
* [queryAs](pagecollection.md#queryas)
* [queryAsArray](pagecollection.md#queryasarray)
* [queryAsPage](pagecollection.md#queryaspage)
* [queryCurrentPage](pagecollection.md#querycurrentpage)
* [queryNextPage](pagecollection.md#querynextpage)
* [queryOrderBy](pagecollection.md#queryorderby)
* [queryPrevPage](pagecollection.md#queryprevpage)
* [querySearch](pagecollection.md#querysearch)
* [remove](pagecollection.md#remove)
* [removeResource](pagecollection.md#removeresource)
* [setAsc](pagecollection.md#setasc)
* [setCurrentPage](pagecollection.md#setcurrentpage)
* [setOrderBy](pagecollection.md#setorderby)
* [setPerPage](pagecollection.md#setperpage)
* [setSearch](pagecollection.md#setsearch)
* [size](pagecollection.md#size)
* [whole](pagecollection.md#whole)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PageCollection**(classType: *[ClassType](../#classtype)<`R`>*): [PageCollection](pagecollection.md)

*Overrides [ResourceCollection](resourcecollection.md).[constructor](resourcecollection.md#constructor)*

*Defined in [app/collection/PageCollection.ts:9](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| classType | [ClassType](../#classtype)<`R`> |

**Returns:** [PageCollection](pagecollection.md)

___

## Properties

<a id="asc"></a>

###  asc

**● asc**: *`boolean` \| `null`* =  null

*Defined in [app/collection/PageCollection.ts:32](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L32)*

___
<a id="classtype"></a>

###  classType

**● classType**: *[ClassType](../#classtype)<`R`>*

*Inherited from [ResourceCollection](resourcecollection.md).[classType](resourcecollection.md#classtype)*

*Defined in [app/collection/ResourceCollection.ts:31](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L31)*

___
<a id="currentpage"></a>

###  currentPage

**● currentPage**: *`number` \| `null`* =  PageCollection.defaultCurrentPage

*Defined in [app/collection/PageCollection.ts:23](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L23)*

___
<a id="filters"></a>

### `<Protected>` filters

**● filters**: *[QueryFilter](../#queryfilter)[]* =  []

*Inherited from [ResourceCollection](resourcecollection.md).[filters](resourcecollection.md#filters)*

*Defined in [app/collection/ResourceCollection.ts:29](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L29)*

___
<a id="instance"></a>

###  instance

**● instance**: *`R`*

*Inherited from [ResourceCollection](resourcecollection.md).[instance](resourcecollection.md#instance)*

*Defined in [app/collection/ResourceCollection.ts:33](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L33)*

___
<a id="items"></a>

### `<Protected>` items

**● items**: *`R`[]* =  []

*Overrides [ResourceCollection](resourcecollection.md).[items](resourcecollection.md#items)*

*Defined in [app/collection/PageCollection.ts:36](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L36)*

___
<a id="orderby"></a>

###  orderBy

**● orderBy**: *`string` \| `null`* =  null

*Defined in [app/collection/PageCollection.ts:29](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L29)*

___
<a id="perpage"></a>

###  perPage

**● perPage**: *`number` \| `null`* =  PageCollection.defaultPerPage

*Defined in [app/collection/PageCollection.ts:26](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L26)*

___
<a id="search"></a>

###  search

**● search**: *`string` \| `null`* =  null

*Defined in [app/collection/PageCollection.ts:20](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L20)*

___
<a id="total"></a>

###  total

**● total**: *`number` \| `null`* =  null

*Defined in [app/collection/PageCollection.ts:39](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L39)*

___
<a id="defaultcurrentpage"></a>

### `<Static>` defaultCurrentPage

**● defaultCurrentPage**: *`number`* = 0

*Defined in [app/collection/PageCollection.ts:16](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L16)*

___
<a id="defaultminchartosearch"></a>

### `<Static>` defaultMinCharToSearch

**● defaultMinCharToSearch**: *`number`* = 3

*Defined in [app/collection/PageCollection.ts:15](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L15)*

___
<a id="defaultperpage"></a>

### `<Static>` defaultPerPage

**● defaultPerPage**: *`number`* = 20

*Defined in [app/collection/PageCollection.ts:17](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L17)*

___

## Accessors

<a id="lastpage"></a>

###  lastPage

**get lastPage**(): `number`

*Defined in [app/collection/PageCollection.ts:41](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L41)*

**Returns:** `number`

___
<a id="lodash"></a>

###  lodash

**get lodash**(): `LoDashExplicitWrapper`<`T`[]>

*Inherited from [Collection](collection.md).[lodash](collection.md#lodash)*

*Defined in [app/collection/Collection.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L10)*

**Returns:** `LoDashExplicitWrapper`<`T`[]>

___
<a id="params"></a>

###  params

**get params**(): [Dictionary](../interfaces/dictionary.md)<`any`>

*Inherited from [ResourceCollection](resourcecollection.md).[params](resourcecollection.md#params)*

*Defined in [app/collection/ResourceCollection.ts:35](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L35)*

**Returns:** [Dictionary](../interfaces/dictionary.md)<`any`>

___
<a id="spinnername"></a>

###  spinnerName

**get spinnerName**(): `string`

*Inherited from [ResourceCollection](resourcecollection.md).[spinnerName](resourcecollection.md#spinnername)*

*Defined in [app/collection/ResourceCollection.ts:46](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L46)*

**Returns:** `string`

___

## Methods

<a id="add"></a>

###  add

▸ **add**(item: *`R`*, index?: *`undefined` \| `number`*): `void`

*Inherited from [Collection](collection.md).[add](collection.md#add)*

*Defined in [app/collection/Collection.ts:30](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L30)*

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

*Inherited from [ResourceCollection](resourcecollection.md).[addFilter](resourcecollection.md#addfilter)*

*Defined in [app/collection/ResourceCollection.ts:66](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L66)*

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

*Inherited from [ResourceCollection](resourcecollection.md).[addResource](resourcecollection.md#addresource)*

*Defined in [app/collection/ResourceCollection.ts:104](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L104)*

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

*Defined in [app/collection/Collection.ts:14](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L14)*

**Returns:** `T`[]

___
<a id="allwithplaceholder"></a>

###  allWithPlaceholder

▸ **allWithPlaceholder**(placeholder?: *`string` \| `null`*): `Array`<`R` \| `null`>

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[allWithPlaceholder](../interfaces/iresourcecollection.md#allwithplaceholder)*

*Inherited from [ResourceCollection](resourcecollection.md).[allWithPlaceholder](resourcecollection.md#allwithplaceholder)*

*Defined in [app/collection/ResourceCollection.ts:92](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L92)*

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

*Inherited from [ResourceCollection](resourcecollection.md).[appendResource](resourcecollection.md#appendresource)*

*Defined in [app/collection/ResourceCollection.ts:121](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L121)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |
| tag | [TAG](../#tag) |

**Returns:** `this`

___
<a id="cleanfilters"></a>

###  cleanFilters

▸ **cleanFilters**(): `this`

*Inherited from [ResourceCollection](resourcecollection.md).[cleanFilters](resourcecollection.md#cleanfilters)*

*Defined in [app/collection/ResourceCollection.ts:71](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L71)*

**Returns:** `this`

___
<a id="datafrom"></a>

###  dataFrom

▸ **dataFrom**(schemaRef: *`string`*): `Array`<[Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>>

*Inherited from [ResourceCollection](resourcecollection.md).[dataFrom](resourcecollection.md#datafrom)*

*Defined in [app/collection/ResourceCollection.ts:80](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L80)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** `Array`<[Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>>

___
<a id="downloadcsv"></a>

###  downloadCsv

▸ **downloadCsv**(schemaRef?: *`string`*, customTitle?: *`undefined` \| `string`*): `void`

*Inherited from [ResourceCollection](resourcecollection.md).[downloadCsv](resourcecollection.md#downloadcsv)*

*Defined in [app/collection/ResourceCollection.ts:84](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L84)*

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

*Defined in [app/collection/Collection.ts:22](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L22)*

**Returns:** `T`

___
<a id="get"></a>

###  get

▸ **get**(index: *`number`*): `T`

*Inherited from [Collection](collection.md).[get](collection.md#get)*

*Defined in [app/collection/Collection.ts:18](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L18)*

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

*Inherited from [ResourceCollection](resourcecollection.md).[getManyResource](resourcecollection.md#getmanyresource)*

*Defined in [app/collection/ResourceCollection.ts:100](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L100)*

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

*Inherited from [ResourceCollection](resourcecollection.md).[getResource](resourcecollection.md#getresource)*

*Defined in [app/collection/ResourceCollection.ts:96](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L96)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) \| `null` |

**Returns:** `R` \| `null`

___
<a id="headerfrom"></a>

###  headerFrom

▸ **headerFrom**(schemaRef: *`string`*): [Dictionary](../interfaces/dictionary.md)<`string`>

*Inherited from [ResourceCollection](resourcecollection.md).[headerFrom](resourcecollection.md#headerfrom)*

*Defined in [app/collection/ResourceCollection.ts:76](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L76)*

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

*Defined in [app/collection/Collection.ts:49](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L49)*

**Returns:** `boolean`

___
<a id="isnotempty"></a>

###  isNotEmpty

▸ **isNotEmpty**(): `boolean`

*Inherited from [Collection](collection.md).[isNotEmpty](collection.md#isnotempty)*

*Defined in [app/collection/Collection.ts:53](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L53)*

**Returns:** `boolean`

___
<a id="last"></a>

###  last

▸ **last**(): `T`

*Inherited from [Collection](collection.md).[last](collection.md#last)*

*Defined in [app/collection/Collection.ts:26](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L26)*

**Returns:** `T`

___
<a id="prependnullresource"></a>

###  prependNullResource

▸ **prependNullResource**(tag: *[TAG](../#tag)*, useI18n?: *`boolean`*): `this`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[prependNullResource](../interfaces/iresourcecollection.md#prependnullresource)*

*Inherited from [ResourceCollection](resourcecollection.md).[prependNullResource](resourcecollection.md#prependnullresource)*

*Defined in [app/collection/ResourceCollection.ts:117](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L117)*

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

*Inherited from [ResourceCollection](resourcecollection.md).[prependResource](resourcecollection.md#prependresource)*

*Defined in [app/collection/ResourceCollection.ts:112](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L112)*

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

*Inherited from [ResourceCollection](resourcecollection.md).[queryAs](resourcecollection.md#queryas)*

*Defined in [app/collection/ResourceCollection.ts:58](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L58)*

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

*Inherited from [ResourceCollection](resourcecollection.md).[queryAsArray](resourcecollection.md#queryasarray)*

*Defined in [app/collection/ResourceCollection.ts:50](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L50)*

**Returns:** `Promise`<`AxiosResponse`<`R`[]>>

___
<a id="queryaspage"></a>

###  queryAsPage

▸ **queryAsPage**(): `Promise`<`AxiosResponse`<`this`>>

*Defined in [app/collection/PageCollection.ts:74](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L74)*

**Returns:** `Promise`<`AxiosResponse`<`this`>>

___
<a id="querycurrentpage"></a>

###  queryCurrentPage

▸ **queryCurrentPage**(val: *`number`*): `Promise`<`AxiosResponse`<`this`>>

*Defined in [app/collection/PageCollection.ts:100](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L100)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `number` |

**Returns:** `Promise`<`AxiosResponse`<`this`>>

___
<a id="querynextpage"></a>

###  queryNextPage

▸ **queryNextPage**(): `Promise`<`AxiosResponse`<`this`> \| `void`>

*Defined in [app/collection/PageCollection.ts:117](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L117)*

**Returns:** `Promise`<`AxiosResponse`<`this`> \| `void`>

___
<a id="queryorderby"></a>

###  queryOrderBy

▸ **queryOrderBy**(column: *`string`*): `Promise`<`AxiosResponse`<`this`>>

*Defined in [app/collection/PageCollection.ts:90](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L90)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| column | `string` |

**Returns:** `Promise`<`AxiosResponse`<`this`>>

___
<a id="queryprevpage"></a>

###  queryPrevPage

▸ **queryPrevPage**(): `Promise`<`AxiosResponse`<`this`> \| `void`>

*Defined in [app/collection/PageCollection.ts:109](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L109)*

**Returns:** `Promise`<`AxiosResponse`<`this`> \| `void`>

___
<a id="querysearch"></a>

###  querySearch

▸ **querySearch**(): `Promise`<`AxiosResponse`<`this`> \| `void`>

*Defined in [app/collection/PageCollection.ts:82](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L82)*

**Returns:** `Promise`<`AxiosResponse`<`this`> \| `void`>

___
<a id="remove"></a>

###  remove

▸ **remove**(item: *`R`*): `void`

*Inherited from [Collection](collection.md).[remove](collection.md#remove)*

*Defined in [app/collection/Collection.ts:38](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L38)*

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

*Inherited from [ResourceCollection](resourcecollection.md).[removeResource](resourcecollection.md#removeresource)*

*Defined in [app/collection/ResourceCollection.ts:108](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/ResourceCollection.ts#L108)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |

**Returns:** `void`

___
<a id="setasc"></a>

###  setAsc

▸ **setAsc**(val: *`boolean` \| `null`*): `this`

*Defined in [app/collection/PageCollection.ts:69](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `boolean` \| `null` |

**Returns:** `this`

___
<a id="setcurrentpage"></a>

###  setCurrentPage

▸ **setCurrentPage**(val: *`number` \| `null`*): `this`

*Defined in [app/collection/PageCollection.ts:54](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `number` \| `null` |

**Returns:** `this`

___
<a id="setorderby"></a>

###  setOrderBy

▸ **setOrderBy**(val: *`string` \| `null`*): `this`

*Defined in [app/collection/PageCollection.ts:64](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `string` \| `null` |

**Returns:** `this`

___
<a id="setperpage"></a>

###  setPerPage

▸ **setPerPage**(val: *`number` \| `null`*): `this`

*Defined in [app/collection/PageCollection.ts:59](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L59)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `number` \| `null` |

**Returns:** `this`

___
<a id="setsearch"></a>

###  setSearch

▸ **setSearch**(val: *`string` \| `null`*): `this`

*Defined in [app/collection/PageCollection.ts:49](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `string` \| `null` |

**Returns:** `this`

___
<a id="size"></a>

###  size

▸ **size**(): `number`

*Inherited from [Collection](collection.md).[size](collection.md#size)*

*Defined in [app/collection/Collection.ts:45](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L45)*

**Returns:** `number`

___
<a id="whole"></a>

###  whole

▸ **whole**(): `this`

*Defined in [app/collection/PageCollection.ts:45](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/PageCollection.ts#L45)*

**Returns:** `this`

___

