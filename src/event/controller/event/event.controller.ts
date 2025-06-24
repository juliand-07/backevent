import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { log } from 'console';
import { EventDto, UpdateEventDto } from 'src/event/dtos/event.dto';
import { EventService } from 'src/event/service/event/event.service';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService) { }
    @Get()
    getEvent() {
        return this.eventService.findAll();
    }

    @Post()
    createEvent(@Body() createEventDto: EventDto) {
        return this.eventService.createEvent(createEventDto);
    }

    @Put(':eventid')
    updateEvent(@Param('eventid', ParseIntPipe) eventid: number,
        @Body() payload: UpdateEventDto) {
        return this.eventService.update(eventid, payload)
    }
}
