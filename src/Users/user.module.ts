import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./UserSchema";
import { RoleSchema } from "src/Roles/RoleSchema";
@Module({
    imports: [MongooseModule.forFeature([{
        name:'User',
        schema:UserSchema
    },{
        name:'Role',
        schema:RoleSchema
    }
])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule{}