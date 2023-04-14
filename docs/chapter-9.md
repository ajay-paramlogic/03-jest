# React Testing Library

## Rendering Components

To render a component, use the `render` function:

```js
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders MyComponent', () => {
  render(<MyComponent />);
});
```

### Example: Rendering with Props
```js
import { render } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Greeting with name prop', () => {
  const { getByText } = render(<Greeting name="John" />);
  expect(getByText('Hello, John!')).toBeInTheDocument();
});
```

## Querying Elements

React Testing Library provides multiple ways to query elements in your component:

- `getByText`: Find an element with the given text content.
- `getByLabelText`: Find a form control element associated with the provided label text.
- `getByPlaceholderText`: Find an element with the given placeholder text.
- `getByAltText`: Find an image element with the given alt text.
- `getByTitle`: Find an element with the given title attribute.
- `getByDisplayValue`: Find a form control element with the given display value.
- `getByRole`: Find an element with the given accessibility role.
- `getByTestId`: Find an element with the given data-testid attribute.

### Example: Querying Elements

```js
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders elements correctly', () => {
  const { getByText, getByLabelText, getByPlaceholderText } = render(
    <MyComponent />
  );

  expect(getByText('My Heading')).toBeInTheDocument();
  expect(getByLabelText('Username')).toBeInTheDocument();
  expect(getByPlaceholderText('Search...')).toBeInTheDocument();
});
```

## Firing Events

To simulate user interactions with your component, use the `fireEvent` function:

```js
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button click triggers the onClick handler', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);

  fireEvent.click(getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Example: Firing Events on Input Elements

```js
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

test('input change updates the value', () => {
  const handleChange = jest.fn();
  const { getByPlaceholderText } = render(
    <Input placeholder="Type something..." onChange={handleChange} />
  );

  fireEvent.change(getByPlaceholderText('Type something...'), {
    target: { value: 'New value' },
  });

  expect(handleChange).toHaveBeenCalledTimes(1);
});
```

## Asynchronous Testing

For components that have asynchronous behavior, use the `waitFor` or `findBy*` functions:

```js
import { render, fireEvent, waitFor, getByText } from '@testing-library/react';
import AsyncComponent from './AsyncComponent';

test('loads data after clicking the button', async () => {
  const { getByText, findByText } = render(<AsyncComponent />);

  fireEvent.click(getByText('Load Data'));

  await waitFor(() => {
    expect(getByText('Data loaded!')).toBeInTheDocument();
  });

  // Alternatively, use findByText
  const dataLoadedElement = await findByText('Data loaded!');
  expect(dataLoadedElement).toBeInTheDocument();
});

```

### Example: Testing Asynchronous Form Submission

```js
import {
  render,
  fireEvent,
  waitFor,
  getByText,
  getByLabelText,
} from '@testing-library/react';
import AsyncForm from './AsyncForm';

test('submits form and displays success message', async () => {
  const { getByText, getByLabelText, findByText } = render(<AsyncForm />);

  fireEvent.input(getByLabelText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    expect(getByText('Form submitted successfully!')).toBeInTheDocument();
  });

  // Alternatively, use findByText
  const successMessageElement = await findByText('Form submitted successfully!');
  expect(successMessageElement).toBeInTheDocument();
});
```

Asynchronous testing involves using `waitFor` and `findBy*` functions to handle components with asynchronous behavior. The `waitFor` function allows you to wait for a certain condition to be met before continuing with the test, while the `findBy*` functions combine querying and waiting into a single function, simplifying the test code.

## Custom Hooks

To test custom hooks, use the `renderHook` function from the `@testing-library/react-hooks` package:

```js
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('custom hook useCounter works correctly', () => {
  const { result } = renderHook(() => useCounter());

  // Test initial state
  expect(result.current.count).toBe(0);

  // Test increment function
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);

  // Test decrement function
  act(() => {
    result.current.decrement();
  });
  expect(result.current.count).toBe(0);
});
```

### Example: Testing a Custom Hook with Async Behavior

```js
import { renderHook, act } from '@testing-library/react-hooks';
import useAsyncData from './useAsyncData';

test('custom hook useAsyncData fetches data correctly', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAsyncData());

  // Test initial state
  expect(result.current.data).toBe(null);
  expect(result.current.loading).toBe(true);

  // Wait for async data to be fetched
  await waitForNextUpdate();

  // Test updated state
  expect(result.current.data).toEqual([{ id: 1, value: 'Data 1' }]);
  expect(result.current.loading).toBe(false);
});

```