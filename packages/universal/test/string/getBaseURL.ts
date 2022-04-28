import { getBaseURL } from "../../src";

export default () => {
  test("getBaseURL('http://url.com/page?name=Adam&surname=Smith')", () => {
    expect(getBaseURL("http://url.com/page?name=Adam&surname=Smith")).toBe(
      "http://url.com/page"
    );
  });
};
