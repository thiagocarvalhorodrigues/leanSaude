import { Entity } from '../../shared/domain/entity';

export type UserConstructorProps = {
  user_id?: string;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
};

export type UserCreateCommand = {
  name: string;
  email: string;
  password: string;
  created_at?: Date;
};

export class User extends Entity {
  public user_id: string;
  public name: string;
  public email: string;
  public password: string;
  public created_at?: Date;

  constructor(props: UserConstructorProps) {
    super();
    this.user_id = props.user_id ?? '1';
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.created_at = props.created_at ?? new Date();
  }

  get entity_id(): string {
    return this.user_id;
  }

  static create(props: UserCreateCommand): User {
    return new User(props);
  }

  public changeName(name: string): void {
    this.name = name;
  }

  public changeEmail(email: string): void {
    this.email = email;
  }

  public changePassword(password: string): void {
    this.password = password;
  }

  public toJSON() {
    return {
      user_id: this.user_id,
      name: this.name,
      email: this.email,
      password: this.password,
      created_at: this.created_at,
    };
  }
}
