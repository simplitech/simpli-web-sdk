export type ID = number | string
export type TAG = string
export interface Scheme {
  readonly [column: string]: string | number | undefined
}

export interface Resp<T> {
  data: T
  ok: boolean
  status: number
  statusText: string
  headers: Function
  text(): string
  json(): any
  blob(): Blob
}

export interface IValidator {
  validateFirstError?(): Promise<void>
  validate(): Promise<void>
}
