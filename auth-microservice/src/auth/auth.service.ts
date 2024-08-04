import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/typeorm/entities/User";
import { LoginDto } from "src/users/dtos/Login.dto";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(@Inject() private usersService: UsersService, @Inject() private jwtService: JwtService) { }


    async signIn(loginDto: LoginDto) {
        const user = await this.usersService.findUser(loginDto?.name);
        if (user?.password !== loginDto?.password) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user?.id, name: user?.name }
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}