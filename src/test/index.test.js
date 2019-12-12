var { add, sub, mul, div } = require('../operator');

test('adds 10 + 20 to equal 30', () => {
    expect(add(10, 20)).toBe(30);
});

test('subs 10 - 20 to equal -10', () => {
    expect(sub(10, 20)).toBe(-10);
});

test('muls 10 * 20 to equal 200', () => {
    expect(mul(10, 20)).toBe(200);
});

test('divs 10 / 20 to equal 2', () => {
    expect(div(20, 10)).toBe(2);
});