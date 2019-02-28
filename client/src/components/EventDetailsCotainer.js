import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent} from '../actions/events'
import Tickets from './Tickets'

class EventDetailsContainer extends React.Component {

  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  render() {
   
    if (!this.props.event === undefined) return "loading..."
    return (
        <div>
        <EventDetails
            event={this.props.event}
            />
        <Tickets 
            tickets={this.props.event.tickets}
            eventId={this.props.event.id}
            />
     </div>
    )
    }
}

const mapStateToProps = state => (
{
  event: state.event
})

export default connect(mapStateToProps, {loadEvent})(EventDetailsContainer)