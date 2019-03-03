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
        image: '',
    }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    if (this.props.currentUser === null) {
      alert("To add an event you need to login first")}
    else {
    event.preventDefault()
    this.setState({
        name: '',
        start_date: '',
        end_date: '',
        description: '',
        image: '',
        event: this.props.match.params.id
    })
    this.props.addEventToDB(this.state)
  }
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
const mapStateToProps = state => (
  {
    currentUser: state.currentUser
  })

export default connect(mapStateToProps, {addEventToDB})(AddEventCotainer)
