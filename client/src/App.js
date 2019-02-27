import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import ListOfEventsContainer from './components/ListOfEventsContainer'
import SignInContainer from './components/SignInContainer'
import LoginContainer from './components/LoginContainer'
import AddEventContainer from './components/AddEventContainer'
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
          <Route path="/" exact component={ListOfEventsContainer} />
          <Route path="/" exact component={SignInContainer} />
          <Route patch="/" exact component={LoginContainer} />
          <Route patch='/' exact component={AddEventContainer} />
        </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;