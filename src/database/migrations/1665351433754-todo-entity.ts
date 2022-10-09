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
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'completed',
            type: 'boolean',
            default: false,
          },
          {
            name: 'date_completed',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'priority',
            type: 'enum',
            enum: ['high', 'medium', 'low'],
            enumName: 'priorityEnum',
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
