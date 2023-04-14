const { readFile, writeFile } = require("./index");

describe("fileUtils", () => {
  beforeAll(async () => {
    // Run this code once before all tests
    await writeFile("./test.txt", "Hello, world!");
  });

  afterAll(async () => {
    // Run this code once after all tests
    await writeFile("./test.txt", "Hello, world!");
  });

  beforeEach(() => {
    // Run this code before each test
  });

  afterEach(() => {
    // Run this code after each test
  });

  test("readFile reads file correctly", async () => {
    const data = await readFile("./test.txt");
    expect(data).toBe("Hello, world!");
  });

  test("readFile throws error when file not found", async () => {
    await expect(readFile("./non-existent.txt")).rejects.toThrow(
      "Failed to read file: ./non-existent.txt"
    );
  });

  test("writeFile writes file correctly", async () => {
    await writeFile("./test.txt", "Hello, Jest!");
    const data = await readFile("./test.txt");
    expect(data).toBe("Hello, Jest!");
  });

  test("writeFile throws error when file cannot be written", async () => {
    await expect(writeFile("/root/test.txt", "Hello, Jest!")).rejects.toThrow(
      "Failed to write file: /root/test.txt"
    );
  });
});
