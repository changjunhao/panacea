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
import isFunction from "./type/isFunction";
import isArrayLike from "./type/isArrayLike";
import cloneRegExp from "./type/cloneRegExp";
import coalesce from "./type/coalesce";
import castArray from "./type/castArray";
import isValidJSON from "./type/isValidJSON";
import is from "./type/is";
import getType from "./type/getType";
import isGeneratorFunction from "./type/isGeneratorFunction";
import isAsyncFunction from "./type/isAsyncFunction";
import isPromiseLike from "./type/isPromiseLike";
import isEmpty from "./type/isEmpty";

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

  describe("isFunction", isFunction);

  describe("isArrayLike", isArrayLike);

  describe("cloneRegExp", cloneRegExp);

  describe("coalesce", coalesce);

  describe("castArray", castArray);

  describe("isValidJSON", isValidJSON);

  describe("is", is);

  describe("getType", getType);

  describe("isGeneratorFunction:", isGeneratorFunction);

  describe("isAsyncFunction:", isAsyncFunction);

  describe("isPromiseLike:", isPromiseLike);

  describe("isEmpty:", isEmpty);
});
