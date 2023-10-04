import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    const config = new ConfigService();
    const { data } = await firstValueFrom(
      this.http.post(
        config.get('AUTHSERVERURL'),
        new URLSearchParams({
          client_id: config.get('CLIENTID'),
          client_secret: config.get('SECRET'),
          grant_type: config.get('GRANT_TYPE'),
          username,
          password,
        }),
      ),
    );
    return data;
  }
}
//auth0 - jsonwebtoken

// client_id=nest
// &client_secret=625baf8d-2be8-4850-95cc-ec19c0be2752
// &grant_type=password
// &username=user1@user.com
// &password=123456
