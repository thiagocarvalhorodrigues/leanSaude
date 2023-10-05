import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  async login(username: string, password: string): Promise<string> {
    const { data } = await firstValueFrom(
      this.http.post(
        process.env.AUTHSERVERURL,
        new URLSearchParams({
          client_id: process.env.CLIENTID,
          client_secret: process.env.SECRET,
          grant_type: process.env.GRANT_TYPE,
          username,
          password,
        }),
      ),
    );
    return data;
  }
}
