export const TYPES = {
  INT: 'int',
  FLOAT: 'float',
  STRING: 'string',
  BOOLEAN: 'boolean',
  DATETIME: 'datetime',
  ARRAY: 'array',
  OBJECT: 'object',
  GENDER: 'gender',
  IP: 'ip',
  URL: 'url',
  EMAIL: 'email',
  CREDIT_CARD_NUMBER: 'credit_card_number',
  ZIP_CODE: 'zip_code',
  MISSING: 'missing',
  CATEGORICAL: 'categorical',
  TIME: 'time'
};

export const TYPES_HINTS: Record<ObjectValues<typeof TYPES>, string> = {
  int: '#',
  float: '#.##',
  string: 'ABC',
  boolean: '0/1',
  datetime: '📅',
  array: '[ ]',
  object: 'obj',
  gender: 'gen',
  ip: 'ip',
  url: 'url',
  email: 'a@b',
  credit_card_number: '####',
  zip_code: 'zip',
  missing: 'mis',
  categorical: 'cat',
  time: 'time',
  null: 'null'
};

export const TYPES_NAMES: Record<ObjectValues<typeof TYPES>, string> = {
  int: 'Integer',
  float: 'Decimal',
  string: 'String',
  boolean: 'Boolean',
  datetime: 'Datetime',
  array: 'Array',
  object: 'Object',
  gender: 'Gender',
  ip: 'IP Address',
  url: 'URL',
  email: 'Email',
  credit_card_number: 'Credit Card Number',
  zip_code: 'Zip Code',
  missing: 'Missing',
  categorical: 'Categorical',
  time: 'Time'
};
