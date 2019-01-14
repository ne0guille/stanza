import React, { Component, Fragment } from 'react';

import { Event } from './components';

export default class Main extends Component {

  componentDidMount(){
    this.props.actions.fetchEvents();
  }

  render(){
    const { eventsByMonth } = this.props;
    console.log(eventsByMonth)
    return (
      //TODO create a eventList comp
      Object.keys(eventsByMonth).map(month => {
      return (
        <Fragment>
          <h5 className="monthly-events">{month}</h5>

          <div className="row">
            {eventsByMonth[month].map(event => 
              <Event {...event}></Event>
              )}
          </div>
        </Fragment>
      )
    })
    )
  } 

}