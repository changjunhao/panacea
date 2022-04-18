import Stream = require("stream");
import { isStream } from "../../src";

export default () => {
  test("isStream('foo')", () => {
    expect(isStream("foo")).toBe(false);
  });
  test("isStream(new Stream())", () => {
    expect(isStream(new Stream())).toBe(true);
  });
};
