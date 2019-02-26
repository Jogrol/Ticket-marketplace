import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users'
import Login from './Login'
// import {Redirect} from 'react-router-dom'

class LoginContainer extends React.Component {
	state = {
        userName: '',
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
            password: ''
        })
		this.props.login(this.state)
	}

	

	render() {
    
		return (
            <div>
                <h1>Log in</h1>
                <Login
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                    />
                <p style={{color:'red'}}>{ this.props.failed_login.error }</p>
                </div>)
   
	}
}

const mapStateToProps = (state) => {
	return {
        failed_login: state.failed_login,
	}
}

export default connect(mapStateToProps,{login})(LoginContainer)