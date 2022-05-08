import isBetweenDates from "./date/isBetweenDates";
import isBeforeDate from "./date/isBeforeDate";
import isAfterDate from "./date/isAfterDate";
import isWeekend from "./date/isWeekend";
import isWeekday from "./date/isWeekday";
import isLeapYear from "./date/isLeapYear";
import isSameDate from "./date/isSameDate";
import fromTimestamp from "./date/fromTimestamp";
import lastDateOfMonth from "./date/lastDateOfMonth";
import daysInMonth from "./date/daysInMonth";
import getSecondsDiffBetweenDates from "./date/getSecondsDiffBetweenDates";
import getMinutesDiffBetweenDates from "./date/getMinutesDiffBetweenDates";
import getHoursDiffBetweenDates from "./date/getHoursDiffBetweenDates";
import getDaysDiffBetweenDates from "./date/getDaysDiffBetweenDates";
import getMonthsDiffBetweenDates from "./date/getMonthsDiffBetweenDates";
import getMeridiemSuffixOfInteger from "./date/getMeridiemSuffixOfInteger";
import getTimestamp from "./date/getTimestamp";
import getColonTimeFromDate from "./date/getColonTimeFromDate";
import isISOString from "./date/isISOString";
import daysFromNow from "./date/daysFromNow";
import daysAgo from "./date/daysAgo";

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

  describe("daysInMonth:", daysInMonth);

  describe("getSecondsDiffBetweenDates:", getSecondsDiffBetweenDates);

  describe("getMinutesDiffBetweenDates:", getMinutesDiffBetweenDates);

  describe("getHoursDiffBetweenDates:", getHoursDiffBetweenDates);

  describe("getDaysDiffBetweenDates:", getDaysDiffBetweenDates);

  describe("getMonthsDiffBetweenDates:", getMonthsDiffBetweenDates);

  describe("getMeridiemSuffixOfInteger:", getMeridiemSuffixOfInteger);

  describe("getTimestamp:", getTimestamp);

  describe("getColonTimeFromDate:", getColonTimeFromDate);

  describe("isISOString:", isISOString);

  describe("daysFromNow:", daysFromNow);

  describe("daysAgo:", daysAgo);
});
