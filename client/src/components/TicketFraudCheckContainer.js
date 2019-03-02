import React from 'react'
import {connect} from 'react-redux'
import TicketFraudCheck from './TicketFraudCheck'
import {loadEvents} from '../actions/events'
class TicketFraudCheckContainer extends React.Component {

    componentDidMount() {
        
        // this.FraudChecker()
    }
   

    FraudChecker = () => {
        if (this.props.events[0] === []) return null
        this.props.events.map(event => console.log(event.tickets))
        // const ticketByUser = await tickets.filter(ticket => ticket.user.id === 1)
        // // console.log("user 1 sold tickets", ticketByUser.length)
        // console.log(this.props.events)
    }


    render() {
    console.log('avalaible props', this.props)

    if (!this.props) return "loading..."

      return (
          <div>
          <TicketFraudCheck/>
  		 </div>
      )
      }
  }
  
  const mapStateToProps = state => (
  {
    events: state.event,
    ticket: state.ticket,
    currentUser: state.currentUser
  })
  
  export default connect(mapStateToProps, {loadEvents})(TicketFraudCheckContainer)