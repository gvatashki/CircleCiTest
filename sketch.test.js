

const { test, expect } = require('@jest/globals');
const sum = require('./sketch');

test('add 1 + 2 + 8 to equal 11', () => {
    expect(sum(1,2,8)).toBe(11);
})