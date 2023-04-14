1. [Introduction](docs/chapter-1.md)

    - Brief overview of Jest
    - Importance of testing in software development

2. [Setting up Jest](docs/chapter-2.md)

    - Installing Jest as a dependency
    - Creating a basic configuration file
    - Adding a test script in package.json

3. [Writing basic tests](docs/chapter-3.md)

    - Understanding test suites and test cases
    - Writing a simple test using 'describe' and 'test' or 'it'
    - Running tests using the 'npm test' command

4. [Matchers (20 minutes)](docs/chapter-4.md)

    - Using matchers to validate test results (toBe, toEqual, toBeTruthy, toBeFalsy, etc.)
    - Writing custom matchers for specific requirements
    - Demonstrating practical examples of different matchers

5. [Testing asynchronous code](docs/chapter-5.md)

    - Handling Promises with 'resolves' and 'rejects'
    - Using 'async/await' with Jest
    - Timeouts and managing slow tests

6. [Mocking](docs/chapter-6.md)

    - The importance of mocking in testing
    - Using Jest's built-in mocking capabilities
    - Creating mock functions with 'jest.fn()'
    - Mocking modules and dependencies
    - Spying on functions with 'jest.spyOn()'

7. [Snapshot testing](docs/chapter-7.md)

    - Introduction to snapshot testing and its benefits
    - Creating and updating snapshots
    - Handling changes in snapshots and version control

8. [Code coverage](docs/chapter-8.md)

    - Importance of code coverage in testing
    - Generating coverage reports with Jest

9. [Jest With React Testing Library](docs/chapter-9.md)
    - React Testing Library is a lightweight testing utility designed to test React components in a way that closely mimics how users interact with them, emphasizing accessibility and user interactions.
    - It encourages writing tests that focus on the rendered output of components rather than their implementation details, promoting maintainable and refactor-friendly tests.
    - It offers simple and intuitive APIs, such as render, fireEvent, and various query functions like getByText, getByRole, and getByTestId, to make testing more efficient and user-centric.

10. Jest With Cypress