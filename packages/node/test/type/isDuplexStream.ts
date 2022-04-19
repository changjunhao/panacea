import Stream = require("stream");
import { isDuplexStream } from "../../src";

export default () => {
  test("isDuplexStream('foo')", () => {
    expect(isDuplexStream("foo")).toBe(false);
  });
  test("isDuplexStream(new Stream())", () => {
    expect(isDuplexStream(new Stream())).toBe(false);
  });
  test("isDuplexStream(new Stream.Readable())", () => {
    expect(isDuplexStream(new Stream.Readable())).toBe(false);
  });
  test("isDuplexStream(new Stream.Writable())", () => {
    expect(isDuplexStream(new Stream.Writable())).toBe(false);
  });
  test("isDuplexStream(new Stream.Duplex())", () => {
    expect(isDuplexStream(new Stream.Duplex())).toBe(true);
  });
};
