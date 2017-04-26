import foo from '../src/foo'

test('foos the bar', async () => {
  expect(await foo()).toBe('foo');
});
