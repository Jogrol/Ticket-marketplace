import React from 'react'
import {connect} from 'react-redux'
import {loadTicket, updateTicket, loadTickets} from '../actions/tickets'
import {loadEvents} from '../actions/events'
import TicketDetails from './TicketDetails'
import CommentsContainer from './CommentsContainer';
import TicketFraudCheckContainer from '../components/TicketFraudCheckContainer'

class TicketContainer extends React.Component {

    state = { 
      editMode:false,
      ticketId: Number(this.props.match.params.id) }

    componentWillMount() {
      this.props.loadTicket(Number(this.props.match.params.id))
      this.props.loadEvents()
      this.props.loadTickets()
    }

    onEdit = () => {
        if (this.props.currentUser === null) {
            alert("You need to login first")
        } else if (this.props.currentUser.user.id !== this.props.ticket.user.id) {
            alert("You are not author of this ticket")
        } else {
            this.setState({
                editMode: true,
                formValues: {
                  name: this.props.ticket.name,
                  description: this.props.ticket.description,
                  image: this.props.ticket.image,
                  price: this.props.ticket.price,
                  event: this.props.ticket.event,
                  user: this.props.currentUser.id
                }
              })}
            }

    onChange = (event) => {
        // update the formValues property with the new data from the input field
        this.setState({
          formValues: {
            ...this.state.formValues,
            [event.target.name]: event.target.value
          }
        })
      }
    
    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
          editMode: false
        })
        
        this.props.updateTicket(this.props.ticket.id, this.state.formValues)
      }
    
  

    render() {
      
    if (!this.props) return "loading..."

      return (
          <div>
            <TicketDetails 
            onEdit={this.onEdit}
            ticket={this.props.ticket}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            onDelete={this.onDelete}
            formValues={this.state.formValues}
            editMode={this.state.editMode}
            />
          <TicketFraudCheckContainer />
          <CommentsContainer/>
          
  		    </div>
      )
      }
  }
  
  const mapStateToProps = state => (
  {
    ticket: state.ticket,
    currentUser: state.currentUser
  })
  
  export default connect(mapStateToProps, {updateTicket,loadEvents, loadTickets, loadTicket})(TicketContainer)