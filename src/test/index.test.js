var { add, sub } = require('../operator');

test('adds 10 + 20 to equal 30', () => {
    expect(add(10, 20)).toBe(30);
});

test('subs 10 - 20 to equal -10', () => {
    expect(sub(10, 20)).toBe(-10);
});