import { generateItems } from "../../src";

export default () => {
  test("generate number of items", () => {
    const items = generateItems(10, (i) => {
      return i + 1;
    });
    expect(items.length).toBe(10);
    expect(items).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
};
