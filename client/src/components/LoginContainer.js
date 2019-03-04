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
                <Login
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                    errorMessage={this.props.failed_login.error}
                    />
            </div>)
	}
}

const mapStateToProps = (state) => {
	return {
        failed_login: state.failed_login,
	}
}

export default connect(mapStateToProps,{login})(LoginContainer)