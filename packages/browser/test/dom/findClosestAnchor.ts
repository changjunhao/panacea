import { findClosestAnchor } from "../../src";

export default () => {
  it("should find the closest anchor", function () {
    document.body.innerHTML = '<a href="#"><span>test</span></a>';
    expect(findClosestAnchor(document.querySelector("a > span"))).toEqual(
      document.body.firstChild
    );
  });
  it("should return null if no anchor is found", function () {
    document.body.innerHTML = "<span>test</span>";
    expect(findClosestAnchor(document.querySelector("span"))).toEqual(null);
  });
};
