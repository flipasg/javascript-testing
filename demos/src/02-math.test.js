const { sum, multiply, divide } = require('./02-math');

test('sum -> 1+3 should be 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('multiply -> 1*3 should be 3', () => {
  expect(multiply(1, 3)).toBe(4);
});

test('divide -> 1/3 should be 0', () => {
  expect(divide(1, 3)).toBe(0.3333333333333333);
});
