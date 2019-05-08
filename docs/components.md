# Components

This library provides some useful components. It is up to you to use it. 
Currently, there are three types of components: `Adap components`, `Input components` and `Utils components`

## Adap components

These components are responsible to control pagination list response.
For example, if you get a paginated list of user from your server, you have to store this data into [PageCollection](../typedocs/classes/pagecollection.md) class.
Therefore, you can control the current page, search by query, or set the order by using the components bellow.
Click on them to get details.

### [AdapOrderby](../typedocs/classes/adaporderby.md)

Change the order of the list. [See Docs](../typedocs/classes/adaporderby.md).

### [AdapPagination](../typedocs/classes/adappagination.md)

Change the page of the list. [See Docs](../typedocs/classes/adappagination.md).

### [AdapSearchfield](../typedocs/classes/adapsearchfield.md)

Search into the list. [See Docs](../typedocs/classes/adapsearchfield.md).

## Input components

Input components are useful for [Schema](./schemas.md).
They are like a `<input>`, `<textarea>`, `<select>` tag, but these components have extra features such as `mask` and `included label`.

### InputText

A mix of `<input>` and `<textarea>`. Usage to send `string`, `number` value. [See Docs](../typedocs/classes/inputtext.md).

### InputCheckbox

Works with checkbox or radio. Usage to send `boolean` value. [See Docs](../typedocs/classes/inputcheckbox.md).

### InputSelect

It uses the [VueMultiselect](https://vue-multiselect.js.org/) component. Usage to send `object` or `array` value. [See Docs](../typedocs/classes/inputselect.md).

## Utils components

Generic components. Useful in anywhere.

### Await

Controls the animation of spinner when something is loading. [See Docs](../typedocs/classes/await.md).

### Modal

Controls the modals (popups). [See Docs](../typedocs/classes/modal.md)

### Tip

Controls the tooltips. [See Docs](../typedocs/classes/tip.md)

## Next Topic
[Schemas](./schemas.md)  
