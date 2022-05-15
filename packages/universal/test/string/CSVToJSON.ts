import { CSVToJSON } from "../../src";

export default () => {
  it("should convert a CSV string to a JSON object", () => {
    const json = CSVToJSON("col1,col2\na,b\nc,d");
    expect(json).toEqual([
      { col1: "a", col2: "b" },
      { col1: "c", col2: "d" },
    ]);
  });

  it("should convert a CSV string to a JSON object with custom delimiter", () => {
    const json = CSVToJSON("col1;col2\na;b\nc;d", ";");
    expect(json).toEqual([
      { col1: "a", col2: "b" },
      { col1: "c", col2: "d" },
    ]);
  });
};
