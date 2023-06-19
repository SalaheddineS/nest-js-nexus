import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Roles } from "./RoleSchema";
import { Model } from "mongoose";

@Injectable()
export class RoleService{
    constructor(@InjectModel('Role') private readonly roleModel:Model<Roles> ){}

    async addRole(info:Roles){
        const role = new this.roleModel(info);
        await role.save()
        return "added Role " + info.name + "Successfully"
    }

    async removeRole(_id:string){
        return await this.roleModel.deleteOne({_id:_id});
    }

    async getRole(_id:string){
        return await this.roleModel.findById(_id);
    }

    async getRoles(){
        return await this.roleModel.find();
    }

}