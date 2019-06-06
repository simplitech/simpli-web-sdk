[simpli-web-sdk](../README.md) > [IResourceCollection](../interfaces/iresourcecollection.md)

# Interface: IResourceCollection

## Hierarchy

**IResourceCollection**

## Implemented by

* [EnumCollection](../classes/enumcollection.md)
* [PageCollection](../classes/pagecollection.md)
* [ResourceCollection](../classes/resourcecollection.md)

## Index

### Methods

* [addResource](iresourcecollection.md#addresource)
* [allWithPlaceholder](iresourcecollection.md#allwithplaceholder)
* [appendResource](iresourcecollection.md#appendresource)
* [getManyResource](iresourcecollection.md#getmanyresource)
* [getResource](iresourcecollection.md#getresource)
* [prependNullResource](iresourcecollection.md#prependnullresource)
* [prependResource](iresourcecollection.md#prependresource)
* [removeResource](iresourcecollection.md#removeresource)

---

## Methods

<a id="addresource"></a>

###  addResource

▸ **addResource**(id: *[ID](../enums/lang.md#id)*, tag: *[TAG](../#tag)*, index?: *`undefined` \| `number`*): `void`

*Defined in [interfaces/resource.interface.ts:31](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/resource.interface.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |
| tag | [TAG](../#tag) |
| `Optional` index | `undefined` \| `number` |

**Returns:** `void`

___
<a id="allwithplaceholder"></a>

###  allWithPlaceholder

▸ **allWithPlaceholder**(placeholder: *`string` \| `null`*): `Array`<[IResource](iresource.md) \| `null`>

*Defined in [interfaces/resource.interface.ts:25](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/resource.interface.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| placeholder | `string` \| `null` |

**Returns:** `Array`<[IResource](iresource.md) \| `null`>

___
<a id="appendresource"></a>

###  appendResource

▸ **appendResource**(id: *[ID](../enums/lang.md#id)*, tag: *[TAG](../#tag)*): `this`

*Defined in [interfaces/resource.interface.ts:39](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/resource.interface.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |
| tag | [TAG](../#tag) |

**Returns:** `this`

___
<a id="getmanyresource"></a>

###  getManyResource

▸ **getManyResource**(ids: *[ID](../enums/lang.md#id)[]*): [IResource](iresource.md)[]

*Defined in [interfaces/resource.interface.ts:29](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/resource.interface.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ids | [ID](../enums/lang.md#id)[] |

**Returns:** [IResource](iresource.md)[]

___
<a id="getresource"></a>

###  getResource

▸ **getResource**(id: *[ID](../enums/lang.md#id) \| `null`*): [IResource](iresource.md) \| `null`

*Defined in [interfaces/resource.interface.ts:27](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/resource.interface.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) \| `null` |

**Returns:** [IResource](iresource.md) \| `null`

___
<a id="prependnullresource"></a>

###  prependNullResource

▸ **prependNullResource**(tag: *[TAG](../#tag)*, useI18n: *`boolean`*): `this`

*Defined in [interfaces/resource.interface.ts:37](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/resource.interface.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | [TAG](../#tag) |
| useI18n | `boolean` |

**Returns:** `this`

___
<a id="prependresource"></a>

###  prependResource

▸ **prependResource**(id: *[ID](../enums/lang.md#id)*, tag: *[TAG](../#tag)*): `this`

*Defined in [interfaces/resource.interface.ts:35](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/resource.interface.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |
| tag | [TAG](../#tag) |

**Returns:** `this`

___
<a id="removeresource"></a>

###  removeResource

▸ **removeResource**(id: *[ID](../enums/lang.md#id)*): `void`

*Defined in [interfaces/resource.interface.ts:33](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/interfaces/resource.interface.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | [ID](../enums/lang.md#id) |

**Returns:** `void`

___

