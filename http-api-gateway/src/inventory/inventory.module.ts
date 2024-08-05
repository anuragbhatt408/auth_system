import { Module } from "@nestjs/common";
import { InventoryController } from "./inventory.controller";

@Module({
    imports: [],
    providers: [],
    controllers: [InventoryController],
    exports: []
})
export class InventoryModule { }