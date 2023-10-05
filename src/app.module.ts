import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { AuthModule } from './lean/auth/auth.module';
import { UserController } from './users/user.controller';
import { UserModule } from './users/user.module';
import { S3Controller } from './lean/s3/s3.controller';
import { UsersController } from './lean/users.controller';
import { UserService } from './users/user.service';

@Module({
  imports: [AuthModule, PrismaModule, UserModule],
  controllers: [AppController, UserController, UsersController, S3Controller],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
