import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchEvents } from './actions/actions';
import { getEventsByMonth } from './reducers/selector';
import Main from './Main';

const mapStateToProps = state => ({
  eventsByMonth: getEventsByMonth(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchEvents
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);