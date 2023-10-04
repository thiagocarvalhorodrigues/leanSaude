import { User } from '../user.entities';

describe('User Unit Tests', () => {
  test('should create a user witch UserCreateCommand', () => {
    const user = User.create({
      name: 'Thiago',
      email: 'tcr.thiago@gmail.com',
      password: 'test@123456',
    });
    expect(user.user_id).toBe('1');
    expect(user.name).toBe('Thiago');
    expect(user.email).toBe('tcr.thiago@gmail.com');
    expect(user.password).toBe('test@123456');
  });

  test('should change name', () => {
    const user = new User({
      name: 'Thiago',
      email: 'tcr.thiago@gmail.com',
      password: 'test@123456',
    });
    user.changeName('Outro nome');
    expect(user.name).toBe('Outro nome');
  });

  test('Should change email', () => {
    const user = new User({
      name: 'Thiago',
      email: 'tcr.thiago@gmail.com',
      password: 'test@123456',
    });
    user.changeEmail('gizelli@teste.com.br');
    expect(user.email).toBe('gizelli@teste.com.br');
  });

  test('should change password', () => {
    const user = new User({
      name: 'Thiago',
      email: 'tcr.thiago@gmail.com',
      password: 'test@123456',
    });
    user.changePassword('thiago@123456');
    expect(user.password).toBe('thiago@123456');
  });
});
