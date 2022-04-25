import { isSameOrigin } from "../../src";

export default () => {
  it("should return true if the origins are the same", () => {
    expect(
      isSameOrigin(
        new URL("http://localhost:3000"),
        new URL("http://localhost:3000")
      )
    ).toBe(true);
  });
  it("should return false if the origins are different", () => {
    expect(
      isSameOrigin(
        new URL("http://localhost:3000"),
        new URL("http://localhost:3001")
      )
    ).toBe(false);
  });
};
