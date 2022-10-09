import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { idColumn, metaDataColumns } from './1664063190515-base-entity-columns';

export class todoEntity1665351433754 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

    await queryRunner.createTable(
      new Table({
        name: 'todo',
        columns: [
          idColumn,
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'completed',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          {
            name: 'date_completed',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'priority',
            type: 'enum',
            enum: ['high', 'medium', 'low'],
            enumName: 'priorityEnum',
            isNullable: false,
          },
          ...metaDataColumns,
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('todo', true);
  }
}
