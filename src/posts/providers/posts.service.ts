import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly userService: UserService) {}
  /**
   * findAll
   */
  public findAll(userId: string) {
    const user = this.userService.findOneById(userId);
    return [
      {
        user,
        title: 'Title',
        content: 'Test content',
      },
      {
        user,
        title: 'Title 2',
        content: 'Test content 2',
      },
    ];
  }

  /**
   * findPosts
   */
  public getPosts() {
    return [];
  }
}
