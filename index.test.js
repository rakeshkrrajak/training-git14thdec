const { greet } = require('./index');

describe('greet function', () => {
  test('should return greeting message', () => {
    expect(greet('Test')).toBe('Hello, Test!');
  });

  test('should greet World', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
