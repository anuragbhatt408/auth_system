import { Controller, Get } from "@nestjs/common";

@Controller('profile')
export class InventoryController {

    @Get()
    getProfile() {
    }

}