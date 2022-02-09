const app = require('./app');

test('add', () => {
    expect(app.add(10, 20)).toEqual(30)
})