import { Entity } from '../entity';

export interface IRepository<E extends Entity> {
    insert(entity: E): Promise<void>;
}