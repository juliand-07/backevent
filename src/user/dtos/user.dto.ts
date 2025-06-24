import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class Userdto {

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly password: string;
}
