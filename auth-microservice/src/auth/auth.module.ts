import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtConstants } from "src/constants/secret";
import { UserModule } from "src/users/users.module";

@Module({
    imports: [PassportModule, UserModule, JwtModule.register({
        secret: JwtConstants.secret,
        signOptions: {
            expiresIn: '10d'
        }
    })],
    providers: [],
    controllers: [],
    exports: [],
})
export class AuthModule { }