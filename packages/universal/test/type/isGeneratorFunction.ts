import { isGeneratorFunction } from "../../src/";

export default () => {
  test("isGeneratorFunction(function* () {})", () => {
    expect(isGeneratorFunction(function* () {})).toBe(true);
  });
  test("isGeneratorFunction(function () {})", () => {
    expect(isGeneratorFunction(function () {})).toBe(false);
  });
};
