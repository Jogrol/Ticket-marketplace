import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { Route } from "react-router-dom"
import {ListOfEventsContainer} from './components/ListOfEventsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>UberForTickets</h1>
          </header>
          <Route path="/events" exact component={ListOfEventsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;