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
    // if (this.props.currentUser === null) {
    //   alert("To add a ticket you need to login first")}
    // else {
    event.preventDefault()
    this.setState({
        name: '',
        image: '',
        description: '',
        price: '',
        event: Number(this.props.match.params.id),
        user: '',
    }
    )
    this.props.addTicketToDB(this.state)
  // }
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

const mapStateToProps = state => (
  {
    currentUser: state.currentUser
  })


export default connect(mapStateToProps, {addTicketToDB})(AddTicketContainer)
