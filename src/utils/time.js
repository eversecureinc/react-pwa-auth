
import moment from 'moment-timezone';

import timeContants from 'constants/time';

const getDayOfWeek = date => {
  return moment(date).format(timeContants.DAY_OF_WEEK);
}
const getOnlyDay = date => {
  return moment(date).format(timeContants.Day);
}
const getDate = date => {
  return moment(date).format(timeContants.GENERAL_FORMAT)
}
const getYearMonth = date => {
  return moment(date).format(timeContants.YEAR_MONTH_FORMAT)
}
const getMonthDay = date => {
  return moment(date).format(timeContants.UTC_DATE_FORMAT)
}


const pad = (num, size) => {
  return ('000' + num).slice(size * -1);
};

const convertTimefromSecond = (milisecond) => {
  const sec = Math.floor(milisecond / 1000);
  const hours = Math.floor(sec / 60 / 60);
  const minutes = Math.floor(sec / 60) % 60;
  const seconds = Math.floor(sec - hours * 3600 - minutes * 60);
  if (hours > 0)
    return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`;
  else
    return `${pad(minutes, 2)}:${pad(seconds, 2)}`;
}

const getTotalHours = (videos = []) => {
  let totalDuration = 0;
  for (const video of videos) {
    const { duration = 0 } = video;
    totalDuration += duration;
  }

  const sec = Math.floor(totalDuration / 1000);
  const hours = Math.floor(sec / 60 / 60);
  const minutes = Math.floor(sec / 60) % 60;
  if (hours > 0)
    return `${hours}h ${minutes}min`;
  else
    return `${minutes}min`;
}

const getStartDayOfWeek = (currentDate) => {
  // const currentDate = new Date();
  const day = currentDate.getDay();
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - day);
  return startDay;
}

const getEndDayofWeek = (currentDate) => {
  // const currentDate = new Date();
  const day = currentDate.getDay();
  return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + (day === 0 ? 8 : 8) - day);
}

const getWeekDates = date => {
  let weekDates = [];
  for (let i = 0; i < 7; i++) {
    let iDate = new Date(date);
    iDate.setDate(date.getDate() + i);
    weekDates.push(iDate);
  }
  return weekDates;
}

const getDayHours = date => {
  let dayHours = [];
  for (let i = 0; i < 24; i++) {
    let iHour = new Date(date);
    iHour.setHours(date.getHours() + i);
    dayHours.push(iHour);
  }
  return dayHours;
}

const timeDiff = (date1, date2) => {
  let minutes = date2.getHours() * 60 + date2.getMinutes() - date1.getHours() * 60 - date1.getMinutes();
  minutes = minutes < 0 ? minutes + 24 * 60 : minutes;

  return Math.ceil(minutes / 60);
}

const isSameDate = (date1, date2) => {
  return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
}

const isSameOnlyTime = (date1, date2) => {
  return date1.getHours() === date2.getHours()
}

const getDayName = (date) => {
  var weekDayName = moment(date).format('dddd');
  return weekDayName
}

const getEstTimeString = (date) => {
  return moment(date).tz("America/New_York").format(timeContants.UTC_TIME_FORMAT)
}

const getPstTimeString = (date) => {
  return moment(date).tz("America/Los_Angeles").format(timeContants.UTC_TIME_FORMAT);
}

const getOffsetTimeString = (date, offset) => {
  return moment(date).utcOffset(offset).format(timeContants.UTC_TIME_FORMAT);
}

const getOffsetTime = (date, offset) => {
  return new Date(date.getTime() + offset * 60 * 60 * 1000);
}

const getMergedDate = (date, time) => {
  return new Date(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    time.getUTCHours(), time.getUTCMinutes(), time.getUTCSeconds(), 0
  );
}

const OffSet = -(new Date().getTimezoneOffset() / 60);

const getTodayScheduleInfo = (startDate, endDate) => {
  const startTime = moment(new Date(startDate)).format('HH:mm');
  const endTime = moment(new Date(endDate)).format('HH:mm');
  const day = moment(new Date(startDate)).format('LLLLL').split(',');
  return `${startTime}-${endTime} ${day[0]}, ${day[1]}`;
}

export {
  getOffsetTime,
  getOffsetTimeString,
  getMergedDate,
  convertTimefromSecond,
  getStartDayOfWeek,
  getEndDayofWeek,
  getWeekDates,
  isSameDate,
  isSameOnlyTime,
  getDayHours,
  timeDiff,
  getDayName,
  getDate,
  getYearMonth,
  getDayOfWeek,
  getEstTimeString,
  getPstTimeString,
  OffSet,
  getTodayScheduleInfo,
  getTotalHours,
  getMonthDay,
  getOnlyDay
};
