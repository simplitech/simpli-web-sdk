export class ImageRender {
  constructor(public url?: string | null, public alt?: string | null, public cls?: string | null) {}

  toHtml() {
    if (!this.url) return ''
    return `
    <img src="${this.url}" alt="${this.alt || 'image'}"
    class="${this.cls || ''}" style="height: 100px"/>
    `
  }
}
