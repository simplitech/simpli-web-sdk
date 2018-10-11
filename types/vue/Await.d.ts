import { Component as Comp, AsyncComponent as AsyncComp } from 'vue/types'
import { Vue } from 'vue-property-decorator'
export declare type CP = Comp<any, any, any, any> | AsyncComp<any, any, any, any>
export interface Loader {
    [key: string]: CP
}
export declare enum View {
    DEFAULT = 0,
    LOADING = 1,
    ERROR = 2
}
export declare const Event: object & Record<never, any> & Vue
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
    run(func: Function, name?: string, delay?: number): Promise<any>
}
export declare class Await extends Vue {
    name?: string
    effect?: string
    spinner?: string
    spinnerColor?: string
    spinnerPadding?: string
    spinnerScale?: number
    transition: string | null
    loader: string | null
    color: string | null
    padding: string | null
    zoom: number | null
    view: View
    height?: number
    readonly hasLoadingSlot: boolean
    readonly hasErrorSlot: boolean
    readonly minHeight: string
    mounted(): void
    beforeMount(): void
}
