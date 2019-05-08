# The prototype variable

After you installed `simpli-web-sdk`, you may use the [$](../typedocs/classes/_.md).
This is a constant which has the main prototypes variables of Vue components.
Therefore, you have the access of theses variables from a non-vue-component file.

Take a look of its content:

| Variable | Alias inside a Vue component | Details |
|--|--|--|
| $.axios | this.$axios | access of axios instance |
| $.socket | this.$socket | access of socket instance |
| $.components | - | gets global Vue components |
| $.filters | - | gets global Vue filters |
| $.bus | this.$bus | custom `bus` event generated after you run `Simpli.install()` |
| $.router | this.$router | gets the `router` variable from [vue-router](https://router.vuejs.org/) module |
| $.route | this.$route | gets the `route` variable from [vue-router](https://router.vuejs.org/) module |
| $.i18n | this.$i18n | gets the `i18n` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module |
| $.t | this.$t | gets the `t` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module |
| $.tc | this.$tc | gets the `tc` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module |
| $.te | this.$te | gets the `te` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module |
| $.d | this.$d | gets the `d` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module |
| $.n | this.$n | gets the `n` variable from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) module |
| $.snotify | this.$snotify | variable from [vue-snotify](https://artemsky.github.io/vue-snotify/documentation/index.html) module |
| $.ajv | this.$ajv | gets the `ajv` variable from [ajv](https://ajv.js.org/) module |
| $.await | this.$await | controller of [Await](../typedocs/classes/await.md) Component |
| $.modal | this.$modal | controller of [Modal](../typedocs/classes/modal.md) Component |
| $.tip | this.$tip | controller of [Tip](../typedocs/classes/tip.md) Component |

## Examples of usage

```typescript
import {$} from 'simpli-web-sdk'
import {schema, data} from '@/ajv/mySchema'

$.await.get('path/to/url') // request from the native axios

$.socket.connect('notification', 'path/to/url') // socket connection

$.component.MyComponent // access your global component

$.filter.truncate('foobar', 3) // it returns 'foo...'

$.router.push('/login') // go to login page

$.i18n.messages // get locale messages structure

$.bus.myCustomAction() // custom action you have provided

$.route.query // get the query params of current page

$.t('path.to.locale') // translate a text

$.snotify.success('Success message') // emit a success message

$.ajv.validate(schema, data) // validate a data from a schema

$.await.init('awaitName') // start loading some content

$.modal.open('modalName') // open a modal by his name

$.tip.show('tipName') // show a tip by his name
```

Each of individual variables have more details in [Docs](../typedocs/README.md)

## Next Topic
[Socket Connections](./socket-connections.md)
