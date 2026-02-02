import { forwardRef, Inject, Injectable } from '@nestjs/common';
// import { GetUserParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

/**
 * UserService class to connect users with controller and auth service
 * @class UserService
 */
@Injectable()
export class UserService {
  /**
   * Constructor for UserService
   * @param authService - AuthService instance to check authentication
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  /**
   * findAll method for getting all users from db
   */
  public findAll(limit: number, page: number) {
    return this.usersRepository.find({
      take: limit,
      skip: (page - 1) * limit,
    });
  }

  /**
   * findOneById method to find a user by ID
   * @param id - User ID
   */
  public async findOneById(id: number) {
    return await this.usersRepository.findOne({
      where: { id },
    });
  }

  /**
   * findOneByEmail method to find a user by email
   * @param email - User email
   */
  public async findOneByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: { email },
    });
  }

  /**
   * createUser method to create a user
   * @param createUserDtoreate - user data transfer object
   * @returns Promise<User> - returns the created user
   */
  public async createUser(createUserDto: CreateUserDto) {
    // Check if the user already exists
    const existingUser = await this.findOneByEmail(createUserDto.email);
    if (!existingUser) {
      const user = this.usersRepository.create(createUserDto);
      return await this.usersRepository.save(user);
    }
  }
}
