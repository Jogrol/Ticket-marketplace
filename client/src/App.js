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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Typography from '@material-ui/core/Typography';

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
          <Route path="/event/:id" exact component={EventDetailsContainer} />
          <Route path="/event/:id/ticket/:id" exact component={TicketContainer} />
        </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;