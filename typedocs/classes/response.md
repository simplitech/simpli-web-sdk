[simpli-web-sdk](../README.md) > [Response](../classes/response.md)

# Class: Response

The Response is an auxiliary class of [Request](request.md).

Although you may use this class to make HTTP requests, it is recommended to use [Request](request.md) instead.

By using [Request](request.md), the code will be semantically better.

It uses [Axios](https://github.com/axios/axios) to request; therefore, you may configure an Axios instance.

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

Example
-------

```typescript
import {Request, Response} from 'simpli-web-sdk'
import {User} from './User'

async function example() {
  const request = new Request({url: '/path/to/url', method: 'GET'})
  const response = new Response(request, User)
  return await response.getData() // User type
}
```

## Type parameters
#### T 
## Hierarchy

**Response**

## Index

### Constructors

* [constructor](response.md#constructor)

### Methods

* [delay](response.md#delay)
* [getData](response.md#getdata)
* [getResponse](response.md#getresponse)
* [name](response.md#name)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Response**(request: *[Request](request.md)*, responseType?: *[ResponseType](../#responsetype)<`T`>*): [Response](response.md)

*Defined in [app/http/Response.ts:42](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/http/Response.ts#L42)*

Assigns a new response instance with a provided request instance.

```typescript
import {Request, Response} from 'simpli-web-sdk'

async function example() {
  const request = new Request({url: '/path/to/url', method: 'GET'})
  const response = new Response(request, User)
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| request | [Request](request.md) |  A request instance |
| `Optional` responseType | [ResponseType](../#responsetype)<`T`> |  The response type. You may use either an instance object or a class definition. If it is an instance, then the response will populate it. |

**Returns:** [Response](response.md)

___

## Methods

<a id="delay"></a>

###  delay

▸ **delay**(requestDelay: *`number`*): `this`

*Defined in [app/http/Response.ts:123](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/http/Response.ts#L123)*

Provides a delay of any request from this instance.

The same effect of [request.delay()](./request.html#delay)

**Parameters:**

| Name | Type |
| ------ | ------ |
| requestDelay | `number` |

**Returns:** `this`

___
<a id="getdata"></a>

###  getData

▸ **getData**(): `Promise`<`T`>

*Defined in [app/http/Response.ts:150](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/http/Response.ts#L150)*

Makes a HTTP request and returns the data content from response.

```typescript
import {Request} from 'simpli-web-sdk'

async function example1() {
  return await Request.get('/path/to/url')
    .asAny()
    .getData()
}

// the same of

async function example2() {
  const resp = await Request.get('/path/to/url')
    .asAny()
    .getResponse()
  return resp.data
}
```

**Returns:** `Promise`<`T`>

___
<a id="getresponse"></a>

###  getResponse

▸ **getResponse**(onResponse?: *`undefined` \| `function`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [app/http/Response.ts:168](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/http/Response.ts#L168)*

Makes a HTTP request and returns the response content.

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
| `Optional` onResponse | `undefined` \| `function` |  Special callback when you have to handle the data before the serialization |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="name"></a>

###  name

▸ **name**(requestName: *`string`*): `this`

*Defined in [app/http/Response.ts:113](https://github.com/simplitech/simpli-web-sdk/blob/2a29ffa/src/app/http/Response.ts#L113)*

Gives a name of this request which is used in [Await](await.md) component.

The same effect of [request.name()](./request.html#name)

**Parameters:**

| Name | Type |
| ------ | ------ |
| requestName | `string` |

**Returns:** `this`

___

