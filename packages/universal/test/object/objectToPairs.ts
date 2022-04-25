import { objectToPairs } from "../../src";

export default () => {
  test("objectToPairs({ a: 1, b: 2 })", () => {
    expect(objectToPairs({ a: 1, b: 2 })).toStrictEqual([
      ["a", 1],
      ["b", 2],
    ]);
  });
};
