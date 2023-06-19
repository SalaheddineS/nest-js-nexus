import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './UserEntity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  userList: User[] = [];

  @Get('show')
  getAllUsers(): User[] {
    return this.userList;
  }

  @Post('add')
  addUser(
    @Body() fullName: String,
    @Body() email: String,
    @Body() password: String,
  ): User {
    const newUser = new User(fullName, email, password, []);
    try {
      this.userList.push(newUser);
      return newUser;
    } catch (err) {
      console.error('An error occurred while adding a new user: \n');
      throw err;
    }
  }

}
