import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { User } from 'src/user/entities/user.entity';
import { createHashValue } from 'src/utils/hash';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    users : User[]=[]

    constructor(@InjectRepository(User)
    private userRepo : Repository<User>){}


    async findAll(): Promise<User[]>{
        this.users= await this.userRepo.find();
        return this.users
    }

    async getUserByemail(email:string):Promise<User | null>{
        const user = await this.userRepo.findOne({where:{email: email}})
        return user
    }

    public async signUpUser(signUpUserdto): Promise<User[]>{
        const {password} = signUpUserdto
        const hashedPsw = await createHashValue(password)
        const users = this.userRepo.create({...signUpUserdto, password : hashedPsw});
        return this.userRepo.save(users);
    }
}
