import { CreateUserUseCase } from '../../../application/use-cases/create-user.use-case';
import { UserInMemoryRepository } from '../../../infra/db/in-memory/in-memory.repository';

describe('CreateUserUseCase Unit Tests', () => {
  let useCase: CreateUserUseCase;
  let repository: UserInMemoryRepository;

  beforeEach(() => {
    repository = new UserInMemoryRepository();
    useCase = new CreateUserUseCase(repository);
  });

  it('should create a user', async () => {
    const spyInser = jest.spyOn(repository, 'insert');
    const output = await useCase.execute({
      name: 'Beatriz S.C Rodrigues',
      email: 'bscr.beatriz@gmail.com',
      password: 'Bi@123456',
    });
    expect(spyInser).toHaveBeenCalledTimes(1);
    expect(output).toStrictEqual({
      user_id: repository.items[0].user_id,
      name: 'Beatriz S.C Rodrigues',
      email: 'bscr.beatriz@gmail.com',
      password: 'Bi@123456',
      created_at: repository.items[0].created_at,
    });
  });
});
