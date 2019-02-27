import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent} from '../actions/events'
import Tickets from './Tickets'
// import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {

  state = { editMode: false }

  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  render() {
   
    if (!this.props.event.ticket === undefined) return "loading..."
    return (
        <div>
        <EventDetails
            event={this.props.event}
            formValues={this.state.formValues}
            editMode={this.state.editMode}
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