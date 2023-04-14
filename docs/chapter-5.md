# Testing Asynchronous Code

When testing JavaScript code, you will often encounter asynchronous functions that return Promises, take callbacks, or use other async patterns. Jest provides several ways to handle asynchronous code in your tests, including handling Promises with `resolves` and `rejects`, using `async/await`, and managing slow tests with timeouts.

## Handling Promises with `resolves` and `rejects`

When testing functions that return Promises, you can use the `resolves` and `rejects` matchers to ensure that the Promise is resolved or rejected with the expected value. Here's an example:

```js
test('async function resolves correctly', () => {
  return expect(asyncFunction()).resolves.toBe('expected value');
});

test('async function rejects correctly', () => {
  return expect(asyncFunction()).rejects.toThrow('error message');
});
```

In these tests, `asyncFunction()` is expected to return a Promise that either resolves to the string `'expected value'` or rejects with an error that contains the string `'error message'`.

## Using `async/await` with Jest
You can also use `async/await` to handle asynchronous code in your tests. This allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to reason about and test. Here's an example:

```js
test('async/await function resolves correctly', async () => {
  const result = await asyncFunction();
  expect(result).toBe('expected value');
});

test('async/await function throws correctly', async () => {
  await expect(asyncFunction()).rejects.toThrow('error message');
});
```

In these tests, `asyncFunction()` is called using `await`, which pauses the test until the Promise is resolved or rejected. The resolved value is then stored in a variable, which can be used for further assertions. The second test uses `await` with the `rejects` matcher to check that the function throws the expected error.

## Timeouts and managing slow tests

Sometimes, asynchronous tests can take a long time to complete, especially if they involve network requests, database queries, or other slow operations. To avoid false positives or long wait times, you can use Jest's timeout options to set a limit on how long the test should run before timing out. You can set a timeout globally in your Jest configuration file, or on a per-test basis using the `timeout` option. Here's an example:

```js
test('async function with timeout', async () => {
  const result = await asyncFunction();
  expect(result).toBe('expected value');
}, 10000); // 10 second timeout
```

In this test, the timeout is set to 10 seconds, which means that if the test takes longer than 10 seconds to complete, it will be considered a failure. You can adjust the timeout value to match the expected duration of your tests.