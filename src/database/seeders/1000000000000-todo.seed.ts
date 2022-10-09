import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { EXAMPLE_TODOS } from '../factories/todo.factory';

export default class CreateTodos implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('todo')
      .values(EXAMPLE_TODOS)
      .execute();
  }
}
