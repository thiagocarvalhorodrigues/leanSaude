import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { PrismaService } from 'nestjs-prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { AppService } from '../app.service';

@Injectable()
export class UserService {
  private confirmationKey: string;
  private email: string;
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      confirmation_key: uuidv4(),
      confirmation_sit: 0,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
    await this.isEmailFound(data);

    await this.prisma.user.create({ data }).catch(async (error) => {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Erro no cadastro do usuário',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    });

    return {
      status: HttpStatus.CREATED,
    };
  }

  public async getConfirmationKey() {
    return this.confirmationKey;
  }
  public async getEmail() {
    return this.email;
  }

  async isEmailFound(data: { email: string }): Promise<void> {
    const dataBaseEmail = await this.prisma.user.findMany({
      select: { email: true },
    });

    const listEmailDataBase: any[] = [];
    dataBaseEmail.forEach((item) => {
      const foundEmailDatabase = item.email;
      listEmailDataBase.push(foundEmailDatabase);
    });

    const existEmailInDataBase = listEmailDataBase.includes(data.email);

    if (existEmailInDataBase) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'E-mail já cadastrado',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
