import isBetweenDates from "./date/isBetweenDates";
import isBeforeDate from "./date/isBeforeDate";
import isAfterDate from "./date/isAfterDate";
import isWeekend from "./date/isWeekend";
import isWeekday from "./date/isWeekday";
import isLeapYear from "./date/isLeapYear";
import isSameDate from "./date/isSameDate";
import fromTimestamp from "./date/fromTimestamp";
import lastDateOfMonth from "./date/lastDateOfMonth";

describe("Date:", function () {
  describe("isBetweenDates:", isBetweenDates);

  describe("isBeforeDate:", isBeforeDate);

  describe("isAfterDate:", isAfterDate);

  describe("isWeekend:", isWeekend);

  describe("isWeekday:", isWeekday);

  describe("isLeapYear:", isLeapYear);

  describe("isSameDate:", isSameDate);

  describe("fromTimestamp:", fromTimestamp);

  describe("lastDateOfMonth:", lastDateOfMonth);
});
