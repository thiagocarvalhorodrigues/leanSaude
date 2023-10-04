import { Entity } from '../../../domain/entity';
import { IRepository } from '../../../domain/repository/repository-interfaces';

export abstract class InMemoryRepository<E extends Entity>
  implements IRepository<E>
{
  items: E[] = [];
  async insert(entity: E): Promise<void> {
    this.items.push(entity);
  }

  async findAll(): Promise<any[]> {
    return this.items;
  }

  abstract getEntity(): new (...args: any[]) => E;
}
