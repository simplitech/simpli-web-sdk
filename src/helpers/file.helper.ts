export function fileOrBlobToArrBuffer(file: File | Blob): Promise<ArrayBuffer | null> {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result as ArrayBuffer)
    }

    reader.readAsArrayBuffer(file)
  })
}

export async function fileToArrBuffer(file: File) {
  return await fileOrBlobToArrBuffer(file)
}

export async function blobToArrBuffer(blob: Blob) {
  return await fileOrBlobToArrBuffer(blob)
}

export function fileToUrl(file: File | Blob): Promise<string> {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result as string)
    }
    reader.readAsDataURL(file)
  })
}

export function urlToImg(url: string): Promise<HTMLImageElement> {
  return new Promise(resolve => {
    const img = new Image()

    img.onload = () => {
      resolve(img)
    }

    img.src = url
  })
}

export function urlToBlob(dataURI: string) {
  let byteString: string
  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURI.split(',')[1])
  } else {
    byteString = unescape(dataURI.split(',')[1])
  }

  // separate out the mime component
  const mimeString: string = dataURI
    .split(',')[0]
    .split(':')[1]
    .split(';')[0]

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  return new Blob([ia], { type: mimeString })
}

export function urlToArrayBuffer(dataURI: string) {
  const blob = urlToBlob(dataURI)
  return fileOrBlobToArrBuffer(blob)
}

export async function fileToImg(file: File | Blob) {
  const url = await fileToUrl(file)
  return await urlToImg(url)
}

export function calcRectSize(originalW: number, originalH: number, maxDimension: number) {
  const scale = Math.min(1, maxDimension / (originalW > originalH ? originalW : originalH))

  return {
    width: Math.floor(originalW * scale),
    height: Math.floor(originalH * scale),
  }
}

export function compressImageToUrl(img: HTMLImageElement, fileType: string, width: number, height: number) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (ctx === null) {
    return
  }

  canvas.width = width
  canvas.height = height

  ctx.save()
  ctx.drawImage(img, 0, 0, width, height)
  ctx.restore()

  // encode image to data-uri with base64 version of compressed image
  return canvas.toDataURL(fileType, 0.5)
}

export function promptForMultipleFiles(accept: string | null = null, multiple: boolean = true): Promise<File[] | null> {
  return new Promise(resolve => {
    const input = document.createElement('input')
    input.type = 'file'
    if (accept) {
      input.accept = accept
    }

    if (multiple) {
      input.setAttribute('multiple', 'multiple')
    }

    input.onchange = (e: any) => {
      resolve(e.target.files)
    }

    input.click()
  })
}

export async function promptForSingleFile(accept: string | null = null): Promise<File | null> {
  const files: File[] | null = await promptForMultipleFiles(accept, false)
  if (!files || !files.length) {
    return null
  }
  return files[0]
}

export async function uploadToS3(
  uploadUrl: string,
  arrBuffer: ArrayBuffer,
  abortController: AbortController | null = null
) {
  // @ts-ignore
  await fetch(uploadUrl, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      'content-type': 'application/octet-stream',
      'sec-fetch-mode': 'cors',
    },
    signal: abortController ? abortController.signal : null,
    body: arrBuffer,
  })

  return uploadUrl.split('?')[0]
}
