import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { RoleSchema } from "./RoleSchema";
import { RoleService } from "./role.service";
import { RoleController } from "./role.controller";
@Module({
    imports: [MongooseModule.forFeature([{
        name:'Role',
        schema:RoleSchema
    },
])],
    controllers: [RoleController],
    providers: [RoleService],
})
export class RoleModule{}