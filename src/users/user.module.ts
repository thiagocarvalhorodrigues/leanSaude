import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from 'nestjs-prisma';
import { UserController } from './user.controller';
import { AppService } from '../app.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, AppService],
  exports: [UserService],
})
export class UserModule {}
