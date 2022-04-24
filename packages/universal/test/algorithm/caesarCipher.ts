import { caesarCipher } from "../../src";

export default () => {
  test("caesarCipher('Hello World!', -3)", () => {
    expect(caesarCipher("Hello World!", -3)).toBe("Ebiil Tloia!");
  });
  test("caesarCipher('Ebiil Tloia!', 23, true)", () => {
    expect(caesarCipher("Ebiil Tloia!", 23, true)).toBe("Hello World!");
  });
};
