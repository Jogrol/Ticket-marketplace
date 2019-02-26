import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import ListOfEventsContainer from './components/ListOfEventsContainer'
import SignInContainer from './components/SignInContainer'
import LoginContainer from './components/LoginContainer'
import AddEventContainer from './components/AddEventContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>UberForTickets</h1>
          <Route path="/" exact component={ListOfEventsContainer} />
          <Route path='/' exact component={SignInContainer} />
          <Route patch='/' exact component={LoginContainer} />
          <Route patch='/' exact component={AddEventContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;