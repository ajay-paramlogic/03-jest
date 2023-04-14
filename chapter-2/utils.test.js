const { capitalize, truncate, sum, average, unique } = require("./utils");

// Jest test
test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
  expect(capitalize("")).toBe("");
});

test("truncate", () => {
  expect(truncate("This is a long string", 10)).toBe("This is a…");
  expect(truncate("Short string", 20)).toBe("Short string");
  expect(truncate("Exact length", 12)).toBe("Exact length");
});

test("sum", () => {
  expect(sum([1, 2, 3, 4])).toBe(10);
  expect(sum([-1, 1])).toBe(0);
  expect(sum([])).toBe(0);
});

test("average", () => {
  expect(average([1, 2, 3, 4])).toBe(2.5);
  expect(average([-1, 1])).toBe(0);
  expect(average([])).toBe(0);
});

test("unique", () => {
  expect(unique([1, 2, 3, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  expect(unique(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  expect(unique([])).toEqual([]);
});
