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
