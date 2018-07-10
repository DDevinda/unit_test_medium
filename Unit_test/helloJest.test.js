const sayHello = require('./helloTest');

test('string returning hello', () => {
    expect(sayHello()).toMatch('hello there jest');
});