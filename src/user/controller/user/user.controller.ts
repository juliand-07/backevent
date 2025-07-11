import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Userdto } from 'src/user/dtos/user.dto';
import { UserService } from 'src/user/service/user/user.service';


@Controller('user')
export class UserController {
    
    constructor(private userService : UserService){}
    @UseGuards(JwtAuthGuard)
    @Get()
    getUser(@Req() request: Request){
        // console.log(this.getUser());
        console.log(request.headers);
        return this.userService.findAll();
    }

    @Post()
    SignUpUser(@Body() signUpUserdto: Userdto){
        return this.userService.signUpUser(signUpUserdto);
    }
}
