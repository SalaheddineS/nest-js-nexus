import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './UserEntity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  

  @Get('showUsers')
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Post('addUser')
  addUser(
    @Body() userInfo:User
  ): User {
    return this.userService.addUser(userInfo);
  }

}
