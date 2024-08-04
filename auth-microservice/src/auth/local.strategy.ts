import { Inject } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { UsersService } from "src/users/users.service"

export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(@Inject() private readonly usersService: UsersService) {
        super();
    }



}