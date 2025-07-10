import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/service/auth/auth.service';
import { Userdto } from 'src/user/dtos/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    // metodo que recibe la info de inicio de sesion del front 
    @Post('login')
    async login(@Body() signUpUserdto: Userdto){
        const user = await this.authService.valueUser(signUpUserdto);
        return this.authService.login(user);
    }

}
