import {
  IsEnum,
  IsOptional,
  IsString,
  IsArray,
  IsNotEmpty,
  MinLength,
  Matches,
  IsJSON,
  IsUrl,
  IsISO8601,
  ValidateNested,
  MaxLength,
} from 'class-validator';
import { PostTypeEnum } from '../enums/postType.enum';
import { PostStatusEnum } from '../enums/status.enum';
import { MetaOptions } from './metaOptions.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostsDto {
  @ApiProperty({
    description: 'Title of the post',
    example: 'My First Post',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: PostTypeEnum,
    description: 'Type of the post',
    example: 'post',
  })
  @IsEnum(PostTypeEnum)
  @IsNotEmpty()
  postType: PostTypeEnum;

  @ApiProperty({
    description: 'Post slug',
    example: 'my-first-post',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'Slug must be lowercase and can only contain letters, numbers, and hyphens.',
  })
  slug: string;

  @ApiProperty({
    enum: PostStatusEnum,
    description: 'Post Status',
    example: 'draft',
  })
  @IsEnum(PostStatusEnum)
  @IsNotEmpty()
  status: PostStatusEnum;

  @ApiPropertyOptional({
    description: 'Content of the post',
    example: 'This is the content of my first post.',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description: 'Post schema in JSON format',
    example:
      '{"@context": "https://schema.org", "@type": "BlogPosting", "headline": "My First Post"}',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    description: 'Post Image url',
    example: 'https://example.com/image.jpg',
  })
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @ApiProperty({
    description: 'Date to publish the post',
    example: '2023-10-01T12:00:00Z',
  })
  @IsISO8601()
  @IsNotEmpty()
  publishOn: Date;

  @ApiPropertyOptional({
    description: 'tags for the post',
    example: '["technology", "news", "updates"]',
    isArray: true,
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    description: 'Meta options for the post',
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: { type: 'string', example: 'sidebar' },
        value: { type: 'string', example: true },
      },
    },
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => MetaOptions)
  metaOptions?: MetaOptions[];
}
