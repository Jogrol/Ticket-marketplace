import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent} from '../actions/events'
import Tickets from './Tickets'
import {loadTickets} from '../actions/tickets'

class EventDetailsContainer extends React.Component {

  componentWillMount() {
    this.props.loadTickets()
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
            tickets={this.props.tickets}
            eventId={this.props.match.params.id}
            />
     </div>
    )
    }
}

const mapStateToProps = state => ({
  tickets: state.tickets,
  event: state.event
})

export default connect(mapStateToProps, {loadEvent, loadTickets})(EventDetailsContainer)