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
      if(this.props.tickets) {
        this.fraudChecker()
      }
    }

    
    fraudChecker = () => {
        let score = 5
        console.log("start score", score)
        //Check creation hour
        if (parseInt(this.props.ticket.created_on) > 9 && parseInt(this.props.ticket.created_on) < 18 ) {
            score=score+10 
                console.log('bad test +10%' , this.state.riskCalc,'created on', this.props.ticket.created_on) 
                console.log('current score +10', score)
              } else {
                score=score-10 
                console.log('good test -10% created on', this.props.ticket.created_on)
                console.log('current score -10%', score)
              }

        //Check comment lenght:
        if(this.props.ticket.comments.length > 2) {
            score=score+5 
            console.log('Bad test +5 commentlength is', this.props.ticket.comments )
            console.log('current score +5', score)
        }
        console.log('total of comments made', this.props.ticket.comments.length)
        console.log('check user id', this.props.ticket.user.id)
        const filterTicketsperUser = this.props.tickets.filter(ticket => ticket.user.id === this.props.ticket.user.id)
        console.log(filterTicketsperUser)
        if ((filterTicketsperUser.length > 1)) {
            score=+5
            console.log('Bad test +5: ammount of tickets per user', filterTicketsperUser.length)
            console.log('current score +5', score)
        }
        const ticketsFilteredByEvent =  this.props.tickets.filter(ticket => ticket.event.id == this.props.ticket.event.id)
        const avgPricePerEvent = ticketsFilteredByEvent.reduce((prev, ticket) => prev + Number(ticket.price), 0)/ticketsFilteredByEvent.length
        console.log('average price', avgPricePerEvent)
        console.log("own price",this.props.ticket.price)

        const differenceInPercentagev2 = 100/avgPricePerEvent*this.props.ticket.price-100
        
        if (differenceInPercentagev2 < 0) {
            let addPositive = differenceInPercentagev2*-1
            score=+addPositive
            console.log('current score + ', differenceInPercentagev2 , ' = ' , score)
            console.log('risk up with', differenceInPercentagev2)
        } else {
            if (differenceInPercentagev2 > 10){
                score=-10
                console.log('current score -10', score)
                console.log('risk goes down with 10')
            } else {
                score=-differenceInPercentagev2
                console.log('current score', score)
                console.log('risk goes down with', differenceInPercentagev2)
            }
            
        }
        if (score < 5) {this.setState({riskCalc: 5})
        } else if (score > 95) {this.setState({riskCalc: 96})
        } else {this.setState({riskCalc: score})}
        console.log('total score', score)
    }   

    
    render() {
    console.log(this.props.ticket)
    if (this.props.ticket.length === 0) return <p>Loading....</p>
   
   
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