import { randomAlphaNumeric } from "../../src";

export default () => {
  test("randomAlphaNumeric()", () => {
    const result = randomAlphaNumeric(10);
    expect(result.length).toBe(10);
    expect(/^[a-zA-Z0-9]*$/.test(result)).toBe(true);
    expect(/^[a-zA-Z0-9]{10}$/.test(result)).toBe(true);
    expect(typeof result).toBe("string");
  });
};
