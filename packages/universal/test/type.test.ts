import isUndefined from "./type/isUndefined";
import isNull from "./type/isNull";
import isNil from "./type/isNil";
import isSymbol from "./type/isSymbol";
import isPrimitive from "./type/isPrimitive";
import isNumber from "./type/isNumber";
import isBoolean from "./type/isBoolean";
import isString from "./type/isString";
import isPlainObject from "./type/isPlainObject";
import isObjectLike from "./type/isObjectLike";
import isObject from "./type/isObject";
import cloneRegExp from "./type/cloneRegExp";

describe("type:", () => {
  describe("isUndefined", isUndefined);

  describe("isNull", isNull);

  describe("isNil", isNil);

  describe("isSymbol", isSymbol);

  describe("isPrimitive", isPrimitive);

  describe("isNumber", isNumber);

  describe("isBoolean", isBoolean);

  describe("isString", isString);

  describe("isPlainObject", isPlainObject);

  describe("isObjectLike", isObjectLike);

  describe("isObject", isObject);

  describe("cloneRegExp", cloneRegExp);
});
