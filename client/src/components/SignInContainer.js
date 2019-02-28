import React from 'react'
import {connect} from 'react-redux'
import SignIn from './SignIn'
import {sendSignInToDB} from '../actions/users'
import {Redirect} from 'react-router-dom'
import store from '../store'

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
    this.props.sendSignInToDB(this.state)
  }

  render() {
		if (this.props.signIn.success) return (
			<Redirect to="/" />
		)
    console.log(store.getState().currentUser.user.id)
		return (
      
			<div>
        <SignIn
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          sigIn={this.props.signIn}
        />

				<p style={{color:'red'}}>{ this.props.signIn.errorMessage }</p>
			</div>
    )

	}
}


const mapStateToProps = state => ({
  events: state.events,
  signIn: state.signIn
})

export default connect(mapStateToProps, {sendSignInToDB})(SignInContainer)
