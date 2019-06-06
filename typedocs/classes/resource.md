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

*Defined in [app/utils/Resource.ts:21](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L21)*

___
<a id="_customactionconfig"></a>

###  $customActionConfig

**● $customActionConfig**: *[ResourceActionConfig](../interfaces/resourceactionconfig.md)*

*Defined in [app/utils/Resource.ts:19](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L19)*

___
<a id="_endpoint"></a>

###  $endpoint

**● $endpoint**: *`string`* = ""

*Defined in [app/utils/Resource.ts:17](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L17)*

___
<a id="_schemaset"></a>

###  $schemaSet

**● $schemaSet**: *[SchemaSet](../interfaces/schemaset.md)*

*Implementation of [ISchema](../interfaces/ischema.md).[$schemaSet](../interfaces/ischema.md#_schemaset)*

*Inherited from [Model](model.md).[$schemaSet](model.md#_schemaset)*

*Defined in [app/utils/Model.ts:33](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L33)*

Associates instances of Schema into a model. `` ` ``typescript import {Model, SchemaSet, RequestExclude} from 'simpli-web-sdk' import {InputUserSchema} from '@/schema/User/InputUserSchema' import {ListUserSchema} from '@/schema/User/ListUserSchema' import {CsvUserSchema} from '@/schema/User/CsvUserSchema'

export class User extends Model { @RequestExclude() // Exclude this field from request readonly $schemaSet: SchemaSet = { input: new InputUserSchema(), list: new ListUserSchema(), csv: new CsvUserSchema(), }

email: string \| null = null name: string \| null = null } `` ` ``

___

## Accessors

<a id="_action"></a>

###  $action

**get $action**(): [ResourceAction](../interfaces/resourceaction.md)

*Defined in [app/utils/Resource.ts:23](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L23)*

**Returns:** [ResourceAction](../interfaces/resourceaction.md)

___
<a id="_allparamkeys"></a>

###  $allParamKeys

**get $allParamKeys**(): `string`[]

*Defined in [app/utils/Resource.ts:101](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L101)*

**Returns:** `string`[]

___
<a id="_firstparamkey"></a>

###  $firstParamKey

**get $firstParamKey**(): `null` \| `string`

*Defined in [app/utils/Resource.ts:115](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L115)*

**Returns:** `null` \| `string`

___
<a id="_id"></a>

###  $id

**get $id**(): `string` \| `number`

**set $id**(val: *[ID](../enums/lang.md#id)*): `any`

*Defined in [app/utils/Resource.ts:7](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L7)*

**Returns:** `string` \| `number`

*Defined in [app/utils/Resource.ts:8](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L8)*

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

*Defined in [app/utils/Resource.ts:10](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L10)*

**Returns:** `string`

*Defined in [app/utils/Resource.ts:13](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L13)*

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

*Defined in [app/utils/Model.ts:270](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L270)*

Gets all fields from a model's schema by its reference name. Returns empty array (\[\]) if it is not found.

Alias of `this.$getSchema(schemaRef).allFields`

`` ` ``typescript import {Model, SchemaSet, RequestExclude} from 'simpli-web-sdk' import {InputUserSchema} from '@/schema/User/InputUserSchema'

export class User extends Model { @RequestExclude() // Exclude this field from request readonly $schemaSet: SchemaSet = { input: new InputUserSchema(), } }

function example() { const user = new User() user.$allFieldsFrom('input') }

@param schemaRef The schema reference name

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

*Defined in [app/utils/Model.ts:299](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L299)*

Gets all headers from a model's schema by its reference name. Returns empty array (\[\]) if it is not found.

Alias of `this.$getSchema(schemaRef).allHeaders`

`` ` ``typescript import {Model, SchemaSet, RequestExclude} from 'simpli-web-sdk' import {InputUserSchema} from '@/schema/User/InputUserSchema'

export class User extends Model { @RequestExclude() // Exclude this field from request readonly $schemaSet: SchemaSet = { input: new InputUserSchema(), } }

function example() { const user = new User() user.$allHeadersFrom('input') }

@param schemaRef The schema reference name

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

*Defined in [app/utils/Model.ts:436](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L436)*

Clones this model and return its clone.

Alias of `Helper.clone(this)`

`` ` ``typescript import {Model, SchemaSet, RequestExclude} from 'simpli-web-sdk' import {User} from '@/model/User'

function example() { const user = new User() const clonedUser = user.$clone() }

**Returns:** `this`

___
<a id="_datafrom"></a>

###  $dataFrom

▸ **$dataFrom**(schemaRef: *`string`*): [Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>

*Inherited from [Model](model.md).[$dataFrom](model.md#_datafrom)*

*Defined in [app/utils/Model.ts:357](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L357)*

Gets the data as [Dictionary](../interfaces/dictionary.md) from a model's schema by its reference name. Returns empty object ({}) if it is not found.

Alias of `this.$getSchema(schemaRef).getModelData(this)`

`` ` ``typescript import {Model, SchemaSet, RequestExclude} from 'simpli-web-sdk' import {InputUserSchema} from '@/schema/User/InputUserSchema'

export class User extends Model { @RequestExclude() // Exclude this field from request readonly $schemaSet: SchemaSet = { input: new InputUserSchema(), } }

function example() { const user = new User() user.$dataFrom('input') }

@param schemaRef The schema reference name

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |

**Returns:** [Dictionary](../interfaces/dictionary.md)<[FieldData](../#fielddata)>

___
<a id="_getmany"></a>

###  $getMany

▸ **$getMany**(params?: *`any`*): `Promise`<`AxiosResponse`<`this`[]>>

*Defined in [app/utils/Resource.ts:136](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L136)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` params | `any` |

**Returns:** `Promise`<`AxiosResponse`<`this`[]>>

___
<a id="_getone"></a>

###  $getOne

▸ **$getOne**(...ids: *[ID](../enums/lang.md#id)[]*): `Promise`<`AxiosResponse`<`this`>>

*Defined in [app/utils/Resource.ts:119](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L119)*

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

*Defined in [app/utils/Model.ts:213](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L213)*

Gets a model's schema instance by its reference name. Returns null if it is not found.

```typescript
import {Model, SchemaSet, RequestExclude} from 'simpli-web-sdk'
import {InputUserSchema} from '@/schema/User/InputUserSchema'

export class User extends Model {
  \@RequestExclude() // Exclude this field from request
  readonly $schemaSet: SchemaSet = {
    input: new InputUserSchema(),
  }
}

function example() {
  const user = new User()
  user.$getSchema('input')
}

@param schemaRef The schema reference name
```

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

*Defined in [app/utils/Model.ts:241](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L241)*

Gets the name of a model's schema by its reference name. Returns null if it is not found.

Alias of `this.$getSchema(schemaRef).name`

`` ` ``typescript import {Model, SchemaSet, RequestExclude} from 'simpli-web-sdk' import {InputUserSchema} from '@/schema/User/InputUserSchema'

export class User extends Model { @RequestExclude() // Exclude this field from request readonly $schemaSet: SchemaSet = { input: new InputUserSchema(), } }

function example() { const user = new User() user.$getSchemaName('input') }

@param schemaRef The schema reference name

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

*Defined in [app/utils/Model.ts:186](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L186)*

Customizes the spinner name. This methods should be overwrited in order to take its effect.

```typescript
import {Model} from 'simpli-web-sdk'

export class User extends Model {
  $getSpinnerName(command: string) {
    return `user_${command}`
  }

  email: string \| null = null
  name: string \| null = null
}

await function example() {
  const user = new User()
  await user.$populateFrom('/user/1')
  // the spinner name is 'user_populate'
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| command | `string` |  The default spinner name of the [Await](await.md) component from methods $listFrom, $populateFrom, $persistFrom, $updateFrom and $removeFrom |

**Returns:** `string`

___
<a id="_headerfrom"></a>

###  $headerFrom

▸ **$headerFrom**(schemaRef: *`string`*): [Dictionary](../interfaces/dictionary.md)<`string`>

*Inherited from [Model](model.md).[$headerFrom](model.md#_headerfrom)*

*Defined in [app/utils/Model.ts:328](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L328)*

Gets the header as [Dictionary](../interfaces/dictionary.md) from a model's schema by its reference name. Returns empty object ({}) if it is not found.

Alias of `this.$getSchema(schemaRef).header`

`` ` ``typescript import {Model, SchemaSet, RequestExclude} from 'simpli-web-sdk' import {InputUserSchema} from '@/schema/User/InputUserSchema'

export class User extends Model { @RequestExclude() // Exclude this field from request readonly $schemaSet: SchemaSet = { input: new InputUserSchema(), } }

function example() { const user = new User() user.$headerFrom('input') }

@param schemaRef The schema reference name

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

*Defined in [app/utils/Model.ts:51](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L51)*

Calls HTTP GET request, and defines the response as an array of this model. Note: the default spinner name of the [Await](await.md) component is 'list'.

```typescript
import {Model} from 'simpli-web-sdk'
import {User} from '@/model/User'

async function example() {
  const resp = await new User().$listFrom('/user')
  const users: User[] = resp.data
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The absolute or endpoint URL |

**Returns:** `Promise`<`AxiosResponse`<`this`[]>>

___
<a id="_persistfrom"></a>

###  $persistFrom

▸ **$persistFrom**(url: *`string`*): `Promise`<`AxiosResponse`<`any`>>

*Inherited from [Model](model.md).[$persistFrom](model.md#_persistfrom)*

*Defined in [app/utils/Model.ts:101](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L101)*

Calls HTTP POST request, and defines the response as any type. Note: the default spinner name of the [Await](await.md) component is 'persist'.

```typescript
import {Model} from 'simpli-web-sdk'
import {User} from '@/model/User'

async function example() {
  const user = new User()
  user.name = 'Michael Jackson'

  await user.$persistFrom('/user')
  // the changes will be persisted
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The absolute or endpoint URL |

**Returns:** `Promise`<`AxiosResponse`<`any`>>

___
<a id="_populatefrom"></a>

###  $populateFrom

▸ **$populateFrom**(url: *`string`*): `Promise`<`AxiosResponse`<`this`>>

*Inherited from [Model](model.md).[$populateFrom](model.md#_populatefrom)*

*Defined in [app/utils/Model.ts:75](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L75)*

Calls HTTP GET request, and defines the response as this model. Note: the default spinner name of the [Await](await.md) component is 'populate'.

```typescript
import {Model} from 'simpli-web-sdk'
import {User} from '@/model/User'

async function example() {
  const user = new User()
  await user.$populateFrom('/user/1')
  // the user will be populated
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The absolute or endpoint URL |

**Returns:** `Promise`<`AxiosResponse`<`this`>>

___
<a id="_query"></a>

###  $query

▸ **$query**(params?: *`any`*): `Promise`<`AxiosResponse`<`this`>>

*Defined in [app/utils/Resource.ts:144](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L144)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` params | `any` |

**Returns:** `Promise`<`AxiosResponse`<`this`>>

___
<a id="_remove"></a>

###  $remove

▸ **$remove**(params?: *`any`*): `Promise`<`AxiosResponse`<`any`>>

*Defined in [app/utils/Resource.ts:175](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L175)*

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

*Defined in [app/utils/Model.ts:153](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L153)*

Calls HTTP DELETE request, and defines the response as any type. Note: the default spinner name of the [Await](await.md) component is 'remove'.

```typescript
import {Model} from 'simpli-web-sdk'
import {User} from '@/model/User'

async function example() {
  const user = new User()
  await user.$removeFrom('/user/1')
  // remove this user from database
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The absolute or endpoint URL |

**Returns:** `Promise`<`AxiosResponse`<`any`>>

___
<a id="_save"></a>

###  $save

▸ **$save**(params?: *`any`*): `Promise`<`AxiosResponse`<`any`>>

*Defined in [app/utils/Resource.ts:152](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L152)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` params | `any` |

**Returns:** `Promise`<`AxiosResponse`<`any`>>

___
<a id="_translatefrom"></a>

###  $translateFrom

▸ **$translateFrom**(schemaRef: *`string`*, fieldName: *`string`*): `string`

*Inherited from [Model](model.md).[$translateFrom](model.md#_translatefrom)*

*Defined in [app/utils/Model.ts:387](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L387)*

Translates a field from a model's schema by its reference name. Returns empty string ('') if it is not found.

Alias of `this.$getSchema(schemaRef).translateFrom(fieldName)`

`` ` ``typescript import {Model, SchemaSet, RequestExclude} from 'simpli-web-sdk' import {InputUserSchema} from '@/schema/User/InputUserSchema'

export class User extends Model { @RequestExclude() // Exclude this field from request readonly $schemaSet: SchemaSet = { input: new InputUserSchema(), } }

function example() { const user = new User() user.$translateFrom('input', 'email') }

@param schemaRef The schema reference name @param fieldName The schema's field name

**Parameters:**

| Name | Type |
| ------ | ------ |
| schemaRef | `string` |
| fieldName | `string` |

**Returns:** `string`

___
<a id="_update"></a>

###  $update

▸ **$update**(params?: *`any`*): `Promise`<`AxiosResponse`<`any`>>

*Defined in [app/utils/Resource.ts:160](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Resource.ts#L160)*

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

*Defined in [app/utils/Model.ts:129](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L129)*

Calls HTTP PUT request, and defines the response as any type. Note: the default spinner name of the [Await](await.md) component is 'update'.

```typescript
import {Model} from 'simpli-web-sdk'
import {User} from '@/model/User'

async function example() {
  const user = new User()
  await user.$populateFrom('/user/1')

  user.name = 'Michael Jackson'

  await user.$updateFrom('/user/1')
  // the changes will be persisted
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The absolute or endpoint URL |

**Returns:** `Promise`<`AxiosResponse`<`any`>>

___
<a id="_validate"></a>

###  $validate

▸ **$validate**(schemaRef?: *`string`*, showErrorMessage?: *`boolean`*): `void`

*Inherited from [Model](model.md).[$validate](model.md#_validate)*

*Defined in [app/utils/Model.ts:417](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/utils/Model.ts#L417)*

Validates a model's schema by its reference name. If there are errors, then throw an exception.

Alias of `this.$getSchema(schemaRef).validate(this, showErrorMessage)`

`` ` ``typescript import {Model, SchemaSet, RequestExclude} from 'simpli-web-sdk' import {InputUserSchema} from '@/schema/User/InputUserSchema'

export class User extends Model { @RequestExclude() // Exclude this field from request readonly $schemaSet: SchemaSet = { input: new InputUserSchema(), } }

function example() { const user = new User() user.$validate('input') }

@param schemaRef The schema reference name @param showErrorMessage If true, then spans the first error message to the user

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` schemaRef | `string` | &quot;input&quot; |
| `Default value` showErrorMessage | `boolean` | true |

**Returns:** `void`

___

