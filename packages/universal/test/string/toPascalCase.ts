import { toPascalCase } from "../../src";

export default () => {
  test("toPascalCase('hello world')", () => {
    expect(toPascalCase("hello world")).toBe("HelloWorld");
  });
  test("toPascalCase('some_database_field_name')", () => {
    expect(toPascalCase("some_database_field_name")).toBe(
      "SomeDatabaseFieldName"
    );
  });
  test("toPascalCase('Some label that needs to be title-cased')", () => {
    expect(toPascalCase("Some label that needs to be title-cased")).toBe(
      "SomeLabelThatNeedsToBeTitleCased"
    );
  });
  test("toPascalCase('some-package-name')", () => {
    expect(toPascalCase("some-package-name")).toBe("SomePackageName");
  });
};
