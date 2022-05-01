/**
 * EARTH RADIUS
 */
const EARTH_RADIUS = 6378136.49;

/**
 * Convert to radians
 * @param d
 */
function convertToRadians(d: number) {
  return (d * Math.PI) / 180.0;
}

/**
 * Object type representing latitude and longitude
 * @public
 */
export type Location = {
  latitude: number;
  longitude: number;
};

/**
 * Calculate the distance
 * @param location1 - location1
 * @param location2 - location2
 * @returns distance in meters
 * @example
 * ```typescript
 * getDistance(
 *  { latitude: 34.23053, longitude: 108.93425 },
 *  { latitude: 40.22077, longitude: 116.23128 }
 *  )
 *  // => 928314
 * ```
 * @since 0.1.7
 * @category Algorithm
 * @public
 */
function getDistance(location1: Location, location2: Location) {
  const { latitude: lat1, longitude: lng1 } = location1;
  const { latitude: lat2, longitude: lng2 } = location2;
  const radLatFrom = convertToRadians(lat1);
  const radLatTo = convertToRadians(lat2);
  // 表示纬度差
  const a = convertToRadians(lat1) - convertToRadians(lat2);
  // 表示经度差
  const b = convertToRadians(lng1) - convertToRadians(lng2);
  let distance =
    2 *
    Math.asin(
      Math.sqrt(
        Math.sin(a / 2) ** 2 +
          Math.cos(radLatFrom) * Math.cos(radLatTo) * Math.sin(b / 2) ** 2
      )
    );
  distance *= EARTH_RADIUS;
  distance = Math.round(distance * 10000) / 10000;
  return parseFloat(distance.toFixed(0));
}

export default getDistance;
