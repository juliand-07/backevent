import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { PartialType, ApiProperty } from "@nestjs/swagger";
export class AttendeeDto {
  
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly email: string;

    @IsNumber()
    @IsNotEmpty()
    readonly eventId : number;
}
export class UpdateAttendeeDto extends PartialType(AttendeeDto) { }