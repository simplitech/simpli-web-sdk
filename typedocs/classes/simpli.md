[simpli-web-sdk](../README.md) > [Simpli](../classes/simpli.md)

# Class: Simpli

Static class used to initializing this library

```typescript
import Simpli from 'simpli-web-sdk'

import {axiosInstance, socketInstance} from '@/config/http.config'
import {defaultCurrency, defaultLang, localeVueI18n, localeAjvI18n} from '@/config/locale.config'
import {components} from '@/config/component.config'
import {filters} from '@/config/filter.config'
import {router} from '@/config/router.config'

Simpli.axios = axiosInstance
Simpli.socket = socketInstance
Simpli.lang = defaultLang
Simpli.currency = defaultCurrency
Simpli.components = components
Simpli.filters = filters
Simpli.locale = localeVueI18n
Simpli.localeAjv = localeAjvI18n
Simpli.router = router

Simpli.install()
```

## Hierarchy

**Simpli**

## Index

### Properties

* [axios](simpli.md#axios)
* [components](simpli.md#components)
* [currency](simpli.md#currency)
* [filters](simpli.md#filters)
* [lang](simpli.md#lang)
* [locale](simpli.md#locale)
* [localeAjv](simpli.md#localeajv)
* [router](simpli.md#router)
* [socket](simpli.md#socket)

### Methods

* [changeCurrency](simpli.md#changecurrency)
* [changeLocale](simpli.md#changelocale)
* [install](simpli.md#install)

---

## Properties

<a id="axios"></a>

### `<Static>``<Optional>` axios

**● axios**: *`AxiosInstance`*

*Defined in [simpli.ts:344](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L344)*

Setup of the [axios](https://github.com/axios/axios) instance in order to use a native HTTP request.

```typescript
import Simpli from 'simpli-web-sdk'

Simpli.axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})

Simpli.install()
```

___
<a id="components"></a>

### `<Static>` components

**● components**: *[ComponentOptions](../interfaces/componentoptions.md)*

*Defined in [simpli.ts:375](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L375)*

Setup of the global Vue components.

```typescript
import Simpli from 'simpli-web-sdk'
import MyComponent from '@/components/MyComponent.vue'

Simpli.components = {
  MyComponent,
}

Simpli.install()
```

___
<a id="currency"></a>

### `<Static>` currency

**● currency**: *[Currency](../enums/currency.md)* =  Currency.USD

*Defined in [simpli.ts:472](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L472)*

Setups the default currency.

```typescript
import Simpli, {Currency} from 'simpli-web-sdk'

Simpli.currency = Currency.BRL

Simpli.install()
```

___
<a id="filters"></a>

### `<Static>` filters

**● filters**: *[FilterOptions](../interfaces/filteroptions.md)*

*Defined in [simpli.ts:392](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L392)*

Setup of the global Vue filters.

```typescript
import Simpli from 'simpli-web-sdk'

Simpli.filters = {
  exclamation: (value?: string): string => {
    return value ? `${value}!!` : ''
  },
}

Simpli.install()
```

___
<a id="lang"></a>

### `<Static>` lang

**● lang**: *[Lang](../enums/lang.md)* =  Lang.EN_US

*Defined in [simpli.ts:459](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L459)*

Setups the default language.

```typescript
import Simpli, {Lang} from 'simpli-web-sdk'

Simpli.lang = Lang.PT_BR

Simpli.install()
```

___
<a id="locale"></a>

### `<Static>``<Optional>` locale

**● locale**: *[LocaleOptions](../interfaces/localeoptions.md)*

*Defined in [simpli.ts:408](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L408)*

Setup of locale from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html)

```typescript
import Simpli, {Lang} from 'simpli-web-sdk'

Simpli.locale = {
  [Lang.EN_US]: enUs,
  [Lang.PT_BR]: ptBr,
}

Simpli.install()
```

___
<a id="localeajv"></a>

### `<Static>``<Optional>` localeAjv

**● localeAjv**: *[LocaleOptions](../interfaces/localeoptions.md)*

*Defined in [simpli.ts:424](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L424)*

Setup of validation from [ajv](https://ajv.js.org/) module

```typescript
import Simpli, {Lang} from 'simpli-web-sdk'

export const localeAjvI18n: LocaleOptions = {
  [Lang.EN_US]: require('ajv-i18n/localize/en'),
  [Lang.PT_BR]: require('ajv-i18n/localize/pt-BR'),
}

Simpli.install()
```

___
<a id="router"></a>

### `<Static>``<Optional>` router

**● router**: *`RouterOptions`*

*Defined in [simpli.ts:446](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L446)*

Setups the `router` variable from [vue-router](https://router.vuejs.org/) module.

```typescript
import Simpli from 'simpli-web-sdk'
import SignInView from '@/views/SignInView.vue'

Simpli.router = {
  routes: [
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignInView,
    },
  ],
}

Simpli.install()
```

___
<a id="socket"></a>

### `<Static>``<Optional>` socket

**● socket**: *[SocketInstance](../interfaces/socketinstance.md)*

*Defined in [simpli.ts:359](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L359)*

Setup of the [SocketInstance](../interfaces/socketinstance.md) in order to use socket connection.

```typescript
import Simpli from 'simpli-web-sdk'

Simpli.socket = socket.create({
  baseURL: process.env.VUE_APP_SOCKET_URL,
})

Simpli.install()
```

___

## Methods

<a id="changecurrency"></a>

### `<Static>` changeCurrency

▸ **changeCurrency**(currency: *[Currency](../enums/currency.md)*): `void`

*Defined in [simpli.ts:514](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L514)*

Change the current language of the app

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| currency | [Currency](../enums/currency.md) |  Desired currency<br><br>```typescript import Simpli, {Currency} from 'simpli-web-sdk'<br><br>Simpli.changeCurrency(Currency.BRL) ``` |

**Returns:** `void`

___
<a id="changelocale"></a>

### `<Static>` changeLocale

▸ **changeLocale**(lang: *[Lang](../enums/lang.md)*): `void`

*Defined in [simpli.ts:499](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L499)*

Change the current language of the app

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| lang | [Lang](../enums/lang.md) |  Desired language<br><br>```typescript import Simpli, {Lang} from 'simpli-web-sdk'<br><br>Simpli.changeLocale(Lang.PT\_BR) ``` |

**Returns:** `void`

___
<a id="install"></a>

### `<Static>` install

▸ **install**(): `void`

*Defined in [simpli.ts:526](https://github.com/simplitech/simpli-web-sdk/blob/77f6425/src/simpli.ts#L526)*

Applies the Simpli setup

**Returns:** `void`

___

