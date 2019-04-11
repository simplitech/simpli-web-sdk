# Requests and Resources
This section explains the use of tools which is responsible to make HTTP requests and REST operations.

## Configuration
```typescript
import Simpli from 'simpli-web-sdk'
import axios from 'axios'

// creating an axios instance with a custom config
// https://github.com/axios/axios#creating-an-instance
const axiosInstance = axios.create({
  baseURL: 'http://example.com/api'
})

// register it at simpli-web-sdk
Simpli.axios = axiosInstance 

Simpli.install()
```

Now you have a custom axios which is accessible in `$.axios`

## HTTP request usages

### Basic - with object response (not recommended)
```typescript
import {$} from 'simpli-web-sdk'

async function example1() {
    const resp = await $.axios.get('/user/1')
    const user = resp.data // object
}

async function example2() {
    const user = {
        name: 'foo'
    }
    await $.axios.post('/user', user)
}
```

### Basic - with class object response (not recommended)
```typescript
import {Helper} from 'simpli-web-sdk'

class User {
    name?: string
    whoami() {
        console.log('I am an User object')
    }
}

async function example1() {
    const resp = await Helper.call($.axios.get('/user/1'), User)
    const user = resp.data // object of User
    user.whoami() // it will work
}

async function example2() {
    const user = new User()
    await Helper.call($.axios.get('/user/1'), user)
    // the user will be populated
}

async function example3() {
    const user = new User()
    user.name = 'Michael Jackson'
    const resp = await Helper.call($.axios.post('/user', user), String)
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
}
```

### Standard - using request helper
Request helper provides a mixing of the application above in order to simplify the code. 
```typescript
import {Helper} from 'simpli-web-sdk'

class User {
    name?: string
    whoami() {
        console.log('I am an User object')
    }
}

async function example1() {
    const resp = await Helper.request(User).get('/user/1')
    const user = resp.data // object of User
    user.whoami() // it will work
}

async function example2() {
    const user = new User()
    await Helper.request(user).get('/user/1')
    // the user will be populated
}

async function example3() {
    const user = new User()
    user.name = 'Michael Jackson'
    const resp = await Helper.request(String).post('/user', user)
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
}
```

### Standard - using Model class (recommended)
Model class grants your class to do request in it.
```typescript
import {Model} from 'simpli-web-sdk'

class User extended Model {
    name?: string
    /**/
}

async function example1() {
    const user = new User()
    await user.request().get('/user/1')
    // the user will be populated
}

async function example2() {
    const user = new User()
    user.name = 'Michael Jackson'
    const resp = await user.request(String).post('/user', user)
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
}
```

### Advanced - using resource helper (not recommended)
The following example will use the resource helper which is very usefull to handle CRUDs. This helper has the following structure:

```typescript
function resource<T>(
    endpoint: string, // endpoint of a CRUD in order to use the default actions
    customActionConfig: ResourceActionConfig = {}, // custom actions config
    axiosConfig: AxiosRequestConfig = {}, // axios request config
    responseType?: ResponseType<T> // response type
): ResourceAction<T>
```

This helper will return the default actions (for CRUD), plus the custom actions (defined by you).

The default actions config is the following:
```js
{
    query: {method: 'GET', url: endpoint}
    save: {method: 'POST', url: endpoint}
    update: {method: 'PUT', url: endpoint}
    remove: {method: 'DELETE', url: endpoint}
}
```

Each of actions has this following structure: 
```typescript
// for any method
interface ResourceAction<T = any> {
    [action: string]: (paramsOrData?: any) => Promise<AxiosResponse<T>>
}
// or (only for POST, PUT or PATCH)
interface ResourceAction<T = any> {
    [action: string]: (params?: any, data?: any) => Promise<AxiosResponse<T>>
}
```

Let us take a look of examples of usage:

