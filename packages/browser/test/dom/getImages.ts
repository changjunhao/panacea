import { getImages } from "../../src";

export default () => {
  test("getImages", () => {
    document.body.innerHTML =
      '<img src="https://example.com/image.png" alt="image" /><img src="https://example.com/image1.png" alt="image" /><img src="https://example.com/image.png" alt="image" />';
    expect(getImages(document.body)).toStrictEqual([
      "https://example.com/image.png",
      "https://example.com/image1.png",
    ]);
    expect(getImages(document.body, true)).toStrictEqual([
      "https://example.com/image.png",
      "https://example.com/image1.png",
      "https://example.com/image.png",
    ]);
  });
};
