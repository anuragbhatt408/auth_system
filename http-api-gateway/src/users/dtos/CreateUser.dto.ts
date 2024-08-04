import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(32)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;


    @IsNotEmpty()
    @IsString()
    password: string;
}