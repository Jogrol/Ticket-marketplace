import React from 'react'
import {connect} from 'react-redux'
import {addEventToDB} from '../actions/events'
import EventForm from './Eventform'



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
    event.preventDefault()
    this.props.addEventToDB(this.state)
    this.setState({
        name: '',
        start_date: '',
        end_date: '',
        description: '',
        image: '',
      })
    }



  render() {
    return (
      <EventForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        currentUser={this.props.currentUser}
      />)
    }
}

const mapStateToProps = state => (
  {
    currentUser: state.currentUser
  })

export default connect(mapStateToProps, {addEventToDB})(AddEventContainer)
