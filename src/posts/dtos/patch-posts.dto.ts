import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostsDto } from './create-posts.dto';

export class PatchPostsDto extends PartialType(CreatePostsDto) {
  @ApiProperty({
    description: 'ID of the post to be updated',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
