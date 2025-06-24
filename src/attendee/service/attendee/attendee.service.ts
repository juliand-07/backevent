import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'node:console';
import { promises } from 'node:dns';
import { UpdateAttendeeDto } from 'src/attendee/dtos/attendee.dto';
import { Attendee } from 'src/attendee/entities/attendee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AttendeeService {

    attendees : Attendee[] = [];

    constructor(@InjectRepository(Attendee)
    private attendeeRepo : Repository<Attendee>) {}

    async findAll(): Promise<Attendee[]> {
        this.attendees = await this.attendeeRepo.find();
        return this.attendees;
    }

    public createAttendee(createAttendeedto){
        const { eventId, ...attendeeData } = createAttendeedto;
        const attendee = this.attendeeRepo.create({
            ...attendeeData,
            event: { id: eventId }
        });        
        return this.attendeeRepo.save(attendee);
    }

    async update(id: number, change:UpdateAttendeeDto): Promise<Attendee>{

        const attendee = await this.attendeeRepo.findOne({where:{id}});
        this.attendeeRepo.merge(attendee!,change);
        return this.attendeeRepo.save(attendee!);
    }
}
