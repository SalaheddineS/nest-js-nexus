import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Users/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleModule } from './Roles/role.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,RoleModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MongoLink,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
