import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class LoginDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(32)
    name: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}