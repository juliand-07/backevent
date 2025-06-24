import { PartialType } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber, IsDate } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class EventDto {
  
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsDate()
    @IsNotEmpty()
    readonly date: Date;

    @IsNumber()
    @IsNotEmpty()
    readonly userId : number;
}
export class UpdateEventDto extends PartialType(EventDto) { }