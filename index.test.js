const { add, multiply, divide, subtract } = require(".");

it("T01_더하기", () => {
  const result = add(1, 3);
  expect(result).toBe(4);
});

it("T02_빼기", () => {
  const result = subtract(4, 3);
  expect(result).toBe(1);
});

it("T03_곱하기", () => {
  const result = multiply(5, 5);
  expect(result).toBe(25);
});

it("T04_나누기", () => {
  const result = divide(4, 2);
  expect(result).toBe(2);
});