```typescript
import {Helper, ResponseType} from 'simpli-web-sdk'

class User {
    id?: number
    name?: string
    printID() {
        console.log(this.id)
    }
}

class Friend {
    id?: number
    name?: string
    printID() {
        console.log(this.id)
    }
}

const customActionConfig = {
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
		url: '/user{/id}/friend',
	},
	removeFriend: {
		method: 'DELETE',
		url: '/user{/id}/friend{/idFriend}',
	},
}

const axiosConfig = {
    /** any axios custom config you want **/
}

let user = new User()
let friend = new Friend()

const users: User[] = []
const friends: Friend[] = [] 

const resource = <T>(responseType?: ResponseType<T>) => Helper.resource(
    'user{/id}',
    customActionConfig,
    axiosConfig,
    responseType
)

// get one user
async function example1() {
    await resource(user).query({id: 1}) // GET -> /user/1
    user.printID() // 1
}

// list users
async function example2() {
    await resource(users).query() // GET -> /user
    for (const user of users) {
        user.printID()
    }
}

// create a user
async function example3() {
    user = new User()
    user.name = 'Michael Jackson'
    const resp = await resource(String).save(user) // POST -> /user
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
}

// update a user
async function example4() {
    await resource.query({id: 1}) // GET -> /user/1
    user.name = 'Arnold Schwarzenegger'
    const resp = await resource(String).update({id: user.id}, user) // PUT -> /user/1
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
}

// remove a user
async function example5() {
    const resp = await resource(String).remove({id: user.id}) // DELETE -> /user/1
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
}

// get one friend of a user
async function example6() {
    await resource(friend).getFriend({id: 1, idFriend: 2}) // GET -> /user/1/friend/2
    friend.printID() // 2
}

// list friends of a user
async function example7() {
    await resource(friends).listFriend() // GET -> /user/1/friend
    for (const friend of friends) {
        friend.printID()
    }
}

// add a friend into a user
async function example8() {
    friend = new Friend()
    friend.name = 'Eminem'
    const resp = await resource(String).addFriend({id: 1}, friend) // POST -> /user/1/friend
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
}

// remove a friend of a user
async function example9() {
    const resp = await resource(String).removeFriend({id: 1, idFriend: 2}) // DELETE -> /user/1/friend/2
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
}
```

### Advanced - using Resource and Collection classes (recommended)
```typescript
import {Resource, Collection} from 'simpli-web-sdk'

class User extended Resource {
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

class Friend extended Resource {
    $endpoint = '/friend{/id}'

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
// The method $newChild will link the friend instance into user instance
// This way the friend will inherit the root instance (user)
let friend = user.$newChild(Friend)

const userCollection = new Collections(User)
const friendCollection = userCollection.$newChild(Friend)

// get one user
async function example1() {
    await user.$resource().query({id: 1}) // GET -> /user/1
    user.printID() // 1
    
    // same effect
    await user.$get(1) // GET -> /user/1
}

// list users
async function example2() {
    await userCollection.$resource().query() // GET -> /user
    for (const item of collection.items) {
        item.printID()
    }
    
    // same effect
    await collection.$query() // GET -> /user/1
}

// create a user
async function example3() {
    user = new User()
    user.name = 'Michael Jackson'
    const resp = await user.$resource(String).save(user) // POST -> /user
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
    
    // same effect
    await user.$save(String) // POST -> /user
}

// update a user
async function example4() {
    await resource.query({id: 1}) // GET -> /user/1
    user.name = 'Arnold Schwarzenegger'
    const resp = await user.$resource(String).update({id: user.id}, user) // PUT -> /user/1
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
            
    // same effect
    await user.$update(String) // POST -> /user
}

// remove a user
async function example5() {
    const resp = await user.$resource(String).remove({id: user.id}) // DELETE -> /user/1
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
                
    // same effect
    await user.$remove(String) // POST -> /user
}

// get one friend of a user
async function example6() {
    await friend.$resource().getFriend({id: 1, idFriend: 2}) // GET -> /user/1/friend/2
    friend.printID() // 2

    // same effect
    await friend.$get(1,2) // GET -> /user/1/friend/2
}

// list friends of a user
async function example7() {
    await friendCollection.$resource().listFriend({id: 1}) // GET -> /user/1/friend
    for (const item of friendCollection.items) {
        item.printID()
    }
    
    // same effect
    await friendCollection.$query() // GET -> /user/1/friend
}

// add a friend into a user
async function example8() {
    friend = new Friend()
    friend.name = 'Eminem'
    const resp = await friend.$resource(String).addFriend({id: 1}, friend) // POST -> /user/1/friend
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
    
    // same effect
    await friend.$save(String) // POST -> /user/1/friend
}

// remove a friend of a user
async function example9() {
    const resp = await friend.$resource(String).removeFriend({id: 1, idFriend: 2}) // DELETE -> /user/1/friend/2
    // example of a string response ('ok' = success)
    console.log(resp.data) // 'ok'
    
    // same effect
    await friend.$remove(String) // DELETE -> /user/1/friend/2
}
```
