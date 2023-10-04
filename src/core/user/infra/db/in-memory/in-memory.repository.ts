import { InMemoryRepository } from '../../../../shared/infra/db/in-memory/in-memory.repository';
import { User } from '../../../domain/user.entities';

export class UserInMemoryRepository extends InMemoryRepository<User> {
    getEntity(): new (...args: any[]) => User {
        return User;
    }
}