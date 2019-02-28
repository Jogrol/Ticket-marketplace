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
import AddTicketContainer from './components/AddTicketContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <MuiThemeProvider>
        <div>
        <Typography component="h1" variant="h1" gutterBottom>
         UberForTickets
          </Typography>
          <Route path="/events" exact component={ListOfEventsContainer} />
          <Route path="/sigin" exact component={SignInContainer} />
          <Route path="/login" exact component={LoginContainer} />
          <Route path='/add-event' exact component={AddEventContainer} />
          <Route path="/events/:id" exact component={EventDetailsContainer} />
          <Route path="/events/:id/ticket/:id" exact component={TicketContainer} />
          <Route path="/events/:id/add-ticket" exact component={AddTicketContainer} />
        </div>
        <div>
            <h3>Navbar</h3>
            <Link to = {"/events"}>All events</Link>
            <br/>
            <Link to = {"/sigin"}>Signin</Link>
            <br/>
            <Link to = {"/login"}>login</Link>
            <br/>
            <Link to = {"/add-event"}>add-event</Link>
            <br/>
            <Link to = {"/events/1/add-ticket"}>add-ticket</Link>
            <br/>
        </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;