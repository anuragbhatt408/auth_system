import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { ClientProxy } from "@nestjs/microservices";
import { LoginDto } from "./dtos/Login.dto";


@Controller('/users')
export class UserController {

    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }

    @Post('/register')
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log('createUserDto from the http-api-gateway', createUserDto);

        return this.natsClient.send({ cmd: 'createUser' }, createUserDto);
    }

    @Post('/login')
    getUser(@Body() loginDto: LoginDto) {
        console.log('name and password in http service', loginDto);
        return this.natsClient.send({ cmd: 'getUser' }, loginDto);
    }
}