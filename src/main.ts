import 'reflect-metadata'

import './vue'

import * as App from './app'
import * as Component from './components'
import * as Decorator from './decorators'
import * as Enum from './enums'
import * as Helper from './helpers'
import * as Interface from './interfaces'
import * as VeeValidate from 'vee-validate'

export { Simpli as default, $ } from './simpli'

export * from './app'
export * from './components'
export * from './decorators'
export * from './enums'
export * from './helpers'
export * from './interfaces'

export { App, Component, Decorator, Enum, Helper, Interface, VeeValidate }
