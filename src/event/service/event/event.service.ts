import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateEventDto } from 'src/event/dtos/event.dto';
import { Event } from 'src/event/entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {
    events: Event[] = [];
    constructor(@InjectRepository(Event)
    private eventRepo: Repository<Event>) { }

    async findAll(): Promise<Event[]> {
        this.events = await this.eventRepo.find();
        return this.events;
    }

    public createEvent(createEventDto) {
        const { userId, ...eventData } = createEventDto;
        const event = this.eventRepo.create({
            ...eventData,
            user: { id: userId }
        });
        return this.eventRepo.save(event);
    }

    async update(id: number, change: UpdateEventDto): Promise<Event> {
        const event = await this.eventRepo.findOne({ where: { id } });
        this.eventRepo.merge(event!, change);
        return this.eventRepo.save(event!);
    }
}
