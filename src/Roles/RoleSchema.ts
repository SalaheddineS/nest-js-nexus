import mongoose from "mongoose";

export const RoleSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true}
})

export interface Roles {
    name:string,
    description:string
}