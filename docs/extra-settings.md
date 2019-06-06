# Extra Settings

It is possible to customize some default variables according to your needs.

Here is the possibilities:

```typescript
import {$, Schema, PageCollection, ToastConfig, InputText} from 'simpli-web-sdk'
import {CustomMaskPreset} from '@/mask/CustomMaskPreset'

// The vue-spinner is an example of compatible components to add as a loader of Await component
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

// Adding ScaleLoader
$.await.addLoader('ScaleLoader', ScaleLoader)

$.await.defaultTransition = 'fade' // default effect when the content show up or hide
$.await.defaultSpinner = 'ScaleLoader' // default loader if it is not defined in the component
$.await.defaultSpinnerColor = '#21AEB6' // default loader color
$.await.defaultSpinnerPadding = '0' // default loader padding
$.await.defaultSpinnerScale = 1 // default loader scale. 1 means 100% of his size. e.g 0.5 = 50% of his size

$.modal.defaultBody = document.body // body reference in order to lock the scroll
$.modal.defaultTransition = 'blur' // default effect when the modal show up or hide
$.modal.defaultBackgroundTransition = 'fade' // default effect for background when the modal show up or hide
$.modal.defaultClosable = true // set if by default the modal can be closed or not
$.modal.defaultCloseOutside = true // set if by default a click on outside of modal can close it

$.tip.defaultMessage = '' // default message when the tip show up
$.tip.defaultTransition = 'fade' // default effect when the tip show up or hide
$.tip.defaultWidth = 'auto' // default width value for tip. Can be a number or 'auto'
$.tip.defaultOffset = 0 // default offset value for tip

// This is the same rule of the vue-snotify
// https://artemsky.github.io/vue-snotify/documentation/api/snotify.html#setdefaults
$.snotify.setDefaults({
  global: ToastConfig.ToastGlobalConfig,
  toast: ToastConfig.ToastDefaultConfig,
})

// Default path translation for Schema
// {schemaName} represents the name of schema
// {fieldName} represents the name of the field
Schema.defaultI18nPath = 'schema.{schemaName}.{fieldName}'

// Default minimum characters to start the searching in the Page Collection
PageCollection.defaultMinCharToSearch = 3

// Default the initial page of a Page Collection
PageCollection.defaultCurrentPage = 0

// Default number of page in the Page Collection
PageCollection.defaultPerPage = 20

// You change the AJV instance by accessing $.ajv.instance
// Here is the docs https://github.com/epoberezkin/ajv#api
$.ajv.instance.addFormat('customValidationFormat', new RegExp(/.+/))

// Adding a preset of a mask in the InputText component
InputText.addPreset('customMaskPreset', CustomMaskPreset)
```

## Next Topic
[Check it out the complete API](../typedocs/README.md)

