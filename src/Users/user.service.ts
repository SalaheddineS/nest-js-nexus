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
    return result;
  }

  async addUser(fullName: string, email: string, password: string) {
    if (await this.userModel.exists({ email: email })) {
      return 'User already exists';
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

  async findUserById(id: string) {
    const user = await this.userModel.findById(id);
    if (user != null) {
      return user;
    } else return 'User Not existant';
  }

  async updateUser(_id: string, details: User) {
    const user = await this.userModel.findById(_id);
    if (user != null) {
      try {
        await user.updateOne(details);
        return 'User Updated';
      } catch (err) {
        return 'Error while updating user';
      }
    } else return 'User Not existant';
  }

  async deleteUser(_id: string) {
    return await this.userModel.deleteOne({ _id: _id });
  }
}
