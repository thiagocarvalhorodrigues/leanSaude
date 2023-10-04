import { User } from '../../domain/user.entities';
import { IUserRepository } from '../../domain/user.repository';
import { IUseCase } from './use-case.interface';

export class CreateUserUseCase
  implements IUseCase<CreateUserInput, CreateUserOutput>
{
  constructor(private readonly userRepo: IUserRepository) {}

  async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    const entity = User.create(input);
    await this.userRepo.insert(entity);
    return {
      user_id: entity.user_id,
      name: entity.name,
      email: entity.email,
      password: entity.password,
      created_at: entity.created_at,
    };
  }
}

export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};

export type CreateUserOutput = {
  user_id?: string;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
};
