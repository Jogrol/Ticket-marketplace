import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'

// import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {

  state = { editMode: false }


  render() {
    if (!this.props) return "loading..."
    return (<EventDetails
        onEdit={this.onEdit}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onDelete={this.onDelete}
        event={this.props.event}
        formValues={this.state.formValues}
        editMode={this.state.editMode}
        
      />)
    }
}

const mapStateToProps = state => (
{
  event: state.event
})

export default connect(mapStateToProps, {})(EventDetailsContainer)