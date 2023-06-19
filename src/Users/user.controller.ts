import { Body,Param, Controller, Get, Patch, Post, Delete } from '@nestjs/common';
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

  @Patch('updateUser/:_id')
  updateUser(@Body() userDetails:User, @Param() _id:string){
    return this.userService.updateUser(_id,userDetails)
  }

  @Get('findUserById/:_id')
  findUserById(@Param() _id:string){
    return this.userService.findUserById(_id)
  }

  @Delete('deleteUser/:_id')
  deleteUser(@Param() _id:string){
    return this.userService.deleteUser(_id)
  }
}
