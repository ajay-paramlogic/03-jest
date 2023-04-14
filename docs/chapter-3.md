# Writing Basic Tests with Jest

## Setup TypeScript with Jest
```bash
npm init -y
npm install --save-dev typescript ts-node
npx tsc --init
```

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "sourceMap": true
  }
}
```

```bash
npm install --save-dev jest @types/jest ts-jest
npx jest --init
```

```js
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
};
```

This section will guide you through writing basic tests using the Jest test framework. We will cover understanding test suites and test cases, writing simple tests using `describe` and `test` (or `it`), and running tests using the `npm test` command.

## Understanding Test Suites and Test Cases
In Jest, tests are organized into *test suites* and *test cases*:

- Test suites are collections of related test cases. They help group and organize tests for better readability and maintainability.
- Test cases are individual tests that verify specific functionality or behavior of your code.
Writing a Simple Test Using describe and test (or it)

To write a simple test using Jest, you can use the `describe` function to create a test suite and the `test` (or `it`) function to write test cases. Here's an example:

```js
const myFunction = require('./myFunction');

describe('myFunction', () => {
  test('returns the correct result', () => {
    expect(myFunction(1, 2)).toBe(3);
  });

  test('handles negative numbers', () => {
    expect(myFunction(-1, -2)).toBe(-3);
  });

  // Alternatively, you can use 'it' instead of 'test'
  it('handles zero', () => {
    expect(myFunction(0, 0)).toBe(0);
  });
});
```

In this example, we create a test suite for `myFunction` using the `describe` function. We then write test cases using the `test` (or `it`) function, which includes expectations using the `expect` function and matchers like `toBe`.