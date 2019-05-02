[simpli-web-sdk](../README.md) > [AdapPagination](../classes/adappagination.md)

# Class: AdapPagination

## Hierarchy

 `object` & `object` & `Vue`<`this`>

**↳ AdapPagination**

## Index

### Properties

* [collection](adappagination.md#collection)
* [gap](adappagination.md#gap)
* [spinner](adappagination.md#spinner)

### Accessors

* [current](adappagination.md#current)
* [first](adappagination.md#first)
* [last](adappagination.md#last)

### Methods

* [goto](adappagination.md#goto)
* [index](adappagination.md#index)
* [next](adappagination.md#next)
* [prev](adappagination.md#prev)

---

## Properties

<a id="collection"></a>

###  collection

**● collection**: *[PageCollection](pagecollection.md)<[Resource](resource.md)>*

*Defined in [components/adap/AdapPagination.ts:40](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/adap/AdapPagination.ts#L40)*

___
<a id="gap"></a>

###  gap

**● gap**: *`number`*

*Defined in [components/adap/AdapPagination.ts:43](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/adap/AdapPagination.ts#L43)*

___
<a id="spinner"></a>

###  spinner

**● spinner**: *`string`*

*Defined in [components/adap/AdapPagination.ts:46](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/adap/AdapPagination.ts#L46)*

___

## Accessors

<a id="current"></a>

###  current

**get current**(): `number`

*Defined in [components/adap/AdapPagination.ts:52](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/adap/AdapPagination.ts#L52)*

**Returns:** `number`

___
<a id="first"></a>

###  first

**get first**(): `number`

*Defined in [components/adap/AdapPagination.ts:48](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/adap/AdapPagination.ts#L48)*

**Returns:** `number`

___
<a id="last"></a>

###  last

**get last**(): `number`

*Defined in [components/adap/AdapPagination.ts:56](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/adap/AdapPagination.ts#L56)*

**Returns:** `number`

___

## Methods

<a id="goto"></a>

###  goto

▸ **goto**(n: *`number`*): `Promise`<`void`>

*Defined in [components/adap/AdapPagination.ts:60](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/adap/AdapPagination.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `Promise`<`void`>

___
<a id="index"></a>

###  index

▸ **index**(n: *`number`*): `number`

*Defined in [components/adap/AdapPagination.ts:72](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/adap/AdapPagination.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `number`

___
<a id="next"></a>

###  next

▸ **next**(): `Promise`<`void`>

*Defined in [components/adap/AdapPagination.ts:64](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/adap/AdapPagination.ts#L64)*

**Returns:** `Promise`<`void`>

___
<a id="prev"></a>

###  prev

▸ **prev**(): `Promise`<`void`>

*Defined in [components/adap/AdapPagination.ts:68](https://github.com/simplitech/simpli-web-sdk/blob/4ed922b/src/components/adap/AdapPagination.ts#L68)*

**Returns:** `Promise`<`void`>

___

