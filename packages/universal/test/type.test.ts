import isUndefined from "./type/isUndefined";
import isNull from "./type/isNull";
import isNil from "./type/isNil";
import isSymbol from "./type/isSymbol";
import isPrimitive from "./type/isPrimitive";
import isNumber from "./type/isNumber";
import isBoolean from "./type/isBoolean";

describe("type:", () => {
  describe("isUndefined", isUndefined);

  describe("isNull", isNull);

  describe("isNil", isNil);

  describe("isSymbol", isSymbol);

  describe("isPrimitive", isPrimitive);

  describe("isNumber", isNumber);

  describe("isBoolean", isBoolean);
});
