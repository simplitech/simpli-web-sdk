import { Component, Watch, Vue } from 'vue-property-decorator'
import FileUpload from 'vue-upload-component'
import Cropper from 'cropperjs'
import Compressor from 'compressorjs'
import { $ } from '../../simpli'
import { Request, UploadConfig } from '../../app'
import { FileObject } from '../../interfaces'
import { Helper } from '../../main'

/**
 * This class should be used as an extended class
 * Use whenever it is necessary to use the upload system
 */
@Component({
  components: { FileUpload },
})
export class MixinUpload extends Vue {
  // references
  readonly UPLOAD_REF: string = 'upload'
  readonly CROPPER_REF: string = 'cropper'

  // configuration
  readonly UPLOAD_CONFIG = new UploadConfig()
  readonly COMPRESS_CONFIG = UploadConfig.compressedImageStandard
  readonly USE_CROP: boolean = false

  files: FileObject[] = []
  cache: string[] = []

  cropper: Cropper | null = null

  shown = false

  private cropperMode = false

  /**
   * Event when the upload inputs a file
   * Do nothing unless it is implemented by the child
   */
  onUploadReady() {
    /**/
  }

  /**
   * Event when the upload starts
   * Do nothing unless it is implemented by the child
   */
  onUploadStart() {
    /**/
  }

  /**
   * Event when the upload ends
   * Do nothing unless it is implemented by the child
   */
  onUploadEnd(urls: string[]) {
    /**/
  }

  extension(file: FileObject) {
    if (this.files.length) {
      const str = file.name
      const match = /^(?:[a-zA-Z0-9\s_\\.\-():])+(\..\w+)$/g.exec(str)
      return (match && match[1]) || ''
    }

    return ''
  }

  get resources() {
    return this.files.map((file: FileObject) => {
      const params = {
        fileName: `${Helper.uid()}${this.extension(file)}`,
      }
      return Request.get(this.UPLOAD_CONFIG.endpoint, { params })
        .asString()
        .getResponse()
    })
  }

  get fileError() {
    let error: string | boolean = false

    for (const file of this.files) {
      if (file.error) error = file.error
    }

    return error
  }

  get isCompleted() {
    let status = true

    for (const file of this.files) {
      if (!file.success) status = false
    }

    return status && this.files.length
  }

  get isCropperMode() {
    return this.cropperMode
  }

  async inputFilter(newFile: FileObject, oldFile: FileObject, prevent: Function) {
    if (newFile && !oldFile) {
      // Before adding a file
      // Filter system files or hide files
      if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
        return prevent()
      }
      // Filter php html js file
      if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
        return prevent()
      }
      // Automatic compression
      if (newFile.file && newFile.type.substr(0, 6) === 'image/') {
        await this.compressImage(newFile)
      }
    }

    if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
      // Create a blob field
      newFile.blob = URL.createObjectURL(newFile.file)

      // Thumbnails
      newFile.thumb = ''
      if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
        newFile.thumb = newFile.blob
      }
    }

    return 1
  }

  async inputFile(newFile: FileObject, oldFile: FileObject) {
    const { minSize, size } = this.UPLOAD_CONFIG
    const { UPLOAD_REF } = this
    const component = this.$refs[UPLOAD_REF] as FileUpload

    this.shown = false

    if (newFile && oldFile) {
      // update
      // min size
      if (newFile.size >= 0 && minSize > 0 && newFile.size < minSize) {
        component.update(newFile, { error: 'minSize' })
      }
      // max size
      if (newFile.size > size) {
        component.update(newFile, { error: 'maxSize' })
      }

      if (newFile.progress !== oldFile.progress) {
        // progress
      }
      if (newFile.error && !oldFile.error) {
        // error
      }
      if (newFile.success && !oldFile.success) {
        // success
      }

      if (this.USE_CROP && !component.active) {
        this.cropperMode = true
      }
    }
    if (!newFile && oldFile) {
      // remove
      if (oldFile.success && oldFile.response.id) {
        /**/
      }

      this.exitCropperMode()
    }
  }

  async compressImage(newFile: FileObject) {
    const compress = (file: File, options: Compressor.Options) =>
      new Promise<Blob>(resolve => {
        const success = (file: Blob) => resolve(file)
        return new Compressor(newFile.file, { ...options, ...{ success } })
      })

    const component = this.$refs[this.UPLOAD_REF] as FileUpload

    newFile.error = 'compressing'

    await Helper.sleep(1000)

    try {
      const blob = await compress(newFile.file, this.COMPRESS_CONFIG)
      component.update(newFile, { error: '', file: blob, size: blob.size, type: blob.type })
    } catch (e) {
      component.update(newFile, { error: e.message || 'compress' })
    }
  }

  validate() {
    if (!this.files.length) Helper.abort('system.error.noFileSelected')

    if (!this.fileError) return
    if (this.fileError === 'compressing') Helper.abort('system.error.fileNotCompressed')

    Helper.abort('system.error.fileSend')
  }

  async startUpload() {
    this.validate()

    const { resources, UPLOAD_REF } = this
    const component = this.$refs[UPLOAD_REF] as FileUpload

    $.await.init('uploading')

    try {
      // Call all promises in order to get the url of uploaded of each selected file
      const responses = await Promise.all(resources)

      responses.forEach((resp, i) => {
        const fullUrl = resp.data
        const url = fullUrl.split('?')[0]

        // Define PUT Method URL address of each file
        this.files[i].putAction = fullUrl

        // Store the url link of the uploaded file
        this.cache.push(url)
      })
    } catch (e) {
      $.await.error('uploading')
      throw e
    }

    this.onUploadStart()
    component.active = true
  }

  removeUploadFile(file: FileObject) {
    const component = this.$refs[this.UPLOAD_REF] as FileUpload
    if (component) {
      component.remove(file)
    }
  }

  exitCropperMode() {
    this.cropperMode = false
  }

  resetUpload() {
    this.files = []
    this.cache = []
    this.exitCropperMode()
  }

  async triggerEvent() {
    this.shown = true
    await this.$nextTick()
    const component = this.$refs[this.UPLOAD_REF] as FileUpload
    if (component) {
      const el = component.$el.getElementsByTagName('label')[0]
      el.click()
    }
  }

  @Watch('isCompleted')
  private async completedEvent(status: boolean) {
    if (status) {
      $.await.done('uploading')
      this.onUploadEnd(this.cache)
    }
  }

  @Watch('cropperMode')
  private async cropperModeEvent(val: boolean) {
    if (!val) {
      if (this.cropper) {
        this.cropper.destroy()
        this.cropper = null
      }
      return
    }

    const { files, UPLOAD_REF } = this
    const component = this.$refs[UPLOAD_REF] as FileUpload

    await this.$nextTick()

    const el = this.$refs[this.CROPPER_REF] as HTMLImageElement
    if (!el) return

    const oldFile = files[0]

    this.cropper = new Cropper(el, {
      aspectRatio: 1,
      viewMode: 1,
      crop() {
        // @ts-ignore
        const canvas = this.cropper.getCroppedCanvas()

        const binStr = atob(canvas.toDataURL(oldFile.type).split(',')[1])
        const arr = new Uint8Array(binStr.length)
        for (let i = 0; i < binStr.length; i++) {
          arr[i] = binStr.charCodeAt(i)
        }
        const file = new File([arr], oldFile.name, { type: oldFile.type })

        component.update(oldFile.id, {
          file,
          type: file.type,
          size: file.size,
        })
      },
    })
  }
}
