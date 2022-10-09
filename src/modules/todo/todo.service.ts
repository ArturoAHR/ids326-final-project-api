import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateTodoRequestDTO } from '../../dto/todo/create-todo-request.dto';
import { UpdateTodoRequestDTO } from '../../dto/todo/update-todo-request.dto';
import { Todo } from '../../entities/todo.entity';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  getAll = async (): Promise<Todo[]> => {
    const todos = await this.todoRepository.getAll();
    return todos;
  };

  create = async (dto: CreateTodoRequestDTO): Promise<Todo> => {
    const newTodo: Partial<Todo> = {
      title: dto.title,
      description: dto.description,
      completed: dto.completed,
      dateCompleted: dto.dateCompleted
        ? new Date(dto.dateCompleted)
        : undefined,
      priority: dto.priority,
    };
    const savedTodo = await this.todoRepository.save(newTodo);
    return savedTodo;
  };

  getById = async (id: string): Promise<Todo> => {
    const todo = await this.todoRepository.getById(id);
    return todo;
  };

  update = async (id: string, dto: UpdateTodoRequestDTO): Promise<Todo> => {
    const newTodo: Partial<Todo> = {
      id,
      title: dto.title,
      description: dto.description,
      completed: dto.completed,
      dateCompleted: dto.dateCompleted
        ? new Date(dto.dateCompleted)
        : undefined,
      priority: dto.priority,
    };
    const savedTodo = await this.todoRepository.save(newTodo);
    return savedTodo;
  };

  delete = async (id: string): Promise<boolean> => {
    const deleteResult: DeleteResult = await this.todoRepository.delete(id);
    return deleteResult?.affected && deleteResult.affected > 0;
  };
}
