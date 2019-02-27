import React from 'react'
import {connect} from 'react-redux'
import {addTicketToDB} from '../actions/tickets'
import TicketForm from './Ticketform'

class AddTicketContainer extends React.Component {
  
    state = {
        name: '',
        image: '',
        description: '',
        price: '',
        event: '',
        user: ' '
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
        image: '',
        description: '',
        price: '',
        event: '',
        user: ' '
    })
    this.props.addTicketToDB(this.state)
  }

  render() {
    return (
    <TicketForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {addTicketToDB})(AddTicketContainer)
