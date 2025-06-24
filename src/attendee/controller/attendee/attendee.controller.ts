import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { log } from 'node:console';
import { AttendeeDto, UpdateAttendeeDto } from 'src/attendee/dtos/attendee.dto';
import { AttendeeService } from 'src/attendee/service/attendee/attendee.service';

@Controller('attendee')
export class AttendeeController {

    constructor(private attendeeService : AttendeeService) {}
    @Get()
    getAttendee() {
        return this.attendeeService.findAll();
    }

    @Post()
    createAttendee(@Body() createAttendeedto: AttendeeDto) {
        return this.attendeeService.createAttendee(createAttendeedto);
    }

    @Put(':attendeeid')
    updateLibrary(@Param('attendeeid',ParseIntPipe) attendeeid : number,
    @Body() payload: UpdateAttendeeDto ){
        console.log(payload);
        return this.attendeeService.update(attendeeid,payload)
    }
}
