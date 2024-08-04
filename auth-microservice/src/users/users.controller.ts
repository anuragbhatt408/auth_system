import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/CreateUser.dto";


@Controller()
export class UserMicroserviceController {

    @MessagePattern({ cmd: 'createUser' })
    createUser(@Payload() data: CreateUserDto) {
        console.log('data from the auth microservice', data);
        return data;
    }
}