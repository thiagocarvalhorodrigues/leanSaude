import { Controller, Get } from '@nestjs/common';
import { UserService } from '../users/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
