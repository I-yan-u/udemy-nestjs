import { IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetUserParamDto {
  @ApiPropertyOptional({
    description: 'Get User with ID',
    example: 1,
    type: Number,
  })
  @IsOptional()
  @IsInt({ message: 'ID must be a number' })
  @Type(() => Number)
  id?: number;
}
