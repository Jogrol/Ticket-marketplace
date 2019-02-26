import React from 'react'
import {connect} from 'react-redux'
import SignIn from './SignIn'
import {sendSignInToDB} from '../actions/users'



class SignInContainer extends React.Component {

state = {
    userName: '',
    email: '',
    password: '',
    password_confirmation: ''
  }


  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      userName: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
    console.log(this.state)
    this.props.sendSignInToDB(this.state)
  }

  render() {
    return (
    <SignIn
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

const mapStateToProps = state => ({
  events: state
})

export default connect(mapStateToProps, {sendSignInToDB})(SignInContainer)
