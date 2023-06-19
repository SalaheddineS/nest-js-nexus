import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './UserEntity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  userList: User[] = [];

  @Get('showUsers')
  getAllUsers(): User[] {
    return this.userList;
  }

  @Post('addUser')
  addUser(
    @Body() userInfo:User
  ): User {
    const newUser = new User(userInfo.fullName, userInfo.email, userInfo.password, []);
    try {
      this.userList.push(newUser);
      return newUser;
    } catch (err) {
      console.error('An error occurred while adding a new user: \n');
      throw err;
    }
  }

}
