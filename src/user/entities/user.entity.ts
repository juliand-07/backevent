import { Event } from "src/event/entities/event.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 255 })
    email: string;
    
    @Column({ type: 'varchar', length: 255 })
    password: string;
    
    @OneToMany(()=> Event, (event) => event.user)
    events: Event[];
}