import { getDistance } from "../../src";

export default () => {
  test(" { latitude: 34.23053, longitude: 108.93425 } -> { latitude: 40.22077, longitude: 116.23128 }", () => {
    expect(
      getDistance(
        { latitude: 34.23053, longitude: 108.93425 },
        { latitude: 40.22077, longitude: 116.23128 }
      )
    ).toBe(928314);
  });
};
