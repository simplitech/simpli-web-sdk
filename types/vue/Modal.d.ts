import { Vue } from 'vue-property-decorator'
export declare const Event: object & Record<never, any> & Vue
export declare enum State {
    HIDDEN = 0,
    SHOWN = 1
}
export declare class ModalController {
    defaultBody: HTMLElement
    defaultTransition: string | null
    defaultBackgroundTransition: string | null
    defaultClosable: boolean
    defaultCloseOutside: boolean
    open(name?: string): void
    close(name?: string): void
    toggle(name?: string): void
    closeAll(): void
}
export declare class Modal extends Vue {
    name?: string
    title?: string
    innerClass?: string
    effect?: string
    backgroundEffect?: string
    closable?: boolean
    closeOutside?: boolean
    state: State
    transition: string | null
    backgroundTransition: string | null
    isClosable: boolean
    isCloseOutside: boolean
    body: HTMLElement | null
    bodyOverflowY: string | null
    stateEvent(val: State): void
    open(): void
    close(force?: boolean): void
    closeFromView(e: Event): void
    beforeMount(): void
}
