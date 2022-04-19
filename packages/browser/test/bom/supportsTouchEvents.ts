import { supportsTouchEvents } from "../../src";

export default () => {
  it("should return false if the browser don‘t supports touch events", function () {
    expect(supportsTouchEvents()).toBe(false);
  });
};
