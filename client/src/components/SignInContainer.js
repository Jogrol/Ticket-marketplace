import React from 'react'
import {connect} from 'react-redux'
import SignIn from './SignIn'



class SignInContainer extends React.Component {

state = {
    userName: '',
    email: '',
    password: ''
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
      password: ''
    })
    console.log(this.state)
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

export default connect(mapStateToProps, {})(SignInContainer)
