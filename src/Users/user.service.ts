import { Injectable } from '@nestjs/common';
import { User } from './UserEntity';

@Injectable()
export class UserService {
  userList: User[] = [];


  getAllUsers():User[]{
    return this.userList
  }

  addUser(userInfo: User): User {
    const newUser = new User(
      userInfo.fullName,
      userInfo.email,
      userInfo.password,
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
