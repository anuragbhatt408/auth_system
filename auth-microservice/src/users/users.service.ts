import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/CreateUser.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    registerUser(data: CreateUserDto) {
        let newUser = new User();
        newUser.email = data.email;
        newUser.password = data.password;
        newUser.name = data.name;

        return this.userRepository.save(newUser);
    }

    findUser({ name, password }: any): Promise<User> | undefined {
        let user = this.userRepository.findOneBy({ name })
        if (!user) {
            throw new HttpException('user not found', HttpStatus.NOT_FOUND)
        }
        return user;
    }
}