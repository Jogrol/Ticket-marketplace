import React from 'react'
import {loadEvents} from '../actions/events'
import {connect} from 'react-redux'
import ListOfEvents from './ListOfEvents'


class ListOfEventsContainer extends React.Component {
  
 componentDidMount() {
    this.props.loadEvents()
  }

  render() {
     if (!this.props.events) return "loading..."
    return  <ListOfEvents events={this.props.events} />
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents})(ListOfEventsContainer)