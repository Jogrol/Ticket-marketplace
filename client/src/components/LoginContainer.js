import React from 'react'
import {connect} from 'react-redux'
// import {login} from '../../actions/users'
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
		console.log(this.state)
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
                </div>)
   
	}
}

const mapStateToProps = (state) => {
	return {
        state
	}
}

export default connect(mapStateToProps)(LoginContainer)