# Collections

Collections is just like arrays with some benefits.
Currently, there are 4 types of Collections which is:

- [Collection](../typedocs/classes/collection.md)
- [EnumCollection](../typedocs/classes/enumcollection.md)
- [ResourceCollection](../typedocs/classes/resourcecollection.md)
- [PageCollection](../typedocs/classes/pagecollection.md)

Click on them to see them in the [Docs](../typedocs/README.md).

## Collection

This is the main collection. All the others are inherited from it.
This class provides basic operations for arrays.

The example below is very intuitive, but if you want more details, check it out in the [Docs](../typedocs/classes/collection.md).

```typescript
import {Collection} from 'simpli-web-sdk'

const list: string[] = ['John', 'Mike', 'Sarah', 'Linda']
const collection = new Collection(list)

function example() {
  collection.get(2) // 'Sarah'
  collection.first() // 'John'
  collection.size() // 4
  collection.isEmpty() // false

  collection.add('William')
  collection.all() // ['John', 'Mike', 'Sarah', 'Linda', 'William']
  collection.remove('Mike') 
  collection.all() // ['John', 'Sarah', 'Linda', 'William']

  collection.lodash // the chained mode of lodash
    .shuffle()
    .value()
}
```

## ResourceCollection

The [ResourceCollection](../typedocs/classes/resourcecollection.md) is responsible to manage the HTTP request which has resources array as response.

The example below is very intuitive, but if you want more details, check it out in the [Docs](../typedocs/classes/resourcecollection.md).

```typescript
import {ResourceCollection} from 'simpli-web-sdk'
import {User} from './model/resource/User'

const filter = {
  search: 'foo'
}
const collection = new ResourceCollection(User).addFilter(filter)

async function example() {
  await collection.queryAsArray() // equivalent of GET -> /user?search=foo
  collection.getResponse(1) // get the user with id = 1
}
```

## EnumCollection

The [EnumCollection](../typedocs/classes/enumcollection.md) is similar with the ResourceCollection.
The difference is that you use Enums instead Resources.

The example below is very intuitive, but if you want more details, check it out in the [Docs](../typedocs/classes/resourcecollection.md).

```typescript
/**
 * ./locale/en-US/lang.ts
 * Language: English United States
 */
export default {
  enums: {
    Animal: {
      CAT: 'Cat',
      DOG: 'Dog',
    }
  }
}
```

```typescript
// ./enums/Animal

export enum Animal {
  CAT = 1,
  DOG = 2,
}
```

```typescript
import {EnumCollection} from 'simpli-web-sdk'
import {Animal} from './enums/Animal'

const animals = new EnumCollection(Animal, 'enums.Animal') // second parameter is for the i18n path

function example() {
  animals.all()
}
```

## PageCollection

The [PageCollection](../typedocs/classes/pagecollection.md) is responsible to manage the paged responses of resources from an HTTP request.

In order to use this class, the response should return a object of this format:

```typescript
const resp = {
  items: [], // the items of the current page
  total: 0, // the sum of items of all pages
}
```

The example below is very intuitive, but if you want more details, check it out in the [Docs](../typedocs/classes/pagecollection.md).

```typescript
import {PageCollection} from 'simpli-web-sdk'
import {User} from './model/resource/User'

const filter = {
  extra: 'extra'
}
const collection = new PageCollection(User).addFilter(filter)

async function example() {
  collection.search = 'foo'
  collection.currentPage = 2
  collection.perPage = 10
  collection.orderBy = 'name'
  collection.asc = true

  await collection.queryAsPage()
  // equivalent of GET -> /user?extra=extra&query=foo&page=2&limit=10&orderBy=name&ascending=true
}
```

## Next Topic
[Extra Settings](./extra-settings.md)
