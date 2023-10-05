import { Test, TestingModule } from '@nestjs/testing';
import { MathService } from '../../math.service';

describe('MathService Unit Tests', () => {
  let mathService: MathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathService],
    }).compile();

    mathService = module.get<MathService>(MathService);
  });

  it('should add two positive integers correctly', () => {
    const result = mathService.add(3, 5);
    expect(result).toBe(8);
  });

  it('should add two negative integers correctly', () => {
    const result = mathService.add(-3, -5);
    expect(result).toBe(-8);
  });

  it('should return zero when both input numbers are zero', () => {
    const result = mathService.add(0, 0);
    expect(result).toBe(0);
  });
});
