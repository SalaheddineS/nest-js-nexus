import { Injectable } from '@nestjs/common';
import { User } from './UserSchema';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUsers() {
    const result = await this.userModel.find();
    return result ;
  }

  async addUser(
    fullName: string,
    email: string,
    password: string,
  ) {
    if(await this.userModel.exists({ email: email })){
      return "User already exists"
    }
    const hashedPassword = (await bcrypt.hash(password, 10)).toString();
    const newUser = new this.userModel({
      fullName: fullName,
      email: email,
      password: hashedPassword,
      Roles: [],
    });
    await newUser.save();
    return newUser;
  }
}
