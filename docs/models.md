# Models

Model is an abstract class which is used to represent the server interaction data.
Therefore, there are some features on it to facilitate the process of sending/receiving data and render data.

More details in [Docs](../typedocs/classes/model.md)

## Schema integration

You can associate instances of [Schema](./schemas.md) into a model.
This way, you may use methods of schema directly from the model.

```typescript
import {Model, SchemaSet, RequestExclude} from 'simpli-web-sdk'
import {InputUserSchema} from '@/schema/User/InputUserSchema'
import {ListUserSchema} from '@/schema/User/ListUserSchema'
import {CsvUserSchema} from '@/schema/User/CsvUserSchema'

export class User extends Model {
  @RequestExclude() // Exclude this field from request
  readonly $schemaSet: SchemaSet = {
    input: new InputUserSchema(),
    list: new ListUserSchema(),
    csv: new CsvUserSchema(),
  }
  
  email: string | null = null
  name: string | null = null
}
```

Therefore, you have this on the user persist view:

```html
<template>
  <div>
    <form @submit.prevent="persist">
      <div v-for="field in user.$allFieldsFrom('input')">
        <render-schema v-model="user" schema="input" :field="field"/>
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {User} from '@/model/User'

@Component
export default class UserPersistView extends Vue {
  user = new User()
  
  async persist() {
    this.user.$validate() // validate the schema
    await this.user.$persist('/user') // HTTP POST request in '/user' endpoint
  }
}
</script>
```

## Decorators for models

There are some decorator you might use in models class. See all of them below: 

### @ResponseSerialize

It is used to serialize fields which belongs other class when the server responds.

```typescript
import {Model, ResponseSerialize} from 'simpli-web-sdk'
import {Address} from '@/model/Address'

export class User extends Model {
  email: string | null = null
  name: string | null = null

  // transforms a generic object into an Address object when the server responds
  @ResponseSerialize(Address)
  address: Address | null = null

  // it also works with arrays
  @ResponseSerialize(User)
  friends: User[] = []
}
```

### @RequestExpose

Defines the real name of the field for the server body or query.
By default, the real name is the name of the field even if `@ResponseExpose` is omitted.

```typescript
import {Model, RequestExpose} from 'simpli-web-sdk'

export class AuthRequest extends Model {
  @RequestExpose('login') // this field will be sent as 'login' instead 'email'
  email: string | null = null

  // the real name is also 'password', so you don't need to use @RequestExpose
  password: string | null = null
}
```

### @ResponseExpose

Defines the real name of field for the server response.
By default, the real name is the name of the field even if `@ResponseExpose` is omitted.

```typescript
import {Model, ResponseExpose} from 'simpli-web-sdk'

export class AuthResponse extends Model {
  @ResponseExpose('token') // The code field will get the token response
  code: string | null = null

  // the real name is also 'id', so you don't need to use @ResponseExpose
  id: string | null = null
}
```

### @HttpExpose

Use `@HttpExpose` when you have to use both `@RequestExpose` and `@ResponseExpose` for the same field.

```typescript
import {Model, HttpExpose} from 'simpli-web-sdk'

export class User extends Model {
  @HttpExpose('e-mail') // The real field name is 'e-mail'
  email: string | null = null

  name: string | null = null
}
```

### @RequestExclude

Ignores the field from the request.

```typescript
import {Model, RequestExclude} from 'simpli-web-sdk'

export class AuthRequest extends Model {
  email: string | null = null
  password: string | null = null
  
  @RequestExclude()
  internClassProperty = 'foo' // this will not be sent
}
```

### @ResponseExclude

The field with this decorator will not populated from the server response.

```typescript
import {Model, ResponseExclude} from 'simpli-web-sdk'

export class User extends Model {
  email: string | null = null
  
  @ResponseExclude()
  password: string | null = null // this model will not get the user password if the server provides.
}
```

### @HttpExclude

Use `@HttpExclude` when you have to use both `@RequestExclude` and `@ResponseExclude` for the same field.

```typescript
import {Model, HttpExclude} from 'simpli-web-sdk'

export class User extends Model {
  email: string | null = null
  name: string | null = null
  
  @HttpExclude()
  internClassProperty = 'foo' // ignores at all
}
```

You can also use the `@HttpExclude` on the model class instead the field. Therefore, you ignore all fields for default.

```typescript
import {Model, HttpExpose, HttpExclude} from 'simpli-web-sdk'

@HttpExclude()
export class User extends Model {
  @HttpExpose()
  email: string | null = null

  @HttpExpose()
  name: string | null = null
  
  password: string | null = null
}
```

## Good practices

In general, there are three types of models: `Request`, `Response`, `Resource`.

### Use resource models for CRUDs

For `Resource` models, you must extend the [Resource](../typedocs/classes/resource.md) class which belongs to the [Model](../typedocs/classes/model.md) class.
See the [Next Topic](./resources-and-requests.md) for more information about it.

### Use Request and Response suffix

For `Request` and `Response` models, it is a good practice use their names as suffix. E.g. `AuthRequest` and `AuthResponse`.

### Create custom request functions in the corresponded request or resource model

Sometimes you have to create some custom requests using the [Request](../typedocs/classes/request.md) class.
For this situation, the best practice is to create a function inside the corresponded request or resource model.
See the example below:

```typescript
import {Request, Model, Helper} from 'simpli-web-sdk'
import AuthResponse from '@/model/response/AuthResponse'

export default class AuthRequest extends Model {
  email: string | null = null
  password: string | null = null

  async signIn() {
    const request = this.$clone()
    request.password = Helper.encrypt(this.password || '')

    return await Request.post('/admin/auth/sign-in', request)
      .name('signIn')
      .delay(1000)
      .as(AuthResponse)
      .getData()
  }
}
```

## Next Topic
[Requests and Resources](./resources-and-requests.md)
