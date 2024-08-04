import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/users/users.module";

@Module({
    imports: [PassportModule, UserModule, JwtModule.register({
        secret: 'test123',
        signOptions: {
            expiresIn: '10d'
        }
    })],
    providers: [],
    controllers: [],
    exports: [],
})
export class AuthModule { }