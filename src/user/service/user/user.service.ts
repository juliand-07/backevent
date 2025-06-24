import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    user : User[]=[]

    constructor(@InjectRepository(User)
    private userRepo : Repository<User>){}


    async findAll(): Promise<User[]>{
        this.user= await this.userRepo.find();
        return this.user
    }

    public signUpUser(signUpUserdto): Promise<User[]>{
        const users = this.userRepo.create(signUpUserdto);
        return this.userRepo.save(users);
    }
}
