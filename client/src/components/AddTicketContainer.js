import React from 'react'
import {connect} from 'react-redux'
import {addTicketToDB} from '../actions/tickets'
import TicketForm from './Ticketform'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import store from '../store'

class AddTicketContainer extends React.Component {
  
    state = {
        name: '',
        image: '',
        description: '',
        price: '',
        event: Number(store.getState().event.id),
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
        image: '',
        description: '',
        price: '',
        event: Number(store.getState().event.id),
        user: '',
      }
    )
    this.props.addTicketToDB(this.state)
  }

  render() {
    if (this.props.currentUser === null) return <div>
      <Typography component="h4" variant="h4" gutterBottom>
      Add Ticket
      </Typography>
      You need to login first to add a ticket.
      <br/>
      <Link to = {"/login"}>Login here</Link>
      </div>

    return (
      <TicketForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      />)
  }
}

const mapStateToProps = state => (
  {
    event: state.event,
    currentUser: state.currentUser
  })


export default connect(mapStateToProps, {addTicketToDB})(AddTicketContainer)
