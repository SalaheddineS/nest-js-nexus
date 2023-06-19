import * as mongoose from 'mongoose'
import { Roles } from 'src/Roles/RoleSchema'

export const UserSchema = new mongoose.Schema({
    fullName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    Roles : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }]
})

export interface User{
    fullName:string
    email:string
    password:string
    Roles : Roles[]
}

