import * as moment from 'moment';

function isInFuture(day) {
  return moment(day).isAfter(moment(), 'days');
}

function isToday(day) {
  return moment(day).isSame(moment(), 'days');
}

function isSunday(day) {
  return moment(day).isoWeekday() === 7;
}

function isWeekStart(day) {
  return moment(day).isoWeekday() === 1;
}

function getCalendarWeek(day) {
  return moment(day).isoWeek();
}

function toIsoDateString(date) {
  if (!date) return;
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

function hToI(hours: number): [number, number] {
  return [Math.floor(hours), Math.floor(60 * (hours - Math.floor(hours)))];
}

function hToIString(hours: number): string {
  const hhmm = hToI(hours);
  return `${hhmm[0]}:${hhmm[1] <= 9 ? '0' + hhmm[1] : hhmm[1]}`;
}

function iToH(h: number, m: number): number {
  return h + m / 60;
}

export const DateUtils = {
  isInFuture,
  isToday,
  isSunday,
  getCalendarWeek,
  isWeekStart,
  hToI,
  iToH,
  hToIString,
  toIsoDateString
}
