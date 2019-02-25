import React from 'react'
import {loadEvents} from '../actions/events'
import {connect} from 'react-redux'


class EventsListContainer extends React.Component {
  
 componentDidMount() {
    this.props.loadEvents()
  }

  render() {
     if (!this.props.events) return "loading..."
    return <p>Hello there</p>
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents})(EventsListContainer)