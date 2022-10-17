import { OperationResponseDTO } from './../../dto/operation-response.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTodoRequestDTO } from '../../dto/todo/create-todo-request.dto';
import { UpdateTodoRequestDTO } from '../../dto/todo/update-todo-request.dto';
import { Todo } from '../../entities/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAll(): Promise<Todo[]> {
    return await this.todoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Todo> {
    return await this.todoService.getById(id);
  }

  @Post()
  async create(@Body() dto: CreateTodoRequestDTO): Promise<Todo> {
    return await this.todoService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateTodoRequestDTO,
  ): Promise<Todo> {
    return await this.todoService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<OperationResponseDTO> {
    return await this.todoService.delete(id);
  }
}
