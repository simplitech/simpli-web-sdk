import { Byte } from '../../enums'
import { Dictionary } from '../../interfaces'
import Compressor from 'compressorjs'

export class UploadConfig {
  static readonly compressedImageStandard: Compressor.Options = {
    convertSize: 0, // Convert any image into png file
    width: 1280,
    height: 720,
    quality: 0.8,
  }

  static readonly compressedImageAvatar: Compressor.Options = {
    convertSize: 0, // Convert any image into png file
    width: 720,
    height: 720,
    quality: 0.8,
  }

  static readonly compressedImageThumb: Compressor.Options = {
    convertSize: 0, // Convert any image into png file
    width: 320,
    height: 180,
    quality: 0.7,
  }

  endpoint = '/upload'
  accept?: string
  extensions?: string[] | String | RegExp
  minSize = 0
  size = 3 * Byte.MEGA // 3MB
  timeout = 0
  maximum = 0
  multiple = true
  directory = false
  drop = true
  dropDirectory = true
  addIndex = false
  thread = 1
  data: any = {}
  headers: Dictionary<String> = {}

  constructor(maximum?: number) {
    if (maximum && maximum > 0) {
      this.maximum = maximum
      this.multiple = false
    }
  }
}
