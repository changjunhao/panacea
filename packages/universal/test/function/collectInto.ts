import { collectInto } from "../../src";

export default () => {
  const Pall = collectInto(Promise.all.bind(Promise));
  let p1 = Promise.resolve(1);
  let p2 = Promise.resolve(2);
  let p3 = new Promise((resolve) => setTimeout(resolve, 2000, 3));

  test("collectInto", async () => {
    await expect(Pall(p1, p2, p3)).resolves.toEqual([1, 2, 3]);
  });
};
