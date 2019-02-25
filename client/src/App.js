import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import ListOfEventsContainer from './components/ListOfEventsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>UberForTickets</h1>
          <Route path="/" exact component={ListOfEventsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;