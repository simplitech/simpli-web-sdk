# HTTP Requests

This section explains the use of tools which is responsible to make HTTP requests and REST operations.

All requests are based on [Axios](https://github.com/axios/axios) instance that is provided in the [Getting Started](./getting-started.md) section.

You might to use [Axios](https://github.com/axios/axios) directly by using the prototype `$.axios`.
However, the response you get is always a generic object.

Fortunately, there are other ways to make HTTP requests more efficiently. 

### Requests in the Request class

The [Request](../typedocs/classes/request.md) class is the common way to make HTTP requests in the `simpli-web-sdk`.

The example below is very intuitive, but if you want more details, check it out in the [Docs](../typedocs/classes/request.md).

```typescript
import {Request} from 'simpli-web-sdk'

class User {
  name?: string
  whoami() {
    console.log('I am an User object')
  }
}

// creating a user instance directly from the request
async function example1() {
  const user = await Request.get('/user/1')
    .as(User)
    .getData()

  user.whoami() // it will work
}

// populating a empty user instance from the request
async function example2() {
  const model = new User()

  await Request.get('/user/1')
    .as(model)
    .getData()
  // the model will be populated
}

// sending data to the server
async function example3() {
  const user = new User()
  user.name = 'Michael Jackson'

  const resp = await Request.post('/user', user)
    .asString() // assuming that the response data is a string ('ok' = success)
    .getResponse()

  console.log(resp.data) // 'ok'
}

// getting a list of users
async function example4() {
  const list = await Request.get('/user')
    .asArrayOf(User) // assuming that the response data is an array
    .getData()

  console.log(list) // list of users
}
```

### Requests in the Model class

[Model](../typedocs/classes/model.md) class grants its instances to do request in it.

The example below is very intuitive, but if you want more details, check it out in the [Docs](../typedocs/classes/model.md).

```typescript
import {Model} from 'simpli-web-sdk'

class User extends Model {
  name?: string
  /**/
}

const user = new User()

// populating data
async function example1() {
  await user.$populateFrom('/user/1')
  // the user will be populated
}

// persisting data
async function example2() {
  user.name = 'Michael Jackson'
  await user.$persistFrom('/user')
  // the changes will be persisted
}

// listing data
async function example3() {
  const resp = await user.$listFrom('/user')
  const list = resp.data
}
```

### Requests in the Resource class

The [Resource](../typedocs/classes/resource.md) provides a easy way to handle CRUDs (create, read, update and delete).

The example below is very intuitive, but if you want more details, check it out in the [Docs](../typedocs/classes/resource.md).

```typescript
import {Resource} from 'simpli-web-sdk'

class User extends Resource {
	$endpoint = '/user{/id}'
	$customActionConfig = {
		getFriend: {
			method: 'GET',
			url: '/user{/id}/friend{/idFriend}',
		},
		listFriend: {
			method: 'GET',
			url: '/user{/id}/friend',
		},
		addFriend: {
			method: 'POST',
			url: '/user{/id}/friend'
		},
		removeFriend: {
			method: 'DELETE',
			url: '/user{/id}/friend{/idFriend}'
		},
	}
	$axiosConfig = {
		/** any axios custom config you want **/
	}
	
	get $id() {
    return this.id || 0
	}
	set $id(val: number) {
    this.id = val
	}
	
	id?: number
    name?: string
    printID() {
        console.log(this.id)
    }
}

class Friend extends Resource {
  get $id() {
    return this.id || 0
  }
  set $id(val: number) {
    this.id = val
  }

  id?: number
  name?: string
  printID() {
    console.log(this.id)
  }
}

let user = new User()

// get one user
async function example1() {
  await user.$getOne(1) // equivalent of GET -> /user/1
  user.printID() // 1
}

// list users
async function example2() {
  const resp = await user.$getMany({search: 'foo'}) // equivalent of GET -> /user?search=foo
  const users = resp.data
}

// create a user
async function example3() {
  user = new User()
  user.name = 'Michael Jackson'
  await user.$save() // equivalent of POST -> /user
}

// update a user
async function example4() {
  await user.$getOne(1) // equivalent of GET -> /user/1
  user.name = 'Arnold Schwarzenegger'
  await user.$update() // equivalent of PUT -> /user/1
}

// remove a user
async function example5() {
  await user.$getOne(1) // equivalent of GET -> /user/1
  await user.$delete() // equivalent of DELETE -> /user/1
}

// get one friend of a user
async function example6() {
  const friend = new Friend()

  await user.$action
    .getFriend({id: 1, idFriend: 2})
    .as(friend)
    .getData() // equivalent of GET -> /user/1/friend/2

  friend.printID() // 2
}

// list friends of a user
async function example7() {
  const friends = await user.$action
    .listFriend({id: 1, search: 'foo'})
    .asArrayOf(Friend)
    .getData() // equivalent of GET -> /user/1/friend?search=foo
}

// add a friend into a user
async function example8() {
  const friend = new Friend()
  friend.name = 'Eminem'

  await user.$action
    .addFriend({id: 1}, friend)
    .asAny()
    .getData() // equivalent of POST -> /user/1/friend
}

// remove a friend of a user
async function example9() {
  await user.$action
    .removeFriend({id: 1, idFriend: 2})
    .asAny()
    .getData() // equivalent of DELETE -> /user/1/friend/2
}
```

## Next Topic
[Collections](./collections.md)
