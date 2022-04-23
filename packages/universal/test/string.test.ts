import mask from "./string/mask";
import padNumber from "./string/padNumber";
import isUpperCase from "./string/isUpperCase";
import isLowerCase from "./string/isLowerCase";
import truncateString from "./string/truncateString";
import colorize from "./string/colorize";
import serializeCookie from "./string/serializeCookie";

describe("string:", () => {
  describe("mask", mask);

  describe("padNumber", padNumber);

  describe("isUpperCase", isUpperCase);

  describe("isLowerCase", isLowerCase);

  describe("truncateString", truncateString);

  describe("colorize:", colorize);

  describe("serializeCookie", serializeCookie);
});
