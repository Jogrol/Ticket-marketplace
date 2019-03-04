import React from 'react'
import {connect} from 'react-redux'
import TicketFraudCheck from './TicketFraudCheck'
import {loadTickets} from '../actions/tickets'
import {loadEvent} from '../actions/events'

class TicketFraudCheckContainer extends React.Component {
    

    constructor() {
        super()
        this.state = {
          riskCalc: 5,
        }
    }

    componentWillMount(){
      if(this.props.tickets && this.props.ticket.comments) {
        this.fraudChecker()
      }
    }

    fraudChecker = () => {
        let score = 0
        if (parseInt(this.props.ticket.created_on) > 9 && parseInt(this.props.ticket.created_on) < 18 ) {score=score+10 } 
            else {score=score-10}

        if(this.props.ticket.comments.length > 2) {score=score+5}

        const filterTicketsperUser = this.props.tickets.filter(ticket => ticket.user.id === this.props.ticket.user.id)
        if ((filterTicketsperUser.length > 1)) {score=+5}

        const ticketsFilteredByEvent =  this.props.tickets.filter(ticket => ticket.event.id == this.props.ticket.event.id)
        const avgPricePerEvent = ticketsFilteredByEvent.reduce((prev, ticket) => prev + Number(ticket.price), 0)/ticketsFilteredByEvent.length
        const differenceInPercentage = 100/avgPricePerEvent*this.props.ticket.price-100
          if (differenceInPercentage < 0) {
              let addPositive = differenceInPercentage*-1
              score=+addPositive
          } else {
              if (differenceInPercentage > 10){
                  score=-10
              } else {
                  score=-differenceInPercentage
              }
          }

        if (score < 6) {this.setState({riskCalc: 5})
        } else if (score > 95) {this.setState({riskCalc: 95})
        } else {this.setState({riskCalc: parseInt(score)})}
    }   

    
    render() {
    if (this.props.ticket.length === 0) return "Loading...."
      console.log(this.state.riskCalc)
      return (
          <div>
            <TicketFraudCheck score={this.state.riskCalc} fraudChecker={this.fraudChecker}/>
  		    </div>
      )
    }
  }
  
  const mapStateToProps = state => (
  {
    ticket: state.ticket,
    tickets: state.tickets,
    event: state.event
  })
  
  export default connect(mapStateToProps, {loadEvent, loadTickets})(TicketFraudCheckContainer)