import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { AxiosResponse } from 'axios';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return a 200 status code when the request is successful', async () => {
    const response = await request(app.getHttpServer()).get('/users');
    expect(response.status).toBe(200);
  });

  it('should return an array of users when the request is successful', async () => {
    const response = await request(app.getHttpServer()).get('/users');
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return a 500 status code when there is an error in the user service', async () => {
    const result: AxiosResponse = {
      data: {},
      status: 500,
      headers: {},
      statusText: '',
      config: null,
    };

    const userService = app.get('UserService');
    jest.spyOn(userService, 'getAllUsers').mockImplementationOnce(() => result);
    const response = await request(app.getHttpServer()).get('/users');
    expect(response.status).toBe(500);
  });
});
