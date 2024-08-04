import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { NatsClientModule } from "src/nats-client/nats-client.module";

@Module({
    imports: [NatsClientModule],
    exports: [],
    controllers: [UserController],
    providers: [],
})
export class UserModule { }