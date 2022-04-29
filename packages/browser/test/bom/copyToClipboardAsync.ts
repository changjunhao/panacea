import { copyToClipboardAsync } from "../../src";

export default () => {
  let clipboardGetter = null;

  beforeEach(async () => {
    jest.clearAllMocks();

    clipboardGetter = jest.spyOn(window, "navigator", "get");
  });

  it("should copy text to clipboard", async function () {
    const text = "Hello World!";
    clipboardGetter.mockReturnValue({
      ...window.navigator,
      clipboard: {
        writeText: jest.fn().mockReturnValue(Promise.resolve()),
        readText: jest.fn().mockReturnValue(Promise.resolve("Hello World!")),
      },
    });
    await copyToClipboardAsync(text);
    expect(await navigator.clipboard.readText()).toBe(text);
  });
  it("should throw an error", async function () {
    const text = "123";
    clipboardGetter.mockReturnValue({
      ...window.navigator,
      clipboard: undefined,
    });
    await expect(copyToClipboardAsync(text)).rejects.toThrow();
  });
};
