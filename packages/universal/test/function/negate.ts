import { negate } from "../../src";

export default () => {
  it("should return a function that negates the result of the given function", () => {
    const isEven = (n: number) => n % 2 === 0;
    const isOdd = negate(isEven);
    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
  });
};
