import { isWeekday } from "../../src";

export default () => {
  expect(isWeekday(new Date(2019, 0, 1))).toBe(true);
};
