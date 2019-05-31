[simpli-web-sdk](../README.md) > [Collection](../classes/collection.md)

# Class: Collection

## Type parameters
#### T 
## Hierarchy

**Collection**

↳  [EnumCollection](enumcollection.md)

↳  [ResourceCollection](resourcecollection.md)

## Index

### Constructors

* [constructor](collection.md#constructor)

### Properties

* [items](collection.md#items)

### Accessors

* [lodash](collection.md#lodash)

### Methods

* [add](collection.md#add)
* [all](collection.md#all)
* [first](collection.md#first)
* [get](collection.md#get)
* [isEmpty](collection.md#isempty)
* [isNotEmpty](collection.md#isnotempty)
* [last](collection.md#last)
* [remove](collection.md#remove)
* [size](collection.md#size)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Collection**(items?: *`T`[]*): [Collection](collection.md)

*Defined in [app/collection/Collection.ts:3](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L3)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` items | `T`[] |  [] |

**Returns:** [Collection](collection.md)

___

## Properties

<a id="items"></a>

### `<Protected>` items

**● items**: *`T`[]*

*Defined in [app/collection/Collection.ts:8](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L8)*

___

## Accessors

<a id="lodash"></a>

###  lodash

**get lodash**(): `LoDashExplicitWrapper`<`T`[]>

*Defined in [app/collection/Collection.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L10)*

**Returns:** `LoDashExplicitWrapper`<`T`[]>

___

## Methods

<a id="add"></a>

###  add

▸ **add**(item: *`T`*, index?: *`undefined` \| `number`*): `void`

*Defined in [app/collection/Collection.ts:30](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| item | `T` |
| `Optional` index | `undefined` \| `number` |

**Returns:** `void`

___
<a id="all"></a>

###  all

▸ **all**(): `T`[]

*Defined in [app/collection/Collection.ts:14](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L14)*

**Returns:** `T`[]

___
<a id="first"></a>

###  first

▸ **first**(): `T`

*Defined in [app/collection/Collection.ts:22](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L22)*

**Returns:** `T`

___
<a id="get"></a>

###  get

▸ **get**(index: *`number`*): `T`

*Defined in [app/collection/Collection.ts:18](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `T`

___
<a id="isempty"></a>

###  isEmpty

▸ **isEmpty**(): `boolean`

*Defined in [app/collection/Collection.ts:49](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L49)*

**Returns:** `boolean`

___
<a id="isnotempty"></a>

###  isNotEmpty

▸ **isNotEmpty**(): `boolean`

*Defined in [app/collection/Collection.ts:53](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L53)*

**Returns:** `boolean`

___
<a id="last"></a>

###  last

▸ **last**(): `T`

*Defined in [app/collection/Collection.ts:26](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L26)*

**Returns:** `T`

___
<a id="remove"></a>

###  remove

▸ **remove**(item: *`T`*): `void`

*Defined in [app/collection/Collection.ts:38](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| item | `T` |

**Returns:** `void`

___
<a id="size"></a>

###  size

▸ **size**(): `number`

*Defined in [app/collection/Collection.ts:45](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/collection/Collection.ts#L45)*

**Returns:** `number`

___

