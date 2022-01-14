
const fizzBuzz = require("../src/fizzbuzz")

test('FB response is null', () => {
    // TODO: Tester fizzbuzz()
    expect(fizzBuzz(11)).toBe('null');
});

test('FB response is Fizz', () => {
    // TODO: Tester fizzbuzz()
    expect(fizzBuzz(3)).toBe('Fizz');
});

test('FB response is Buzz', () => {
    // TODO: Tester fizzbuzz()
    expect(fizzBuzz(5)).toBe('Buzz');
});

test('FB response is FizzBuzz', () => {
    // TODO: Tester fizzbuzz()
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});

