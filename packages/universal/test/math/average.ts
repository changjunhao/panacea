import { average } from "../../src";

export default () => {
  test("average(...[1, 2, 3])", () => {
    expect(average(...[1, 2, 3])).toBe(2);
  });
  test("average(1, 2, 3, 4)", () => {
    expect(average(1, 2, 3, 4)).toBe(2.5);
  });
};
