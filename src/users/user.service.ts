import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserDto } from './dto/create-user.dto';
import UserVerificationError from '../lean/util/UserVerificationError';

@Injectable()
export class UserService {
  private confirmationKey: string;
  private email: string;
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    createUserDto: CreateUserDto,
  ): Promise<HttpException | Record<string, number> | void> {
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
          error: UserVerificationError.ErrorInUserRegistration,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    });
  }

  public async getAllUsers(): Promise<HttpException | any> {
    return this.prisma.user.findMany().catch(async (error) => {
      this.httpErrorFindUser(error);
    });
  }

  public findByEmail(email: string): Record<string, any> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  public async getConfirmationKey(): Promise<string> {
    return this.confirmationKey;
  }
  public async getEmail(): Promise<string> {
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
          error: UserVerificationError.EmailAlreadyRegistered,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async httpErrorFindUser(error: any): Promise<HttpException> {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: UserVerificationError.ErrorFindUser,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
      {
        cause: error,
      },
    );
  }
}
