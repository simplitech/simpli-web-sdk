export interface IValidator {
  validateFirstError?(): Promise<void>
  validate(): Promise<void>
}
