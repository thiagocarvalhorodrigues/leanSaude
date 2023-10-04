import { User } from '../../../domain/user.entities';
import { InMemoryRepository } from '../../../shared/infra/db/in-memory/in-memory.repository';

export class UserInMemoryRepository extends InMemoryRepository<User> {
  getEntity(): new (...args: any[]) => User {
    return User;
  }
}
