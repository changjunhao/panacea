import { timeTaken } from "../../src";

export default () => {
  test("timeTaken", () => {
    expect(timeTaken(() => Math.pow(2, 10))).toBe(1024);
  });
};
