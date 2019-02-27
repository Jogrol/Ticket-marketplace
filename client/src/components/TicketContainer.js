import React from 'react'
import {connect} from 'react-redux'
import {loadTicket} from '../actions/tickets'
import TicketDetails from './TicketDetails'

class TicketContainer extends React.Component {

    componentDidMount() {
      this.props.loadTicket(Number(this.props.match.params.id))
    }
  
    render() {
    if (!this.props) return "loading..."
        console.log(this.props.ticket)
      return (
          <div>
            <TicketDetails ticket={this.props.ticket}/>
       </div>
      )
      }
  }
  
  const mapStateToProps = state => (
  {
    ticket: state.ticket
  })
  
  export default connect(mapStateToProps, {loadTicket})(TicketContainer)