import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>UberForTickets</h1>
          <Route path="/" exact component={EventsListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;