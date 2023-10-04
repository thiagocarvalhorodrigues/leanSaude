import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from 'nestjs-prisma';
import { UsersController } from './user.controller';
import { AppService } from '../../app.service';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UserService, AppService],
  exports: [UserService],
})
export class UserModule {}
