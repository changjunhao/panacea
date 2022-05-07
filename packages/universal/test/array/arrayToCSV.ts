import { arrayToCSV } from "../../src";

export default () => {
  it("should return a CSV string", () => {
    expect(
      arrayToCSV([
        ["a", "b", "c"],
        ["d", "e", "f"],
      ])
    ).toBe('"a","b","c"\n"d","e","f"');
    expect(
      arrayToCSV([
        ["a", '"b" great'],
        ["c", 3.1415],
      ])
    ).toBe('"a","""b"" great"\n"c",3.1415');
  });
  it("should return a CSV string with a custom separator", () => {
    expect(
      arrayToCSV(
        [
          ["a", "b", "c"],
          ["d", "e", "f"],
        ],
        ";"
      )
    ).toBe('"a";"b";"c"\n"d";"e";"f"');
  });
};
