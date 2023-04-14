# Setting up Jest

This guide will walk you through setting up Jest in your project. The process should take approximately 10 minutes.

## Installing Jest as a dependency

To install Jest as a dependency in your project, open a terminal and navigate to your project's root directory. Then, run the following command:

```bash
npm install --save-dev jest
```

This command installs Jest as a development dependency, making it available for use in your project.

## Creating a basic configuration file 
`npx jest --init`

Jest can work without a configuration file, but creating one allows you to customize your testing setup. To create a basic configuration file for Jest, create a new file named **jest.config.js** in your project's root directory. Add the following contents to the file:

```js
module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'json'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
};
```

This configuration provides a basic setup for Jest, including defining the test environment, test file patterns, and coverage directory. You can customize these settings according to your project's requirements.

## Adding a test script in package.json

To run Jest easily using an npm script, you'll need to add a test script to your project's **package.json** file. Open the **package.json** file and add the following script inside the **scripts** object:

```json
"scripts": {
  "test": "jest"
}
```

With this script added, you can now run your tests by executing the following command in your terminal:

```bash
npm test
```

Jest will run all tests in your project based on the configuration you provided.