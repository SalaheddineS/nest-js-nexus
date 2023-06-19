import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import {Roles } from './RoleSchema'
@Controller()
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
    
    @Post('addRole')
    addRole(@Body() info:Roles){
        return this.roleService.addRole(info)
    }   

    @Get('getRole/:_id')
    getRole(@Param() _id:string){
        return this.roleService.getRole(_id)
    }

    @Get('getRoles')
    getRoles(){ 
        return this.roleService.getRoles()
    }   

    @Delete('removeRole/:_id')
    removeRole(@Param() _id:string){
        return this.roleService.removeRole(_id)
    }
}
