[simpli-web-sdk](../README.md) > [SchemaBuilder](../classes/schemabuilder.md)

# Class: SchemaBuilder

## Type parameters
#### M 
## Hierarchy

**SchemaBuilder**

## Implements

* [SchemaResult](../interfaces/schemaresult.md)<`M`>

## Index

### Constructors

* [constructor](schemabuilder.md#constructor)

### Properties

* [attrs](schemabuilder.md#attrs)
* [fieldName](schemabuilder.md#fieldname)
* [listeners](schemabuilder.md#listeners)
* [model](schemabuilder.md#model)
* [schema](schemabuilder.md#schema)

### Methods

* [get](schemabuilder.md#get)
* [getAjv](schemabuilder.md#getajv)
* [getComponent](schemabuilder.md#getcomponent)
* [getData](schemabuilder.md#getdata)
* [setAttrs](schemabuilder.md#setattrs)
* [setListeners](schemabuilder.md#setlisteners)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SchemaBuilder**(schema: *[Schema](schema.md)*, model: *`M`*, fieldName: *`string`*): [SchemaBuilder](schemabuilder.md)

*Defined in [app/utils/SchemaBuilder.ts:4](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L4)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schema | [Schema](schema.md) |
| model | `M` |
| fieldName | `string` |

**Returns:** [SchemaBuilder](schemabuilder.md)

___

## Properties

<a id="attrs"></a>

### `<Optional>` attrs

**● attrs**: *`Record`<`string`, `string`>*

*Implementation of [SchemaResult](../interfaces/schemaresult.md).[attrs](../interfaces/schemaresult.md#attrs)*

*Defined in [app/utils/SchemaBuilder.ts:24](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L24)*

___
<a id="fieldname"></a>

###  fieldName

**● fieldName**: *`string`*

*Implementation of [SchemaResult](../interfaces/schemaresult.md).[fieldName](../interfaces/schemaresult.md#fieldname)*

*Defined in [app/utils/SchemaBuilder.ts:23](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L23)*

___
<a id="listeners"></a>

### `<Optional>` listeners

**● listeners**: *`Record`<`string`, `Function` \| `Function`[]>*

*Implementation of [SchemaResult](../interfaces/schemaresult.md).[listeners](../interfaces/schemaresult.md#listeners)*

*Defined in [app/utils/SchemaBuilder.ts:25](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L25)*

___
<a id="model"></a>

###  model

**● model**: *`M`*

*Implementation of [SchemaResult](../interfaces/schemaresult.md).[model](../interfaces/schemaresult.md#model)*

*Defined in [app/utils/SchemaBuilder.ts:22](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L22)*

___
<a id="schema"></a>

###  schema

**● schema**: *[Schema](schema.md)*

*Defined in [app/utils/SchemaBuilder.ts:21](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L21)*

___

## Methods

<a id="get"></a>

###  get

▸ **get**(): [FieldContent](../#fieldcontent)

*Defined in [app/utils/SchemaBuilder.ts:27](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L27)*

**Returns:** [FieldContent](../#fieldcontent)

___
<a id="getajv"></a>

###  getAjv

▸ **getAjv**<`V`>(): [FieldValidation](../#fieldvalidation)<`V`> \| `null`

*Defined in [app/utils/SchemaBuilder.ts:48](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L48)*

**Type parameters:**

#### V 

**Returns:** [FieldValidation](../#fieldvalidation)<`V`> \| `null`

___
<a id="getcomponent"></a>

###  getComponent

▸ **getComponent**<`V`>(): [FieldComponent](../interfaces/fieldcomponent.md)<`V`> \| `null`

*Defined in [app/utils/SchemaBuilder.ts:40](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L40)*

**Type parameters:**

#### V 

**Returns:** [FieldComponent](../interfaces/fieldcomponent.md)<`V`> \| `null`

___
<a id="getdata"></a>

###  getData

▸ **getData**(): [FieldData](../#fielddata)

*Defined in [app/utils/SchemaBuilder.ts:32](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L32)*

**Returns:** [FieldData](../#fielddata)

___
<a id="setattrs"></a>

###  setAttrs

▸ **setAttrs**(val: *`Record`<`string`, `string`>*): `this`

*Defined in [app/utils/SchemaBuilder.ts:11](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `Record`<`string`, `string`> |

**Returns:** `this`

___
<a id="setlisteners"></a>

###  setListeners

▸ **setListeners**(val: *`Record`<`string`, `Function` \| `Function`[]>*): `this`

*Defined in [app/utils/SchemaBuilder.ts:16](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/SchemaBuilder.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `Record`<`string`, `Function` \| `Function`[]> |

**Returns:** `this`

___

