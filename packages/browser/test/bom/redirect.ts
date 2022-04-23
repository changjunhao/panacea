import { redirect } from "../../src";

export default () => {
  const { location } = window;
  beforeAll((): void => {
    delete window.location;
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window.location = {
      href: "",
      replace: jest.fn(),
    };
  });
  afterAll((): void => {
    window.location = location;
  });
  test("redirect", () => {
    redirect("https://www.google.com");
    expect(window.location.href).toBe("https://www.google.com");
    expect(window.location.replace).not.toHaveBeenCalled();
  });
  test("redirect with asLink", () => {
    redirect("https://www.google.com", false);
    expect(window.location.replace).toHaveBeenCalled();
  });
};
