import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_TCP_PORT) || 3307,
      entities: [],
      database: process.env.MYSQL_DATABASE,
      synchronize: true,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    }),
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
