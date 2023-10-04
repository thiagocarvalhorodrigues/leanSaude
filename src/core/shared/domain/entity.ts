export abstract class Entity {
    abstract get entity_id(): string
    abstract toJSON(): any
}