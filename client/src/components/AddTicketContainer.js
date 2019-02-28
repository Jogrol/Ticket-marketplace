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
        event: Number(this.props.match.params.id),
        user: ''
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
        image: 'gg',
        description: '',
        price: '',
        event: '',
        user: 1,
    })
    this.props.addTicketToDB(this.state)
  }

  render() {
    console.log(Number(this.props.match.params.id))
    return (
    <TicketForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
  
}

export default connect(null, {addTicketToDB})(AddTicketContainer)
