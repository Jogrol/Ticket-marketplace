import React from 'react'
import {connect} from 'react-redux'
import {loadTicket, updateTicket} from '../actions/tickets'
import {loadEvents} from '../actions/events'
import TicketDetails from './TicketDetails'
import CommentsContainer from './CommentsContainer';
// import {calculateFraudRate} from '../actions/fraudCheck'
import store from '../store';

// const tickets = [{"id":4,"name":"1 VIP ticket","image":"https://www.thespco.org/wp-content/uploads/2016/09/example-ticket-816x293.jpg","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ett","price":150,"created_on":"2019-03-01T12:26:34+01:00","user":{"id":1,"userName":"Joey","email":"joey@test.com"},"comments":[{"id":1,"comment":"This is so cheap!","user":{"id":4,"userName":"Thur","email":"thur@gmail.com"}}]},{"id":3,"name":"2 tickets avalaible","image":"https://www.thespco.org/wp-content/uploads/2016/09/example-ticket-816x293.jpg","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ett","price":90,"created_on":"2019-03-01T12:26:34+01:00","user":{"id":1,"userName":"Joey","email":"joey@test.com"},"comments":[{"id":2,"comment":"To expensive for me!","user":{"id":4,"userName":"Thur","email":"thur@gmail.com"}}]},{"id":11,"name":"single ticket","image":"https://www.thespco.org/wp-content/uploads/2016/09/example-ticket-816x293.jpg","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ett","price":45,"created_on":"2019-03-01T12:26:34+01:00","user":{"id":2,"userName":"newTest","email":"test@test.com"},"comments":[]},{"id":10,"name":"single ticket","image":"https://www.thespco.org/wp-content/uploads/2016/09/example-ticket-816x293.jpg","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ett","price":45,"created_on":"2019-03-01T12:26:34+01:00","user":{"id":4,"userName":"Thur","email":"thur@gmail.com"},"comments":[]},{"id":5,"name":"Two exlusive VIP tickets for sale","image":"https://www.thespco.org/wp-content/uploads/2016/09/example-ticket-816x293.jpg","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ett","price":75,"created_on":"2019-03-01T12:26:34+01:00","user":{"id":2,"userName":"newTest","email":"test@test.com"},"comments":[]},{"id":8,"name":"Group discount","image":"https://www.thespco.org/wp-content/uploads/2016/09/example-ticket-816x293.jpg","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ett","price":100,"created_on":"2019-03-01T12:26:34+01:00","user":{"id":1,"userName":"Joey","email":"joey@test.com"},"comments":[]},{"id":6,"name":"Exlusive day tickets","image":"https://www.thespco.org/wp-content/uploads/2016/09/example-ticket-816x293.jpg","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ett","price":150,"created_on":"2019-03-01T12:26:34+01:00","user":{"id":2,"userName":"newTest","email":"test@test.com"},"comments":[]},{"id":9,"name":"single ticket","image":"https://www.thespco.org/wp-content/uploads/2016/09/example-ticket-816x293.jpg","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ett","price":20,"created_on":"2019-03-01T12:26:34+01:00","user":{"id":3,"userName":"Wed","email":"wed@test.com"},"comments":[]},{"id":7,"name":"Cheap ticket avalaible","image":"https://www.thespco.org/wp-content/uploads/2016/09/example-ticket-816x293.jpg","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ett","price":5,"created_on":"2019-03-01T12:26:34+01:00","user":{"id":1,"userName":"Joey","email":"joey@test.com"},"comments":[]}]
// console.log("counter by user", tickets)

// const ticket = tickets.filter(ticket => ticket.user.id === 1)

// console.log(ticket)

// console.log('by user Id 1', ticket.length)

// const avgPricePerUser = tickets.reduce(((sum, count) => (avg, ticket) => ticket.user.id === 1 ? (sum += +ticket.price) / ++count : avg)(0, 0), 0);

// console.log("average price for a ticket by user 1", avgPricePerUser);

// console.log(store.getState().ticket.comments)



// var stats = arr.reduce(function ({count, sum}, person) {
//   return (person.name == "John")
//     ? {count: count+1, sum: sum + parseFloat(person.score)}
//     : {count, sum};
// }, {count:0, sum:0})
// var avgScore = stats.sum / stats.count);



class TicketContainer extends React.Component {




    state = { 
      editMode:false,
      ticketId: Number(this.props.match.params.id) }

    componentWillMount() {
      this.props.loadEvents()
      this.props.loadTicket(Number(this.props.match.params.id))
      // this.props.getAllTickets()
    }

    onEdit = () => {
        if (this.props.currentUser === null) {
            alert("You need to login first")
        } else if (this.props.currentUser.user.id !== this.props.ticket.user) {
            alert("You are not author of this ticket")
        } else {
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
  
  export default connect(mapStateToProps, {updateTicket,loadEvents, loadTicket})(TicketContainer)