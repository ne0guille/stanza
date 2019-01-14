import moment from 'moment';

const formatDate = (date, format = 'DDMM') => moment(date).format(format);
const getMonthYear = date => moment(date).format('MMMM YY');

const sortByDateDesc = ((a, b) => {
  return moment.utc(a.dates.start).diff(moment.utc(b.dates.start))
});

const getMonth = date => moment(date).month();

export {
  formatDate,
  getMonthYear,
  getMonth,
  sortByDateDesc
}