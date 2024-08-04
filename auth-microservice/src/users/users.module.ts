import { Module } from "@nestjs/common";
import { UserMicroserviceController } from "./users.controller";

@Module({
    imports: [],
    exports: [],
    controllers: [UserMicroserviceController],
    providers: [],
})
export class UserModule { }