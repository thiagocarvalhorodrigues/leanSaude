import { Entity } from '../../../domain/entity';
import { InMemoryRepository } from './in-memory.repository';

type StubEntityConstructor = {
    entity_id?: string;
    name: string;
    email: string;
}

class StubEntity extends Entity{
    entity_id: string;
    name: string;
    email: string;

    constructor(props: StubEntityConstructor) {
        super();
        this.entity_id = props.entity_id || '1';
        this.name = props.name;
        this.email = props.email;
    }
    toJSON() {
        return {
            entity_id: this.entity_id,
            name: this.name,
            email: this.email,
        };
    }
}

class StubInMemoryRepository extends InMemoryRepository<StubEntity> {
    getEntity(): new (...args: any[]) => StubEntity {
        return StubEntity;
    }
}


describe('InMemoryRepository Unit Test', () => {
    let repo: StubInMemoryRepository;

    beforeEach(() => {
        repo = new StubInMemoryRepository()
    })

    test('Should insert a new entity', async () => {
        const entity = new StubEntity({
            entity_id: '1',
            name: 'Test',
            email: 'tcr.thiago@gmail.com',
        })

        await repo.insert(entity);

        expect(repo.items.length).toBeGreaterThan(0);
    })

})