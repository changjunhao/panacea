import { checkProp } from "../../src";

export default () => {
  test("lengthIs4", () => {
    const lengthIs4 = checkProp((l) => l === 4, "length");
    expect(lengthIs4([])).toBe(false);
    expect(lengthIs4([1, 2, 3, 4])).toBe(true);
  });

  test("validUserSession", () => {
    const session = { user: {} };
    const validUserSession = checkProp((u) => u.active && !u.disabled, "user");
    expect(validUserSession(session)).toBe(false);

    // @ts-ignore
    session.user.active = true;
    expect(validUserSession(session)).toBe(true);
  });

  test("noLength", () => {
    const noLength = checkProp((l) => l === undefined, "length");
    expect(noLength([])).toBe(false);
    expect(noLength({})).toBe(true);
    expect(noLength(new Set())).toBe(true);
  });
};
