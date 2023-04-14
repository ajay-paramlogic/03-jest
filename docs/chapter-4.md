# Matchers

## Setup with ES Modules
```sh
npm init -y
npm install --save-dev jest eslint
npx eslint --init
npx jest --init

# Add "type": "module" to package.json
```

```js
// .eslintrc.cjs
module.exports = {
  env: {
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: "eslint:recommended",
  plugins: ["jest"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
```

```js
// jest.config.mjs
export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'node',
  transform: {},
};


In this documentation, we'll explore various built-in matchers provided by Jest, how to create custom matchers for specific requirements, and practical examples of using different matchers.

## Using Matchers to Validate Test Results
Jest provides several built-in matchers to help you validate test results. These matchers make it easy to assert that the values you expect are the same as the values returned by your code. Some common matchers include `toBe`, `toEqual`, `toBeTruthy`, and `toBeFalsy`.

### toBe
The `toBe` matcher checks if two values are strictly equal (===). It is mostly used for primitive values like numbers, strings, and booleans.

```js
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```

### toEqual
The `toEqual` matcher checks if two values are deeply equal. It is useful when comparing objects or arrays.

```js
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

### toBeTruthy / toBeFalsy
The `toBeTruthy` matcher checks if a value is considered truthy (i.e., it evaluates to `true` in a boolean context). The `toBeFalsy` matcher checks if a value is considered falsy (i.e., it evaluates to `false` in a boolean context).

```js
test('null is falsy', () => {
  expect(null).toBeFalsy();
});

test('zero is falsy but not undefined', () => {
  expect(0).toBeFalsy();
  expect(0).not.toBeUndefined();
});
```

## Writing Custom Matchers

In some cases, you may need custom matchers to handle specific requirements. You can create custom matchers by extending the `expect` object:

```js
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

test('number is within range', () => {
  expect(10).toBeWithinRange(1, 20);
});
```

In this example, we created a custom matcher called `toBeWithinRange` to check if a number is within a specified range.

## Practical Examples of Different Matchers

### toBeCloseTo

The `toBeCloseTo` matcher is used to compare floating-point numbers, considering a certain number of decimal places.

```js
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3, 5);
});
```

### toContain

The `toContain` matcher checks if an array or iterable contains a specific item.

```js
test('the shopping list has milk on it', () => {
  const shoppingList = ['milk', 'bread', 'eggs'];
  expect(shoppingList).toContain('milk');
});
```

### toMatch

The `toMatch` matcher is used to check if a string matches a regular expression or a substring.

```js
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in "nonstop"', () => {
    expect('nonstop').toMatch(/stop/);
});
```

### toHaveBeenCalled / toHaveBeenCalledWith

The `toHaveBeenCalled` matcher is used to ensure that a mock function has been called. The `toHaveBeenCalledWith` matcher checks if a mock function has been called with specific arguments.

```js
const callback = jest.fn();

function fetchData(callback) {
  // Simulating an API call
  callback('data');
}

test('the callback should be called with data', () => {
  fetchData(callback);
  expect(callback).toHaveBeenCalled();
  expect(callback).toHaveBeenCalledWith('data');
});