import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './UserSchema';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUsers')
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('addUser')
  addUser(@Body() userDetails:User){
    return this.userService.addUser(userDetails.fullName,userDetails.password,userDetails.email)
  }
}
