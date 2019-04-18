import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import ListOfEventsContainer from './components/ListOfEventsContainer'
import SignInContainer from './components/SignInContainer'
import LoginContainer from './components/LoginContainer'
import AddEventContainer from './components/AddEventContainer'
import EventDetailsContainer from './components/EventDetailsCotainer'
import TicketContainer from './components/TicketContainer'
import NavBar from './components/NavBar'
import AddTicketContainer from './components/AddTicketContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <MuiThemeProvider>
        <div>
        <NavBar/>
          <Route path="/" exact component={ListOfEventsContainer} />
          <Route path="/sigin" exact component={SignInContainer} />
          <Route path="/login" exact component={LoginContainer} />
          <Route path='/events/add-event' exact component={AddEventContainer} />
          <Route path="/events/:id" exact component={EventDetailsContainer} />
          <Route path="/events/:id/tickets/:id" exact component={TicketContainer} />
          <Route path="/events/:id/add-ticket" exact component={AddTicketContainer} />
        </div>
        <div>
        <foote>
          <p>Made with love by Joey Grolleman</p>
        </foote>
        </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;