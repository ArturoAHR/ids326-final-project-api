import { EntityRepository, Repository } from 'typeorm';
import { Todo } from '../../entities/todo.entity';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  async getAll(): Promise<Todo[]> {
    return await this.createQueryBuilder('todo')
      .orderBy('todo."created_at"', 'DESC')
      .getMany();
  }

  async getById(id: string): Promise<Todo> {
    return await this.findOneOrFail({ id: id });
  }
}
