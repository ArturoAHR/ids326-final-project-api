import { BaseDTO } from './base.dto';

export class BaseResponseDTO extends BaseDTO {
  createdAt: Date;
  deletedAt: Date;
  updatedAt: Date;
}
