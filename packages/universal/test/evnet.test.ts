import { createEventHub } from "../src";

describe("event:", () => {
  describe("createEventHub:", () =>
    it("should create an event hub", () => {
      const hub = createEventHub();

      const handler1 = jest.fn();
      const handler2 = jest.fn();

      hub.on("message", handler1);
      hub.on("message", handler2);

      hub.emit("message", "hello world");

      expect(handler1).toHaveBeenCalledWith("hello world");
      hub.off("message", handler1);

      hub.emit("message", { hello: "world" });
      expect(handler2).toHaveBeenCalledWith({ hello: "world" });

      expect(hub).toBeDefined();
      expect(handler1).toHaveBeenCalledTimes(1);
      expect(handler2).toHaveBeenCalledTimes(2);

      hub.off("message", handler1);
      hub.off("message", jest.fn());
      hub.off("message", handler2);
      hub.emit("message", "hello world");
      expect(hub.hub["message"]).not.toBeDefined();
      hub.off("message", handler1);
    }));
});
