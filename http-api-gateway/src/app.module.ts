import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [UserModule, InventoryModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
