import { IRepository } from '../shared/domain/repository/repository-interfaces';
import { User } from './user.entities';

export interface IUserRepository extends IRepository<User> {}
