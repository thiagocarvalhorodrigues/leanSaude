import { JwtGuard } from './jwt.guard';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service.keycloak';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    console.log('Rota de login');
    return this.authService.login(body.username, body.password);
  }

  @UseGuards(JwtGuard)
  @Get('test-auth')
  test(@Req() req) {
    console.log(req.user);
    return {
      name: 'Thiago Carvalho Rodrigues',
    };
  }
}
