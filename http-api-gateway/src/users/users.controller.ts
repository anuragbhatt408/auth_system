import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { ClientProxy } from "@nestjs/microservices";


@Controller('/register')
export class UserController {

    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log('createUserDto from the http-api-gateway', createUserDto);

        return this.natsClient.send({ cmd: 'createUser' }, createUserDto);
    }
}