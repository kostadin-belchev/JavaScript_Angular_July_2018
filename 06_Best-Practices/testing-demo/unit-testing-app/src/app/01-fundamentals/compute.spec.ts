import { compute } from './compute'; 

describe('compute', () => {
  it('should return 0 when negative number entered', () => {
    let result = compute(-2)
    expect(result).toBe(0)
  });

  it('should return the entered number plus one', () => {
    let result = compute(2)
    expect(result).toBe(3)
  });
});