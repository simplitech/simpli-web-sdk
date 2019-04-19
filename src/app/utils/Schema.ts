import { Dictionary, FieldSet, FieldData } from '../../interfaces'

export abstract class Schema<M = any> {
  constructor(model: M) {
    this.model = model
  }

  readonly model: M

  abstract readonly fieldSet: FieldSet

  get allFields(): string[] {
    return Object.keys(this.fieldSet)
  }

  get data(): Dictionary<FieldData> {
    const data: Dictionary<FieldData> = {}

    for (const field of this.allFields) {
      data[field] = this.dataFrom(field)
    }

    return data
  }

  dataFrom(field: string): FieldData {
    const fieldContent = this.fieldSet[field](field)
    if (typeof fieldContent === 'string' || typeof fieldContent === 'number') {
      return fieldContent
    }
    return null
  }

  isData(field: string): boolean {
    return this.dataFrom(field) !== null
  }
}
