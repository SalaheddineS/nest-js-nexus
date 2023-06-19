import { Role } from "src/Roles/RoleEntity";

export class User{
    constructor(public fullName:string,public email:string,public password:string,public Roles:Role[]){}
}