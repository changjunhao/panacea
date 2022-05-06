import coalesceFactory from "./function/coalesceFactory";
import when from "./function/when";
import unary from "./function/unary";
import collectInto from "./function/collectInto";
import timeTaken from "./function/timeTaken";
import negate from "./function/negate";
import either from "./function/either";

describe("function:", () => {
  describe("coalesceFactory", coalesceFactory);

  describe("when", when);

  describe("unary", unary);

  describe("collectInto", collectInto);

  describe("timeTaken", timeTaken);

  describe("negate", negate);

  describe("either", either);
});
