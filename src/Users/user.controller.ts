import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSchema } from './UserSchema';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  


}
