import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { AuthModule } from './nest/auth/auth.module';
import { UsersController } from './nest/users/user.controller';
import { S3Controller } from './s3/s3.controller';
import { UserModule } from './nest/users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    UserModule,
  ],
  controllers: [AppController, UsersController, S3Controller],
  providers: [AppService, PrismaService],
})
export class AppModule {}
