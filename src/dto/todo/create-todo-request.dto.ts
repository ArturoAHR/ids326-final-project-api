import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { TodoPriority } from '../../entities/todo.entity';
import { BaseDTO } from '../base.dto';

export class CreateTodoRequestDTO extends BaseDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  completed: boolean;

  @IsOptional()
  @IsDateString()
  dateCompleted: string;

  @IsEnum(TodoPriority)
  priority: TodoPriority;
}
