import { CSVToArray } from "../../src";

export default () => {
  it("should convert a CSV string to an array", () => {
    const csv = "a,b,c\nd,e,f";
    const array = CSVToArray(csv);
    expect(array).toEqual([
      ["a", "b", "c"],
      ["d", "e", "f"],
    ]);
  });
  it("should convert a CSV string to an array with headers", () => {
    const csv = "col1,col2\na,b\nc,d";
    const array = CSVToArray(csv, ",", true);
    expect(array).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
  it("should convert a CSV string to an array with headers and custom delimiter", () => {
    const csv = "col1|col2\na|b\nc|d";
    const array = CSVToArray(csv, "|", true);
    expect(array).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
};
