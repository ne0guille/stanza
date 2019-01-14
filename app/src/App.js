import React, { Component } from 'react';

import EventList from './screens/Events/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <section className="shadow-lg p-3 mb-5 bg-white rounded">
        <EventList></EventList>
      </section>
      </div>
    );
  }
}

export default App;
