import equals from "./object/equals";
import shallowClone from "./object/shallowClone";
import isSameOrigin from "./object/isSameOrigin";
import checkProp from "./object/checkProp";
import objectToPairs from "./object/objectToPairs";
import matches from "./object/matches";
import isDeepFrozen from "./object/isDeepFrozen";
import size from "./object/size";

describe("object:", function () {
  describe("equals:", equals);

  describe("shallowClone:", shallowClone);

  describe("isSameOrigin:", isSameOrigin);

  describe("checkProp:", checkProp);

  describe("objectToPairs:", objectToPairs);

  describe("matches:", matches);

  describe("isDeepFrozen:", isDeepFrozen);

  describe("size:", size);
});
