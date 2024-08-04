import { Controller, Inject } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UsersService } from "./users.service";
import { AuthService } from "src/auth/auth.service";
import { LoginDto } from "./dtos/Login.dto";


@Controller()
export class UserMicroserviceController {

    constructor(@Inject() private usersService: UsersService, @Inject() private authService: AuthService) { }

    @MessagePattern({ cmd: 'createUser' })
    createUser(@Payload() data: CreateUserDto) {
        console.log('user microservice', data);
        return this.usersService.registerUser(data);
        // return this.usersService;
    }

    @MessagePattern({ cmd: 'getUser' })
    signIn(@Payload() loginDto: LoginDto) {
        console.log('user microservice signIn User', loginDto);
        return this.authService.signIn(loginDto);

    }
}