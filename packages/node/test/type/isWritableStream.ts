import Stream = require("stream");
import { isWritableStream } from "../../src";

export default () => {
  test("isWritableStream('foo')", () => {
    expect(isWritableStream("foo")).toBe(false);
  });
  test("isWritableStream(new Stream())", () => {
    expect(isWritableStream(new Stream())).toBe(false);
  });
  test("isWritableStream(new Stream.Readable())", () => {
    expect(isWritableStream(new Stream.Readable())).toBe(false);
  });
  test("isWritableStream(new Stream.Writable())", () => {
    expect(isWritableStream(new Stream.Writable())).toBe(true);
  });
};
