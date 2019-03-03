import React from 'react'
import {connect} from 'react-redux'
import {addEventToDB} from '../actions/events'
import EventForm from './Eventform'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

class AddEventContainer extends React.Component {
  
    state = {
        name: '',
        start_date: '',
        end_date: '',
        description: '',
        image: '',
    }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    if (this.props.currentUser === null) {
    //   alert("To add an event you need to login first")}
    // else {
    event.preventDefault()
    this.setState({
        name: '',
        start_date: '',
        end_date: '',
        description: '',
        image: '',
    })
    this.props.addEventToDB(this.state)
  }
  }

  render() {
    // if (this.props.currentUser === null) return <div>
    //               <Typography component="h4" variant="h4" gutterBottom>
    //             Add Event
    //         </Typography>
    //               You need to login first to add an event.
    //               <br/>
    //               <Link to = {"/login"}>Login here</Link>
    //               </div>
    return (
    <EventForm
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

export default connect(mapStateToProps, {addEventToDB})(AddEventContainer)
