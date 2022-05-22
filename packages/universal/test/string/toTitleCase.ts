import { toTitleCase } from "../../src";

export default () => {
  test("toTitleCase('hello world')", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
  });
  test("toTitleCase('some_database_field_name')", () => {
    expect(toTitleCase("some_database_field_name")).toBe(
      "Some Database Field Name"
    );
  });
  test("toTitleCase('Some label that needs to be title-cased')", () => {
    expect(toTitleCase("Some label that needs to be title-cased")).toBe(
      "Some Label That Needs To Be Title Cased"
    );
  });
  test("toTitleCase('some-package-name')", () => {
    expect(toTitleCase("some-package-name")).toBe("Some Package Name");
  });
};
