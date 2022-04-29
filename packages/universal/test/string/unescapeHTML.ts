import { unescapeHTML } from "../../src";

export default () => {
  test("unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;')", () => {
    expect(
      unescapeHTML(
        `&lt;a href=&quot;#&quot;&gt;Me &amp; &#39; &#39; you&lt;/a&gt;`
      )
    ).toBe(`<a href="#">Me & ' ' you</a>`);
  });
};
