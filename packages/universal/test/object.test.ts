import equals from "./object/equals";
import shallowClone from "./object/shallowClone";
import isSameOrigin from "./object/isSameOrigin";
import checkProp from "./object/checkProp";
import objectToPairs from "./object/objectToPairs";
import matches from "./object/matches";
import isDeepFrozen from "./object/isDeepFrozen";
import size from "./object/size";
import deepMerge from "./object/deepMerge";
import get from "./object/get";

describe("object:", function () {
  describe("equals:", equals);

  describe("shallowClone:", shallowClone);

  describe("isSameOrigin:", isSameOrigin);

  describe("checkProp:", checkProp);

  describe("objectToPairs:", objectToPairs);

  describe("matches:", matches);

  describe("isDeepFrozen:", isDeepFrozen);

  describe("size:", size);

  describe("deepMerge:", deepMerge);

  describe("get:", get);
});
