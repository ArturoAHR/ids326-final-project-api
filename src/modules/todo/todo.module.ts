import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../../entities/todo.entity';
import { TodoController } from './todo.controller';
import { TodoRepository } from './todo.repository';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, TodoRepository])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
