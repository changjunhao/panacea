import { when } from "../../src";

export default () => {
  const doubleEvenNumbers = when(
    (x) => x % 2 === 0,
    (x) => x * 2
  );
  expect(doubleEvenNumbers(2)).toBe(4);
  expect(doubleEvenNumbers(1)).toBe(1);
};
