<p align="center">  
  <img width="256" height="256" src="./logo.png" alt="Simpli"/>  
  <br>  
  <a href="https://www.npmjs.com/package/simpli-web-sdk"><img src="https://img.shields.io/npm/v/simpli-web-sdk.svg"></a>  
  <a href="https://www.npmjs.com/package/simpli-web-sdk"><img src="https://img.shields.io/npm/dt/simpli-web-sdk.svg"></a>  
  <a href="https://www.npmjs.com/package/simpli-web-sdk"><img src="https://img.shields.io/npm/l/simpli-web-sdk.svg"></a>  
</p>  
  
# Simpli Web SDK  
  
> A framework to easily build projects in Vue  
  
Check it out our boilerplate generator [Simpli CLI](https://github.com/simplitech/simpli-cli) which includes the `simpli-web-sdk` ready to use.  

## Overview

This library contains tools for easy development of Web Application `Vue` projects. Some classes and helpers from it will remain your code clean, organized and easy to understand.

Once you have implemented this library into your Vue project, you are able to use this features:

 - General
 -- Locale system `native of vue-i18n`
 -- Routing system `native of vue-router`
 -- Notification popoup `native of vue-snotify`
 -- Classes transformation `native of class-transformer`
 -- Non-vue-file access of some Vue variables such as `filters` and `routes`
 
 - Webserver
 -- HTTP requests `native of axios`
 -- Serialized (typed) response of HTTP requests
 -- Resources handler
 -- List handler
 -- Pagination handler
 -- Web socket handler
 
 - View
 -- Automatic `inputs` and `lists` from a schema
 -- Input validation `native of ajv`
 -- Preset and customizable masks of input such as `date` and `currency` mask

- Utils
 -- Useful helpers such as `sleep`, `clone` and `uid`
 -- Userful enums such as `Lang` and `Currency`
 -- Exclusivelly awesome Vue components such as `Await` (loader) or `Modal` (poupop window)

## Installation

Install the `simpli-web-sdk` package from npm:

```
npm install simpli-web-sdk
```

You may also get this package installed and ready-to-use by running our boilerplate generator [Simpli CLI](https://github.com/simplitech/simpli-cli).

## Geting Started

Once you have installed `simpli-web-sdk` into your dependencies, you have to provides some settings which is:

- Axios instance
- Socket instance
- Default language
- Default currency
- Global `Vue` components definitions
- Global `Vue` filters definitions
- Language definitions
- Router definitions

All those settings must be defined in `Simpli` class and then run in `Simpli.install()` to apply.

You may have this: 

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

### Example of HTTP configuration
```typescript
// config/http.config.ts

import axios, {AxiosError} from 'axios'
import {$, Helper, Enum, socket} from '@/simpli'  
import {AppHelper} from '@/helpers' // helpers provided by your code

/**  
 * Web Server request & response config 
 */
const axiosInstance = axios.create({  
  baseURL: process.env.VUE_APP_API_URL,  
})

/**  
 * Socket Server config 
 */
const socketInstance = socket.create({  
  baseURL: process.env.VUE_APP_SOCKET_URL,  
})

/**  
 * Interceptor for every HTTP request of this app 
 */
axiosInstance.interceptors.request.use((config) => {  
  const pattern = /^(?:https?:)?\/\/[\w.]+[\w-/]+[\w?&=%]*$/g  
  const isRelativeUrl = !pattern.exec(config.url || '')  
  
  // Example of default headers
  if (isRelativeUrl) {  
    config.headers['Accept-Language'] = AppHelper.getLanguage()  
    config.headers['X-Client-Version'] = `w${AppHelper.getVersion()}` // w = web  
  
    // If the user is logged then send his token
    if (AppHelper.isLogged()) {  
      config.headers.Authorization = `Bearer ${AppHelper.getToken()}`  
    }  
  }  
  
  return config  
})  

/**  
 * Interceptor for every HTTP response of this app 
 */
axiosInstance.interceptors.response.use(  
  (response) => response,  
  (error: AxiosError) => {  
    const response = error.response  
  
  if (error.config.headers['X-Ignore-Errors']) {
      // do not provide and error with this header
      return Promise.reject('')  
    }  
  
    if (!response) {
	  // emit 'No response from server'
      Helper.error('system.error.noServer')  
      return Promise.reject($.t('system.error.noServer'))  
    }  
  
    if (response.status === Enum.HttpStatus.UNAUTHORIZED) { 
	  // if the response type is unauthorized then sign out this user
      AppHelper.signOut()  
    }  
  
    if (response.status && response.status >= 400) {
      // emit a generic error provided by server response
      $.snotify.error(response.data.message || response.statusText, response.status.toString())  
      return Promise.reject(response.data.message || response.statusText)  
    }  
  
    return Promise.reject(error)  
  },  
)

export {axiosInstance, socketInstance}
```

### Example of LOCALE configuration

```typescript
// config/locale.config.ts

import {Lang, Currency, LocaleOptions} from '@/simpli'  
  
/**  
 * App languages pack
 * The same provided by vue-i18n
 */
import enUs from '@/locale/en-US/lang'  
import ptBr from '@/locale/pt-BR/lang'  
  
/**  
 * Moment JS languages pack * Note: US English is already imported by default 
 */
import 'moment/locale/pt-br'  
  
/**  
 * App default language
 */
export const defaultLang = process.env.VUE_APP_LANG as Lang  
  
/**  
 * App default currency
 */
export const defaultCurrency = process.env.VUE_APP_CURRENCY as Currency  
  
/**  
 * vue-i18n locale
 */
export const localeVueI18n: LocaleOptions = {  
  [Lang.EN_US]: enUs,  
  [Lang.PT_BR]: ptBr,  
}  
  
/**  
 * ajv-i18n locale
 */
export const localeAjvI18n: LocaleOptions = {  
  [Lang.EN_US]: require('ajv-i18n/localize/en'),  
  [Lang.PT_BR]: require('ajv-i18n/localize/pt-BR'),  
}
```

### Example COMPONENT configuration
```typescript
// config/component.config.ts

import {ComponentOptions} from '@/simpli'  
import MyComponent from '@/components/MyComponent.vue'  
  
/**  
 * Global VUE Components
 */
export const components: ComponentOptions = {  
  MyComponent,  
}
```

### Example FILTER configuration
```typescript
// config/filter.config.ts

import {FilterOptions} from '@/simpli'  
  
/**  
 * VUE Filters
 */
export const filters: FilterOptions = {
  exclamation: (value?: string): string => {
    return value ? `${value}!!` : ''
  },
}
```

### Example ROUTER configuration
```typescript
// config/router.config.ts

import {RouterOptions} from 'vue-router'  
 
import SignInView from '@/views/SignInView.vue'  
import ResetPasswordView from '@/views/ResetPasswordView.vue'  
import RecoverPasswordView from '@/views/RecoverPasswordView.vue'  
  
/**  
 * VUE Router Configuration
 */
export const router: RouterOptions = {  
  routes: [  
    {  
      path: '/sign-in',  
      name: 'signIn',  
      component: SignInView,  
    },  
    {  
      path: '/password/reset',  
      name: 'resetPassword',  
      component: ResetPasswordView,  
    },  
    {  
      path: '/password/recover/:hash',  
      name: 'recoverPassword',  
      component: RecoverPasswordView,  
      props: true,  
    },
  ],
}
```
