import { Body, Controller, Get, Post } from '@nestjs/common';
import { Userdto } from 'src/user/dtos/user.dto';
import { UserService } from 'src/user/service/user/user.service';

@Controller('user')
export class UserController {

    constructor(private userService : UserService){}

    @Get()
    getUser(){
        return this.userService.findAll();
    }

    @Post()
    SignUpUser(@Body() signUpUserdto: Userdto){
        return this.userService.signUpUser(signUpUserdto);
    }
}
