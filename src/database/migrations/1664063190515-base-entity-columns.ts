export const idColumn = {
  name: 'id',
  type: 'uuid',
  default: 'uuid_generate_v4()',
  isNullable: false,
  isPrimary: true,
};

export const metaDataColumns = [
  {
    name: 'created_at',
    type: 'TIMESTAMP',
    isNullable: false,
    default: 'now()',
  },
  {
    name: 'updated_at',
    type: 'TIMESTAMP',
    isNullable: false,
    default: 'now()',
  },
  {
    name: 'deleted_at',
    type: 'TIMESTAMP',
    isNullable: true,
  },
];
