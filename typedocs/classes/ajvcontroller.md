[simpli-web-sdk](../README.md) > [AjvController](../classes/ajvcontroller.md)

# Class: AjvController

## Hierarchy

**AjvController**

## Index

### Constructors

* [constructor](ajvcontroller.md#constructor)

### Properties

* [i18n](ajvcontroller.md#i18n)
* [instance](ajvcontroller.md#instance)

### Methods

* [validate](ajvcontroller.md#validate)
* [validateErrors](ajvcontroller.md#validateerrors)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AjvController**(locale: *[Lang](../enums/lang.md)*, messages?: *[Dictionary](../interfaces/dictionary.md)<`function`>*): [AjvController](ajvcontroller.md)

*Defined in [app/ajv/AjvController.ts:8](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/ajv/AjvController.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| locale | [Lang](../enums/lang.md) |
| `Optional` messages | [Dictionary](../interfaces/dictionary.md)<`function`> |

**Returns:** [AjvController](ajvcontroller.md)

___

## Properties

<a id="i18n"></a>

###  i18n

**● i18n**: *[AjvI18n](ajvi18n.md)*

*Defined in [app/ajv/AjvController.ts:26](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/ajv/AjvController.ts#L26)*

___
<a id="instance"></a>

###  instance

**● instance**: *`AnotherJsonValidator.Ajv`*

*Defined in [app/ajv/AjvController.ts:27](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/ajv/AjvController.ts#L27)*

___

## Methods

<a id="validate"></a>

###  validate

▸ **validate**(schemaKeyRef: *`object` \| `string` \| `boolean`*, data: *`any`*): `void`

*Defined in [app/ajv/AjvController.ts:40](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/ajv/AjvController.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaKeyRef | `object` \| `string` \| `boolean` |
| data | `any` |

**Returns:** `void`

___
<a id="validateerrors"></a>

###  validateErrors

▸ **validateErrors**(schemaKeyRef: *`object` \| `string` \| `boolean`*, data: *`any`*): `ErrorObject`[] \| `null`

*Defined in [app/ajv/AjvController.ts:29](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/ajv/AjvController.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaKeyRef | `object` \| `string` \| `boolean` |
| data | `any` |

**Returns:** `ErrorObject`[] \| `null`

___

