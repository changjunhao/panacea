import { either } from "../../src";

export default () => {
  const isEven = (num) => num % 2 === 0;
  const isPositive = (num) => num > 0;
  const isPositiveOrEven = either(isPositive, isEven);
  expect(isPositiveOrEven(4)).toBe(true);
  expect(isPositiveOrEven(3)).toBe(true);
  expect(isPositiveOrEven(-1)).toBe(false);
};
