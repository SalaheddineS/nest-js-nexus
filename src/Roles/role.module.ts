import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { RoleSchema } from "./RoleSchema";
@Module({
    imports: [MongooseModule.forFeature([{
        name:'Role',
        schema:RoleSchema
    },
])],
    controllers: [],
    providers: [],
})
export class UserModule{}