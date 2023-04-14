# Snapshot Testing

## Introduction to snapshot testing and its benefits
Snapshot testing is a technique used to ensure that the UI of a component does not change unexpectedly. When a snapshot test is run for the first time, Jest captures a "snapshot" of the component's rendered output and stores it in a file. On subsequent test runs, Jest compares the new rendered output with the stored snapshot, and if there are any differences, the test will fail.

The main benefits of snapshot testing include:

- Detecting unintended changes in a component's output.
- Simplifying the process of writing tests for component rendering.
- Providing a "visual history" of a component's changes through stored snapshots.

## Creating and updating snapshots
To create a snapshot test, use Jest's `toMatchSnapshot` matcher:

```js
import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('MyComponent renders correctly', () => {
  const { asFragment } = render(<MyComponent />);
  expect(asFragment()).toMatchSnapshot();
});
```

When you run this test for the first time, Jest will create a snapshot file with the rendered output of `MyComponent`. If the component's output changes in the future, the test will fail, indicating that the snapshot needs to be updated.

To update a snapshot, run Jest with the `-u` or `--updateSnapshot` flag:

`jest -u`

## Handling changes in snapshots and version control
When working with snapshot tests, it is essential to store snapshot files in your version control system (e.g., Git). This allows you to track changes in the snapshots and ensures that your team members have the correct snapshots when running tests.

When a snapshot test fails due to an intentional change in the component's output, update the snapshot as described above and commit the updated snapshot file to your version control system. This ensures that your tests remain up-to-date with your component's changes.

In summary, snapshot testing is a valuable technique for ensuring the stability of your components' rendered output. By creating, updating, and tracking snapshot files in your version control system, you can prevent unintended changes and simplify the testing process.

## Resources
- [Chapter 9: Jest with React Testing Library](docs/chapter-9.md)
- [Jest: Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing)
- [React Testing Library: Snapshot Testing](https://testing-library.com/docs/react-testing-library/example-intro)