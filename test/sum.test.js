const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.add(1, 2)).not.toBe(6);
});


test('If null', () => {
  expect(sum.isNull()).toBeNull();
});


test('If False', () => {
  expect(sum.checkCalue(0)).toBeFalsy();
});