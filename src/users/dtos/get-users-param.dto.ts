import { IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUserParamDto {
  @IsOptional()
  @IsInt({ message: 'ID must be a number' })
  @Type(() => Number)
  id?: number;
}
