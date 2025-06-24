import { Event } from "src/event/entities/event.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attendee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 256 })
    email: string;

    @ManyToOne(()=> Event, (event)=> event.attende)
    event: Event
}