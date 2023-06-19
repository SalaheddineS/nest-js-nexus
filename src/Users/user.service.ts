import { Injectable } from '@nestjs/common';
import { User } from './UserSchema';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly user: Model<User>){

  }

}
