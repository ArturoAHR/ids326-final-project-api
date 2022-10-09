import { IsUUID } from 'class-validator';

export class BaseDTO {
  @IsUUID()
  id: string;
}
