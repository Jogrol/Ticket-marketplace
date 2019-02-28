import React from 'react'
import {connect} from 'react-redux'
import {loadTicket, updateTicket} from '../actions/tickets'
import TicketDetails from './TicketDetails'

class TicketContainer extends React.Component {

    state = { editMode: false }

    componentDidMount() {
      this.props.loadTicket(Number(this.props.match.params.id))
    }
    
    onEdit = () => {
        // intialize editing mode:
        // set the starting value of the fields to the event details
        this.setState({
          editMode: true,
          formValues: {
            name: this.props.ticket.name,
            description: this.props.ticket.description,
            image: this.props.ticket.image,
            price: this.props.ticket.price,
            event: this.props.ticket.event
          }
        })
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
       </div>
      )
      }
  }
  
  const mapStateToProps = state => (
  {
    ticket: state.ticket
  })
  
  export default connect(mapStateToProps, {updateTicket, loadTicket})(TicketContainer)