import { currentURL } from "../../src";

export default () => {
  test("currentURL", () => {
    expect(currentURL()).toBe("http://localhost/");
  });
};
