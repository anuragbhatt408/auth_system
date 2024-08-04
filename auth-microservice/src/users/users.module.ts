import { Module } from "@nestjs/common";
import { UserMicroserviceController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { AuthService } from "src/auth/auth.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [TypeOrmModule.forFeature([User]), JwtModule.register({
        secret: 'test123',
        signOptions: {
            expiresIn: '10d'
        }
    })],
    exports: [],
    controllers: [UserMicroserviceController],
    providers: [UsersService, AuthService]
})
export class UserModule { }