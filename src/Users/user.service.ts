import { Injectable } from '@nestjs/common';
import { User } from './UserEntity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  userList: User[] = [];

  getAllUsers(): User[] {
    return this.userList;
  }

  async addUser(userInfo: User): Promise<User> {

      const newUser = new User(
        userInfo.fullName,
        userInfo.email,
        await bcrypt.hash(userInfo.password, 10),
        [],
      );

      try {
        this.userList.push(newUser);

        return newUser;
      } catch (err) {
        console.error('An error occurred while adding a new user: \n');
        throw err;
      }
    
  }
}
