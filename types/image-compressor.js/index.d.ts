declare module 'image-compressor.js' {
  export class ImgComp {
    constructor(file?: File | Blob, options?: Options)
    compress(file: File | Blob, options?: Options): Promise<Blob>
  }

  export interface Options {
    checkOrientation?: boolean
    maxWidth?: number
    maxHeight?: number
    minWidth?: number
    minHeight?: number
    width?: number
    height?: number
    quality?: number
    mimeType?: string
    convertSize?: number
    beforeDraw?(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void
    drew?(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void
    success?(file: Blob): void
    error?(error: Error): void
  }

  export interface FileObject {
    active: boolean
    data: any
    el: Element
    error?: string
    file: File
    blob?: string
    thumb?: string
    fileObject: boolean
    headers: object
    id: string
    name: string
    postAction?: string
    progress: string
    putAction?: string
    response: any
    size: number
    speed: number
    success: boolean
    timeout: boolean
    type: string
  }
}
