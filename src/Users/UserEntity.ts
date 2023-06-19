import { Role } from "src/Roles/RoleEntity";

export class User{
    constructor(public fullName:String,public email:String,public password:String,public Roles:Role[]){}
}