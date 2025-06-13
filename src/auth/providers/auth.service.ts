import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  /**
   * login
   */
  public login(email: string, password: string, id: string) {
    const user = this.userService.findOneById(id);
    return { token: 'Sample_token', user };
  }

  /**
   * isAuth
   */
  public isAuth() {
    return true;
  }
}
