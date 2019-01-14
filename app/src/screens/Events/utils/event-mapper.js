import { formatDate, getMonthYear } from '../../../shared/calendar-utils';
import { eventFormat } from './constants';

export const mapEventInfo = (({
  shortId,
  name,
  dates,
  images
}) => ({
  id: shortId,
  title: name,
  startDate: formatDate(dates.start, eventFormat),
  month: getMonthYear(dates.start),
  background: images.medium
}))