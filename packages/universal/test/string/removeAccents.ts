import { removeAccents } from "../../src";

export default () => {
  test("removeAccents('árvíztűrőütő')", () => {
    expect(removeAccents("árvíztűrőütő")).toBe("arvizturouto");
  });
};
