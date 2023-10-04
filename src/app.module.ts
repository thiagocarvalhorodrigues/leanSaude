import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { AuthModule } from './lean/auth/auth.module';
import { UsersController } from './users/user.controller';
import { UserModule } from './users/user.module';
import { S3Controller } from './lean/s3/s3.controller';

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
