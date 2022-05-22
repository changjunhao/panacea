import { toCamelCase } from "../../src";

export default () => {
  test("toCamelCase('hello world')", () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
  });
  test("toCamelCase('some_database_field_name')", () => {
    expect(toCamelCase("some_database_field_name")).toBe(
      "someDatabaseFieldName"
    );
  });
  test("toCamelCase('Some label that needs to be title-cased')", () => {
    expect(toCamelCase("Some label that needs to be title-cased")).toBe(
      "someLabelThatNeedsToBeTitleCased"
    );
  });
  test("toCamelCase('some-package-name')", () => {
    expect(toCamelCase("some-package-name")).toBe("somePackageName");
  });
  test("toCamelCase('中国')", () => {
    expect(toCamelCase("中国")).toBe("中国");
  });
};
