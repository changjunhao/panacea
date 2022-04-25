import equals from "./object/equals";
import shallowClone from "./object/shallowClone";
import isSameOrigin from "./object/isSameOrigin";
import checkProp from "./object/checkProp";
import objectToPairs from "./object/objectToPairs";

describe("object:", function () {
  describe("equals:", equals);

  describe("shallowClone:", shallowClone);

  describe("isSameOrigin:", isSameOrigin);

  describe("checkProp:", checkProp);

  describe("objectToPairs:", objectToPairs);
});
