export class AjvType {
  static readonly requiredString: 'string' = 'string'
  static readonly stringOrNull: ['string', 'null'] = ['string', 'null']

  static readonly requiredNumber: 'number' = 'number'
  static readonly numberOrNull: ['number', 'null'] = ['number', 'null']

  static readonly requiredInteger: 'integer' = 'integer'
  static readonly integerOrNull: ['integer', 'null'] = ['integer', 'null']

  static readonly requiredArray: 'array' = 'array'
  static readonly arrayOrNull: ['array', 'null'] = ['array', 'null']
}
