import isStream from "./type/isStream";
import isReadableStream from "./type/isReadableStream";
import isWritableStream from "./type/isWritableStream";
import isDuplexStream from "./type/isDuplexStream";

describe("type:", () => {
  describe("isStream:", isStream);

  describe("isReadableStream", isReadableStream);

  describe("isWritableStream", isWritableStream);

  describe("isDuplexStream:", isDuplexStream);
});
