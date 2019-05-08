# Schemas

Schema is a awesome way to render data which you send to web server or receive from web server.

Imagine that in your project you have an admin system. Therefore, you had to build a login system. 
If you are using `Vue`, your login template looks like this structure:

```html
<template>
  <div>
    <form @submit.prevent="login">
      <div class="some-input-class">
        <label for="email">E-Mail</label>
        <input id="email" type="email" v-model="email">
      </div>
      
      <div class="another-input-class">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class LoginView extends Vue {
  email = ''
  password = ''
  login() { /** your code **/ }
}
</script>
```

Cool, but what about doing a whole persist form of CRUDs models? Boring! Let us make on the `schema` way.

## Creating a model class

Before creating a schema class, you need to create a model class and define the fields.
In this case, it will be named as `AuthRequest`.

```typescript
// model/AuthRequest.ts

export class AuthRequest {
  email = ''
  password = ''
  login() { /** your code **/ }
}
```

## Creating a schema class

By creating a class of schema, you must extend it into the [Schema](../typedocs/classes/schema.md) class provided by `simpli-web-sdk`

After that, you must defined the `fields` which in that case is `email` and `password`:

```typescript
// schema/InputAuthRequestSchema

import {Schema, FieldSet, FieldComponent, Component, AjvType} from 'simpli-web-sdk'
import AuthRequest from '@/model/AuthRequest'

export class InputAuthRequestSchema extends Schema {
  readonly name = 'InputAuthRequest'

  readonly fieldSet: FieldSet<AuthRequest> = {
    email: (schema): FieldComponent => ({
      is: Component.InputText, // InputText Component
      // Props of InputText component
      bind: {
        type: 'email',
        label: this.translateFrom(schema.fieldName), // You need to define in the dictionary
        class: 'some-input-class',
      },
      // AJV validation
      ajv: {
        type: AjvType.requiredString, // this field is required
        format: 'email', // accept only email format
      },
    }),
    password: (schema): FieldComponent => ({
      is: Component.InputText, // InputText Component
      // Props of InputText component
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName), // You need to define in the dictionary
        class: 'another-input-class',
      },
      // AJV validation
      ajv: {
        type: AjvType.requiredString, // this field is required
      },
    }),
  }
}
```

In that example, it provides a compatible structure of the example before.
Plus, there is validation using [AJV](https://ajv.js.org/) engine.

## Translate fields

Once you have created the model and schema class, you may translate your fields by adding into the dictionary of vue-i18n files.
The default path is: `schema.{schemaName}.{fieldName}`. [You are able to change the default path](./extra-settings.md).

By using the provided default path, you have this in your language file:

```typescript
/**
 * ./locale/en-US/lang.ts
 * Language: English United States
 */
export default {
  schema: {
    InputAuthRequest: {
      email: 'E-mail',
      password: 'Password',
    }
  }
}
```

## Using a schema

Now it is time to put it in the action!

The template has a new face: 

```html
<template>
  <div>
    <form @submit.prevent="login">
      <div v-for="field in schema.allFields">
        <render-schema v-model="request" :schema="schema" :field="field"/>
      </div>
      
      <!--the same as above-->
      <!--<render-schema v-model="request" :schema="schema" field="email">-->
      <!--<render-schema v-model="request" :schema="schema" field="password">-->

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {AuthRequest} from '@/model/AuthRequest'
import {InputAuthRequestSchema} from '@/schema/InputAuthRequestSchema'

@Component
export default class LoginView extends Vue {
  schema = new InputAuthRequestSchema()
  request = new AuthRequest()
  
  login() {
    this.schema.validate(this.request) // validate the schema
    this.request.login()
  }
}
</script>
```

We use the [RenderSchema](../typedocs/classes/renderschema.md) component to render it.

This component will translate the schema fields into the component provided in it.
On that example, we use the [InputText](../typedocs/classes/inputtext.md) component. You may use your own component.
Therefore, it is the same as you code like this:

```html
<input-text v-model="request.email" type="email" :label="$t('schema.InputAuthRequest.email')" class="some-input-class"/>
<input-text v-model="request.password" type="password" :label="$t('schema.InputAuthRequest.password')" class="another-input-class"/>
```

Get more details in the [Docs](../typedocs/classes/renderschema.md).

## String render

On `schema` way, you can use a component to render.
However, if you have a simpler situation, you can just render the data as string. 

Now, imagine you have to list users in your admin panel. You may have this schema:

```typescript
// ./schema/ListUserSchema

import {Schema, FieldSet} from 'simpli-web-sdk'
import User from '@/model/User'

export class ListUserSchema extends Schema {
  readonly name = 'ListUser'

  readonly fieldSet: FieldSet<User> = {
    id: (schema) => schema.model.id,
    email: (schema) => schema.model.email,
    nickname: (schema) => schema.model.nickname,
    name: (schema) => schema.model.name,
  }
}
```

And this language structure: 

```typescript
/**
 * ./locale/en-US/lang.ts
 * Language: English United States
 */
export default {
  schema: {
    ListUser: {
      id: 'ID',
      email: 'E-mail',
      nickname: 'Nickname',
      name: 'Name',
    }
  }
}
```

Your template may look like this:

```html
<template>
  <div>
    <table>
      <thead>
      <tr>
        <th v-for="(name, key) in schema.header" :key="key">
          {{name}}
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(user, i) in users" :key="i">
        <td v-for="(field, j) in schema.allFields" :key="j">
          <render-schema v-model="user[i]" :schema="schema" :field="field"/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {$} from 'simpli-web-sdk'
import User from '@/model/User'
import {ListUserSchema} from '@/schema/ListUserSchema'

@Component
export default class ListUserView extends Vue {
  schema = new ListUserSchema()
  users: User[] = []

  mounted() { /** populate users **/ }
}
</script>
```

Now you have a complete table of users made by your provided schema.
Note: if some column of the table is not a simple text, you have to provide your own component on the field instead a string.

For example, the field `urlAvatar` needs other type component render such as `RenderImage`

```typescript
// ./schema/ListUserSchema

import {Schema, FieldSet, FieldComponent, Component} from 'simpli-web-sdk'
import User from '@/model/User'

export class ListUserSchema extends Schema {
  readonly name = 'ListUser'

  readonly fieldSet: FieldSet<User> = {
    id: (schema) => schema.model.id,
    email: (schema) => schema.model.email,
    nickname: (schema) => schema.model.nickname,
    name: (schema) => schema.model.name,
    urlAvatar: (schema): FieldComponent => ({
      is: Component.RenderImage,
      bind: {
        src: schema.model.urlImagem,
        alt: this.translateFrom(schema.fieldName),
        innerClass: 'my-custom-img-class',
      },
    }),
  }
}
```

## Next Topic
[Models](./models.md)
