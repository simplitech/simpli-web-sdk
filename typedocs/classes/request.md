[simpli-web-sdk](../README.md) > [Request](../classes/request.md)

# Class: Request

The Request class is responsible to make HTTP requests and serialize the response. It uses [Axios](https://github.com/axios/axios) to request; therefore, you may configure an Axios instance.

This class and [Response](response.md) class work together in order to make HTTP requests.

Example of configuration
------------------------

```typescript
import Simpli from 'simpli-web-sdk'
import axios from 'axios'

const axiosInstance = axios.create({
 baseURL: 'http://example.com/api'
})

Simpli.axios = axiosInstance

Simpli.install()
```

Example of a common usage
-------------------------

```typescript
import {Request} from 'simpli-web-sdk'
import {User} from './User'

async function example() {
  return await Request.get('path/to/url')
    .name('myRequest') // request name which is used in the Await component
    .delay(1000) // delay of the request in milliseconds
    .as(User) // returns a response instance which is typed as User class
    .getResponse() // response result which its data is a User
}
```

## Hierarchy

**Request**

## Index

### Constructors

* [constructor](request.md#constructor)

### Methods

* [as](request.md#as)
* [asAny](request.md#asany)
* [asArrayOf](request.md#asarrayof)
* [asBoolean](request.md#asboolean)
* [asNumber](request.md#asnumber)
* [asString](request.md#asstring)
* [asVoid](request.md#asvoid)
* [delay](request.md#delay)
* [name](request.md#name)
* [delete](request.md#delete)
* [get](request.md#get)
* [head](request.md#head)
* [patch](request.md#patch)
* [post](request.md#post)
* [put](request.md#put)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Request**(axiosConfig: *`AxiosRequestConfig`*): [Request](request.md)

*Defined in [app/http/Request.ts:40](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L40)*

Assigns a new request instance which may have a custom Axios configuration.

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await new Request({url: '/path/to/url', method: 'GET'})
    .asAny()
    .getResponse()
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| axiosConfig | `AxiosRequestConfig` |  Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config) |

**Returns:** [Request](request.md)

___

## Methods

<a id="as"></a>

###  as

▸ **as**<`T`>(responseType?: *[ResponseType](../#responsetype)<`T`>*): [Response](response.md)<`T`>

*Defined in [app/http/Request.ts:281](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L281)*

Creates a response instance from [Response](response.md) and states its type as `a given param`.

```typescript
import {Request} from 'simpli-web-sdk'
import {User} from './User'

async function example() {
  return await Request.get('/path/to/url')
    .as(User)
    .getResponse()

  // or

  const instance = new User()

  return await Request.get('/path/to/url')
    .as(instance)
    .getResponse() // the response data will populate the instance
}
```

**Type parameters:**

#### T 

Response type class for type `T`

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` responseType | [ResponseType](../#responsetype)<`T`> |  The response type. You may use either an instance object or a class definition. If it is an instance, then the response will populate it. |

**Returns:** [Response](response.md)<`T`>

___
<a id="asany"></a>

###  asAny

▸ **asAny**(): [Response](response.md)<`any`>

*Defined in [app/http/Request.ts:328](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L328)*

Creates a response instance from [Response](response.md) and states its type as `any`. This is an alias of `as<any>()`

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.get('/path/to/url')
    .asAny()
    .getResponse()
}
```

**Returns:** [Response](response.md)<`any`>

___
<a id="asarrayof"></a>

###  asArrayOf

▸ **asArrayOf**<`T`>(responseType?: *[ResponseType](../#responsetype)<`T`>*): [Response](response.md)<`T`[]>

*Defined in [app/http/Request.ts:310](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L310)*

Creates a response instance from [Response](response.md) and states its type as `array of a given param`.

```typescript
import {Request} from 'simpli-web-sdk'
import {User} from './User'

async function example() {
  return await Request.get('/path/to/url')
    .asArrayOf(User)
    .getResponse()

  // or

  const users: User[] = []

  return await Request.get('/path/to/url')
    .asArrayOf(users)
    .getResponse() // the response data will populate the instance
}
```

**Type parameters:**

#### T 

Response type class for type `T`

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` responseType | [ResponseType](../#responsetype)<`T`> |  The response type. You may use either an instance object or a class definition. If it is an instance, then the response will populate it. |

**Returns:** [Response](response.md)<`T`[]>

___
<a id="asboolean"></a>

###  asBoolean

▸ **asBoolean**(): [Response](response.md)<`boolean`>

*Defined in [app/http/Request.ts:400](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L400)*

Creates a response instance from [Response](response.md) and states its type as `boolean`. This is an alias of `as<boolean>()`

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.get('/path/to/url')
    .asBoolean()
    .getResponse()
}
```

**Returns:** [Response](response.md)<`boolean`>

___
<a id="asnumber"></a>

###  asNumber

▸ **asNumber**(): [Response](response.md)<`number`>

*Defined in [app/http/Request.ts:382](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L382)*

Creates a response instance from [Response](response.md) and states its type as `number`. This is an alias of `as<number>()`

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.get('/path/to/url')
    .asNumber()
    .getResponse()
}
```

**Returns:** [Response](response.md)<`number`>

___
<a id="asstring"></a>

###  asString

▸ **asString**(): [Response](response.md)<`string`>

*Defined in [app/http/Request.ts:364](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L364)*

Creates a response instance from [Response](response.md) and states its type as `string`. This is an alias of `as<string>()`

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.get('/path/to/url')
    .asString()
    .getResponse()
}
```

**Returns:** [Response](response.md)<`string`>

___
<a id="asvoid"></a>

###  asVoid

▸ **asVoid**(): [Response](response.md)<`void`>

*Defined in [app/http/Request.ts:346](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L346)*

Creates a response instance from [Response](response.md) and states its type as `void`. This is an alias of `as<void>()`

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.get('/path/to/url')
    .asVoid()
    .getResponse()
}
```

**Returns:** [Response](response.md)<`void`>

___
<a id="delay"></a>

###  delay

▸ **delay**(requestDelay: *`number`*): `this`

*Defined in [app/http/Request.ts:251](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L251)*

Provides a delay of any request from this instance.

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.get('/path/to/url')
    .delay(1000)
    .asAny()
    .getResponse()
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| requestDelay | `number` |  The delay in milliseconds |

**Returns:** `this`

___
<a id="name"></a>

###  name

▸ **name**(requestName: *`string`*): `this`

*Defined in [app/http/Request.ts:231](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L231)*

Gives a name of this request which is used in [Await](await.md) component.

```typescript
// js file
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.get('/path/to/url')
    .name('foo')
    .asAny()
    .getResponse()
}
```

```html
<!-- html file -->
<await name="foo">
 <!-- the content is shown after the response is provided -->
</await>
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| requestName | `string` |  The request name |

**Returns:** `this`

___
<a id="delete"></a>

### `<Static>` delete

▸ **delete**(url: *`string`*, axiosConfig?: *`AxiosRequestConfig`*): [Request](request.md)

*Defined in [app/http/Request.ts:112](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L112)*

Creates a Request instance with the HTTP DELETE methods preset.

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.delete('/path/to/url')
    .asAny()
    .getResponse()
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The URL(or endpoint) of the request |
| `Optional` axiosConfig | `AxiosRequestConfig` |  Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config) |

**Returns:** [Request](request.md)

___
<a id="get"></a>

### `<Static>` get

▸ **get**(url: *`string`*, axiosConfig?: *`AxiosRequestConfig`*): [Request](request.md)

*Defined in [app/http/Request.ts:92](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L92)*

Creates a Request instance with the HTTP GET methods preset.

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.get('/path/to/url')
    .asAny()
    .getResponse()
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The URL(or endpoint) of the request |
| `Optional` axiosConfig | `AxiosRequestConfig` |  Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config) |

**Returns:** [Request](request.md)

___
<a id="head"></a>

### `<Static>` head

▸ **head**(url: *`string`*, axiosConfig?: *`AxiosRequestConfig`*): [Request](request.md)

*Defined in [app/http/Request.ts:132](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L132)*

Creates a Request instance with the HTTP HEAD methods preset.

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.head('/path/to/url')
    .asAny()
    .getResponse()
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The URL(or endpoint) of the request |
| `Optional` axiosConfig | `AxiosRequestConfig` |  Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config) |

**Returns:** [Request](request.md)

___
<a id="patch"></a>

### `<Static>` patch

▸ **patch**(url: *`string`*, data?: *`any`*, axiosConfig?: *`AxiosRequestConfig`*): [Request](request.md)

*Defined in [app/http/Request.ts:195](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L195)*

Creates a Request instance with the HTTP PATCH methods preset.

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.patch('/path/to/url', {})
    .asAny()
    .getResponse()
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The URL(or endpoint) of the request |
| `Optional` data | `any` |  The body params |
| `Optional` axiosConfig | `AxiosRequestConfig` |  Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config) |

**Returns:** [Request](request.md)

___
<a id="post"></a>

### `<Static>` post

▸ **post**(url: *`string`*, data?: *`any`*, axiosConfig?: *`AxiosRequestConfig`*): [Request](request.md)

*Defined in [app/http/Request.ts:153](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L153)*

Creates a Request instance with the HTTP POST methods preset.

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.post('/path/to/url', {})
    .asAny()
    .getResponse()
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The URL(or endpoint) of the request |
| `Optional` data | `any` |  The body params |
| `Optional` axiosConfig | `AxiosRequestConfig` |  Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config) |

**Returns:** [Request](request.md)

___
<a id="put"></a>

### `<Static>` put

▸ **put**(url: *`string`*, data?: *`any`*, axiosConfig?: *`AxiosRequestConfig`*): [Request](request.md)

*Defined in [app/http/Request.ts:174](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/app/http/Request.ts#L174)*

Creates a Request instance with the HTTP PUT methods preset.

```typescript
import {Request} from 'simpli-web-sdk'

async function example() {
  return await Request.put('/path/to/url', {})
    .asAny()
    .getResponse()
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The URL(or endpoint) of the request |
| `Optional` data | `any` |  The body params |
| `Optional` axiosConfig | `AxiosRequestConfig` |  Custom Axios configuration. More details in [Axios Docs](https://github.com/axios/axios#request-config) |

**Returns:** [Request](request.md)

___

