import { groupBy } from 'ramda';
import { createSelector } from 'reselect'

import { mapEventInfo } from '../utils/event-mapper';
import { sortByDateDesc } from '../../../shared/calendar-utils';

export const getEventsSelector= state => state.events;
export const getEventsList = createSelector([getEventsSelector], events => events.data);

const groupByMonth = groupBy(({month}) => month);

export const getEventsByMonth = createSelector(
    [getEventsList], 
    events => {
      const mappedEvents = events.sort(sortByDateDesc).map(mapEventInfo);
      return groupByMonth(mappedEvents);
    });
