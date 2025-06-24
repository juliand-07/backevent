import { Module } from '@nestjs/common';
import { AttendeeController } from './controller/attendee/attendee.controller';
import { AttendeeService } from './service/attendee/attendee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendee } from './entities/attendee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attendee])], 
  controllers: [AttendeeController],
  providers: [AttendeeService]
})
export class AttendeeModule {}
