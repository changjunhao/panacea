import { toSnakeCase } from "../../src";

export default () => {
  test("toSnakeCase('hello world')", () => {
    expect(toSnakeCase("hello world")).toBe("hello_world");
  });
  test("toSnakeCase('helloWorld')", () => {
    expect(toSnakeCase("helloWorld")).toBe("hello_world");
  });
  test("toSnakeCase('ome-mixed_string With spaces_underscores-and-hyphens')", () => {
    expect(
      toSnakeCase("ome-mixed_string With spaces_underscores-and-hyphens")
    ).toBe("ome_mixed_string_with_spaces_underscores_and_hyphens");
  });
  test("toSnakeCase('AllThe-small Things')", () => {
    expect(toSnakeCase("AllThe-small Things")).toBe("all_the_small_things");
  });
  test("toSnakeCase('IAmEditingSomeXMLAndHTML')", () => {
    expect(toSnakeCase("IAmEditingSomeXMLAndHTML")).toBe(
      "i_am_editing_some_xml_and_html"
    );
  });
};
