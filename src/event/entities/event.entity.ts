import { Attendee } from "src/attendee/entities/attendee.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 250 })
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'date' })
    date: Date;

    @ManyToOne(()=> User, (user)=> user.events)
    user: User;

    @OneToMany(()=> Attendee,(attendee)=> attendee.event)
    attende: Attendee;
}