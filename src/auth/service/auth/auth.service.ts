import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Userdto } from 'src/user/dtos/user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/service/user/user.service';
import { HashValue } from 'src/utils/hash';

@Injectable()
export class AuthService {
    constructor(private userService : UserService,
    private jwtService: JwtService){}

    // metodo para validar la existencia del usuario en la DB
    public async valueUser(user: Userdto):Promise<any>{
        const {email} = user;
        const userDb = await this.userService.getUserByemail(email);
        if(!userDb) throw  new UnauthorizedException('Usuario no existe');
        const {password}= user;
        const valuepsw = await HashValue(password,userDb.password);
        
        if(!valuepsw) throw new UnauthorizedException('Contraseña incorrecta');

        const {password: _, ...result}= user;        
        return result;
    }

    // metodo que retorna el token al front
    async login(user:User){
        const payload = {sub:user.id,email:user.email};
        return{
            access_token: this.jwtService.sign(payload),
        }
    }
}
