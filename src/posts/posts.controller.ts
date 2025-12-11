import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostsDto } from './dtos/create-posts.dto';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';
import { PatchPostsDto } from './dtos/patch-posts.dto';

@Controller('posts')
export class PostsController {
  constructor(public readonly postsService: PostsService) {}

  @Get('/{:userId}')
  public getPosts(@Param('userId') userId: number) {
    return this.postsService.findAll(userId);
  }

  @ApiOperation({
    summary: 'Create a new post',
    description: 'Create a new post with the provided details',
  })
  @ApiResponse({
    status: 201,
    description: 'Posts created successfully',
    example: {
      status: 201,
      message: 'Posts created successfully',
    },
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostsDto) {
    return this.postsService.createPost(createPostDto);
  }

  @ApiOperation({
    summary: 'Update an existing post',
    description: 'Update an exisitng post with the provided details',
  })
  @ApiResponse({
    status: 200,
    description: 'Posts updated successfully',
    example: {
      status: 201,
      message: 'Posts updated successfully',
    },
  })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostsDto) {
    console.log('Updating post with data: %o', patchPostDto);
  }
}
