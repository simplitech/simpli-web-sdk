/**
 * @ignore
 * Language: Portuguese Brazil
 */
export default {
  lang: {
    code: 'pt-BR',
    name: 'Português',
    decimal: ',',
    thousands: '.',
  },

  currency: {
    USD: {
      prefix: 'USD$',
      precision: '2',
    },
    BRL: {
      prefix: 'R$',
      precision: '2',
    },
  },

  country: {
    BRA: {
      name: 'Brasil',
      alpha2: 'BR',
      alpha3: 'BRA',
      lang: {
        code: 'pt-BR',
        name: 'Português',
      },
    },

    USA: {
      name: 'Estados Unidos',
      alpha2: 'US',
      alpha3: 'USA',
      lang: {
        code: 'en-US',
        name: 'Inglês',
      },
    },
  },

  system: {
    error: {
      validation: 'Erro de validação',
    },
  },

  app: {
    noResultFound: 'Nenhum resultado encontrado',
    emptyList: 'Lista vazia',
  },

  boolean: {
    true: 'Sim',
    false: 'Não',
  },

  dateFormat: {
    date: 'DD/MM/YYYY',
    datetime: 'DD/MM/YYYY HH:mm',
    time: 'hh:mm',
  },

  mask: {
    date: '##/##/####',
    datetime: '##/##/#### ##:##',
    zipcode: '#####-###',
    zipcodeAlt: '#####-###',
    phone: '(##) ####-####',
    phoneAlt: '(##) #####-####',
    cpf: '###.###.###-##',
    cnpj: '##.###.###/####-##',
    rg: '##.###.###-#',
  },

  filter: {
    phone: {
      regex: '(\\d{2})(\\d{4,5})(\\d{4})$',
      format: '($1) $2-$3',
    },
    zipcode: {
      regex: '(\\d{5})(\\d{3})$',
      format: '$1-$2',
    },
  },

  httpResponse: {
    100: 'Continue',
    101: 'Switching Protocol',
    200: 'Ok',
    201: 'Created',
    202: 'Accepted',
    203: 'Non Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Request Entity Too Large',
    414: 'Request URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Requested Range Not Satisfiable',
    417: 'Expectation Failed',
    422: 'Unprocessable Entity',
    429: 'Too Many Requests',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'Http Version Not Supported',
  },
}
