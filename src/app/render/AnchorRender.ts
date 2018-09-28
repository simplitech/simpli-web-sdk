export class AnchorRender {
  constructor(public label?: string | null, public href?: string | null, public target: string = '_self') {}

  toHtml() {
    if (!this.label || !this.href) return ''
    return `
    <a href="${this.href}" target="${this.target}">
      ${this.label}
    </a>
    `
  }
}
