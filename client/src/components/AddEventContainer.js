import React from 'react'
import {connect} from 'react-redux'
import {addEventToDB} from '../actions/events'
import EventForm from './Eventform'

class AddEventCotainer extends React.Component {
  
    state = {
        name: '',
        start_date: '',
        end_date: '',
        description: '',
        image: ''
    }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
        name: '',
        start_date: '',
        end_date: '',
        description: '',
        image: ''
    })
    this.props.addEventToDB(this.state)
  }

  render() {
    return (
    <EventForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {addEventToDB})(AddEventCotainer)
