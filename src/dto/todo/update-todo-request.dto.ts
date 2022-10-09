import { PartialType } from '@nestjs/swagger';
import { CreateTodoRequestDTO } from './create-todo-request.dto';

export class UpdateTodoRequestDTO extends PartialType(CreateTodoRequestDTO) {}
