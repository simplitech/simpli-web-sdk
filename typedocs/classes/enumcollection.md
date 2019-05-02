[simpli-web-sdk](../README.md) > [EnumCollection](../classes/enumcollection.md)

# Class: EnumCollection

## Type parameters
#### E 
#### T 
## Hierarchy

 [Collection](collection.md)

**↳ EnumCollection**

## Implements

* [IResourceCollection](../interfaces/iresourcecollection.md)

## Index

### Constructors

* [constructor](enumcollection.md#constructor)

### Properties

* [items](enumcollection.md#items)

### Accessors

* [lodash](enumcollection.md#lodash)

### Methods

* [add](enumcollection.md#add)
* [addResource](enumcollection.md#addresource)
* [all](enumcollection.md#all)
* [allWithPlaceholder](enumcollection.md#allwithplaceholder)
* [appendResource](enumcollection.md#appendresource)
* [first](enumcollection.md#first)
* [get](enumcollection.md#get)
* [getManyResource](enumcollection.md#getmanyresource)
* [getResource](enumcollection.md#getresource)
* [isEmpty](enumcollection.md#isempty)
* [isNotEmpty](enumcollection.md#isnotempty)
* [last](enumcollection.md#last)
* [prependNullResource](enumcollection.md#prependnullresource)
* [prependResource](enumcollection.md#prependresource)
* [remove](enumcollection.md#remove)
* [removeResource](enumcollection.md#removeresource)
* [size](enumcollection.md#size)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new EnumCollection**(enumType: *[EnumType](../#enumtype)<`E`>*, i18nPath?: *`undefined` \| `string`*): [EnumCollection](enumcollection.md)

*Overrides [Collection](collection.md).[constructor](collection.md#constructor)*

*Defined in [app/collection/EnumCollection.ts:6](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/EnumCollection.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| enumType | [EnumType](../#enumtype)<`E`> |
| `Optional` i18nPath | `undefined` \| `string` |

**Returns:** [EnumCollection](enumcollection.md)

___

## Properties

<a id="items"></a>

### `<Protected>` items

**● items**: *[IResource](../interfaces/iresource.md)[]*

*Overrides [Collection](collection.md).[items](collection.md#items)*

*Defined in [app/collection/EnumCollection.ts:12](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/EnumCollection.ts#L12)*

___

## Accessors

<a id="lodash"></a>

###  lodash

**get lodash**(): `LoDashExplicitWrapper`<`T`[]>

*Inherited from [Collection](collection.md).[lodash](collection.md#lodash)*

*Defined in [app/collection/Collection.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/Collection.ts#L10)*

**Returns:** `LoDashExplicitWrapper`<`T`[]>

___

## Methods

<a id="add"></a>

###  add

▸ **add**(item: *`T`*, index?: *`undefined` \| `number`*): `void`

*Inherited from [Collection](collection.md).[add](collection.md#add)*

*Defined in [app/collection/Collection.ts:30](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/Collection.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| item | `T` |
| `Optional` index | `undefined` \| `number` |

**Returns:** `void`

___
<a id="addresource"></a>

###  addResource

▸ **addResource**(id: *[ID](../enums/lang.md#id)*, tag: *[TAG](../#tag)*, index?: *`undefined` \| `number`*): `void`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[addResource](../interfaces/iresourcecollection.md#addresource)*

*Defined in [app/collection/EnumCollection.ts:26](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/EnumCollection.ts#L26)*

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

*Defined in [app/collection/Collection.ts:14](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/Collection.ts#L14)*

**Returns:** `T`[]

___
<a id="allwithplaceholder"></a>

###  allWithPlaceholder

▸ **allWithPlaceholder**(placeholder?: *`string` \| `null`*): `Array`<[IResource](../interfaces/iresource.md) \| `null`>

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[allWithPlaceholder](../interfaces/iresourcecollection.md#allwithplaceholder)*

*Defined in [app/collection/EnumCollection.ts:14](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/EnumCollection.ts#L14)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` placeholder | `string` \| `null` |  null |

**Returns:** `Array`<[IResource](../interfaces/iresource.md) \| `null`>

___
<a id="appendresource"></a>

###  appendResource

▸ **appendResource**(id: *[ID](../enums/lang.md#id)*, tag: *[TAG](../#tag)*): `this`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[appendResource](../interfaces/iresourcecollection.md#appendresource)*

*Defined in [app/collection/EnumCollection.ts:43](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/EnumCollection.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |
| tag | [TAG](../#tag) |

**Returns:** `this`

___
<a id="first"></a>

###  first

▸ **first**(): `T`

*Inherited from [Collection](collection.md).[first](collection.md#first)*

*Defined in [app/collection/Collection.ts:22](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/Collection.ts#L22)*

**Returns:** `T`

___
<a id="get"></a>

###  get

▸ **get**(index: *`number`*): `T`

*Inherited from [Collection](collection.md).[get](collection.md#get)*

*Defined in [app/collection/Collection.ts:18](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/Collection.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `T`

___
<a id="getmanyresource"></a>

###  getManyResource

▸ **getManyResource**(ids: *[ID](../enums/lang.md#id)[]*): [IResource](../interfaces/iresource.md)[]

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[getManyResource](../interfaces/iresourcecollection.md#getmanyresource)*

*Defined in [app/collection/EnumCollection.ts:22](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/EnumCollection.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ids | [ID](../enums/lang.md#id)[] |

**Returns:** [IResource](../interfaces/iresource.md)[]

___
<a id="getresource"></a>

###  getResource

▸ **getResource**(id: *[ID](../enums/lang.md#id) \| `null`*): [IResource](../interfaces/iresource.md) \| `null`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[getResource](../interfaces/iresourcecollection.md#getresource)*

*Defined in [app/collection/EnumCollection.ts:18](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/EnumCollection.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) \| `null` |

**Returns:** [IResource](../interfaces/iresource.md) \| `null`

___
<a id="isempty"></a>

###  isEmpty

▸ **isEmpty**(): `boolean`

*Inherited from [Collection](collection.md).[isEmpty](collection.md#isempty)*

*Defined in [app/collection/Collection.ts:49](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/Collection.ts#L49)*

**Returns:** `boolean`

___
<a id="isnotempty"></a>

###  isNotEmpty

▸ **isNotEmpty**(): `boolean`

*Inherited from [Collection](collection.md).[isNotEmpty](collection.md#isnotempty)*

*Defined in [app/collection/Collection.ts:53](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/Collection.ts#L53)*

**Returns:** `boolean`

___
<a id="last"></a>

###  last

▸ **last**(): `T`

*Inherited from [Collection](collection.md).[last](collection.md#last)*

*Defined in [app/collection/Collection.ts:26](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/Collection.ts#L26)*

**Returns:** `T`

___
<a id="prependnullresource"></a>

###  prependNullResource

▸ **prependNullResource**(tag: *[TAG](../#tag)*, useI18n?: *`boolean`*): `this`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[prependNullResource](../interfaces/iresourcecollection.md#prependnullresource)*

*Defined in [app/collection/EnumCollection.ts:39](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/EnumCollection.ts#L39)*

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

*Defined in [app/collection/EnumCollection.ts:34](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/EnumCollection.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |
| tag | [TAG](../#tag) |

**Returns:** `this`

___
<a id="remove"></a>

###  remove

▸ **remove**(item: *`T`*): `void`

*Inherited from [Collection](collection.md).[remove](collection.md#remove)*

*Defined in [app/collection/Collection.ts:38](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/Collection.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| item | `T` |

**Returns:** `void`

___
<a id="removeresource"></a>

###  removeResource

▸ **removeResource**(id: *[ID](../enums/lang.md#id)*): `void`

*Implementation of [IResourceCollection](../interfaces/iresourcecollection.md).[removeResource](../interfaces/iresourcecollection.md#removeresource)*

*Defined in [app/collection/EnumCollection.ts:30](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/EnumCollection.ts#L30)*

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

*Defined in [app/collection/Collection.ts:45](https://github.com/simplitech/simpli-web-sdk/blob/a829314/src/app/collection/Collection.ts#L45)*

**Returns:** `number`

___

