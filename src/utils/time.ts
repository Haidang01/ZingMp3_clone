import moment from 'moment';
// const moment = require('moment');
export const formattedDateTimeStamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export function convertTimeSong(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export function convertMinutesToHours(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} giờ ${remainingMinutes} phút`;
}

export function convertSecondsToHoursAndMinutes(timeArray: any, key: string) {
  const totalSeconds = timeArray.reduce(
    (acc: number, cur: any) => acc + cur[key],
    0,
  );
  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  return `${hours} giờ ${minutes} phút`;
}

export function formatreleaseDate(date: number) {
  const releaseDate = moment(date);
  const today = moment().startOf('day');
  const diffDays = today.diff(releaseDate.startOf('day'), 'days');

  if (diffDays === 0) {
    return 'Hôm nay';
  } else if (diffDays === 1) {
    return 'Hôm qua';
  } else if (diffDays < 7) {
    return `${diffDays} ngày trước`;
  } else {
    return releaseDate.format('DD/MM/YYYY');
  }
}
