# 📣 DEPRECATED
This project is deprecated. It was reorganized in [many small packages](https://github.com/simplitech/simpli-web-sdk/issues/47)

---

<p align="center">    
  <img width="256" height="256" src="./logo.png?raw=true" alt="Simpli"/>    
  <br>    
  <a href="https://www.npmjs.com/package/simpli-web-sdk"><img src="https://img.shields.io/npm/v/simpli-web-sdk.svg"></a>    
  <a href="https://www.npmjs.com/package/simpli-web-sdk"><img src="https://img.shields.io/npm/dt/simpli-web-sdk.svg"></a>    
  <a href="https://www.npmjs.com/package/simpli-web-sdk"><img src="https://img.shields.io/npm/l/simpli-web-sdk.svg"></a>    
</p>    

# Simpli Web SDK    
 > A framework to easily build projects in Vue    
 Check it out our boilerplate generator [Simpli CLI](https://github.com/simplitech/simpli-cli) which includes the `simpli-web-sdk` ready-to-use.    

## Overview  

This library contains tools for easy development of Web Application `Vue` projects. Some classes and helpers from it will remain your code clean, organized and easy to understand.  

Once you have implemented this library into your Vue project, you are able to use these features:  

| General | Webserver | View | Utils |
|--|--|--|--|
| Locale system `native of vue-i18n` |  HTTP requests `native of axios` | Automatic `inputs` and `lists` from a schema | Useful helpers such as `sleep`, `clone` and `uid` |
| Routing system `native of vue-router` | Serialized (typed) response of HTTP requests | Input validation `native of ajv` |  Userful enums such as `Lang` and `Currency`|
| Notification popoup `native of vue-snotify` | Resources handler | Preset and customizable masks of input such as `date` and `currency` mask | Exclusivelly awesome Vue components such as `Await` (loader) or `Modal` (poupop window) |
| Classes transformation `native of class-transformer` | List handler |  |  |
| Non-vue-file access of some Vue variables such as `filters` and `routes` | Pagination handler |  |  |
|  | Web socket handler |  |  |

## Installation  

Install the `simpli-web-sdk` package from npm:  

```
npm install simpli-web-sdk  
```

Importing CSS in JS
```js
import 'simpli-web-sdk/umd/simpli-web-sdk.min.css'
```

or...

Importing CSS in SCSS
```scss
@import "~simpli-web-sdk/scss/main";
@import "~simpli-web-sdk/scss/effect"; // for transition effects (optional)
```

You may also get this package installed and ready-to-use by running our boilerplate generator [Simpli CLI](https://github.com/simplitech/simpli-cli).  

## Basic knowledge  

* [Getting started](./docs/getting-started.md)
* [The Prototype Variable](./docs/the-prototype-variable.md)
* [Socket Connections](./docs/socket-connections.md)
* [Components](./docs/components.md)
* [Schemas](./docs/schemas.md)
* [Models](./docs/models.md)
* [HTTP Requests](docs/http-requests.md)
* [Collections](./docs/collections.md)
* [Extra Settings](./docs/extra-settings.md)

## [Documentation API](./typedocs/README.md)
