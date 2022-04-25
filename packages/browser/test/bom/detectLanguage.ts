import { detectLanguage } from "../../src";

export default () => {
  let languagesGetter = null;

  beforeEach(async () => {
    jest.clearAllMocks();

    languagesGetter = jest.spyOn(window, "navigator", "get");
  });

  test("detectLanguage()", () => {
    expect(detectLanguage()).toBe("en-US");
  });
  test("detectLanguage('zh-CN')", () => {
    languagesGetter.mockReturnValue({
      ...window.navigator,
      languages: null,
    });
    expect(detectLanguage("zh-CN")).toBe("zh-CN");
  });
  test("detectLanguage('zh-CN')", () => {
    languagesGetter.mockReturnValue({
      ...window.navigator,
      languages: [],
    });
    expect(detectLanguage("zh-CN")).toBe("zh-CN");
  });
};
