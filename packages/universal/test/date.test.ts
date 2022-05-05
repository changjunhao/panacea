import isBetweenDates from "./date/isBetweenDates";
import isBeforeDate from "./date/isBeforeDate";
import isAfterDate from "./date/isAfterDate";
import isWeekend from "./date/isWeekend";
import isWeekday from "./date/isWeekday";

describe("Date:", function () {
  describe("isBetweenDates:", isBetweenDates);

  describe("isBeforeDate:", isBeforeDate);

  describe("isAfterDate:", isAfterDate);

  describe("isWeekend:", isWeekend);

  describe("isWeekday:", isWeekday);
});
