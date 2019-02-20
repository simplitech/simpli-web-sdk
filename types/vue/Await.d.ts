import { Component as Comp, AsyncComponent as AsyncComp } from 'vue/types'
export declare type CP = Comp<any, any, any, any> | AsyncComp<any, any, any, any>
export interface Loader {
  [key: string]: CP
}
export declare class AwaitController {
  defaultTransition: string | null
  defaultSpinner: string | null
  defaultSpinnerColor: string
  defaultSpinnerPadding: string
  defaultSpinnerScale: number
  loaders: Loader
  addLoader(name: string, component: CP): void
  init(name?: string): void
  done(name?: string): void
  error(name?: string): void
  run<T>(func: (...args: any[]) => Promise<T>, name?: string, delay?: number): Promise<T>
}
