import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

@Module({
    imports: [PassportModule],
    providers: [],
    controllers: [],
    exports: [],
})
export class AuthModule { }