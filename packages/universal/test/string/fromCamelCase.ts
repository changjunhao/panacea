import { fromCamelCase } from "../../src";

export default () => {
  test("fromCamelCase('camelCase', ' ')", () => {
    expect(fromCamelCase("camelCase", " ")).toBe("camel case");
  });
  test("fromCamelCase('camelCase', '-')", () => {
    expect(fromCamelCase("camelCase", "-")).toBe("camel-case");
  });
  test("fromCamelCase('camelCase')", () => {
    expect(fromCamelCase("camelCase")).toBe("camel_case");
  });
  test("fromCamelCase('JSONToCSV', '.')", () => {
    expect(fromCamelCase("JSONToCSV", ".")).toBe("json.to.csv");
  });
};
