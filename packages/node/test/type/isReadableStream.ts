import Stream = require("stream");
import { isReadableStream } from "../../src";

export default () => {
  test("isReadableStream('foo')", () => {
    expect(isReadableStream("foo")).toBe(false);
  });
  test("isReadableStream(new Stream())", () => {
    expect(isReadableStream(new Stream())).toBe(false);
  });
  test("isReadableStream(new Stream.Readable())", () => {
    expect(isReadableStream(new Stream.Readable())).toBe(true);
  });
  test("isReadableStream(new Stream.Writable())", () => {
    expect(isReadableStream(new Stream.Writable())).toBe(false);
  });
};
