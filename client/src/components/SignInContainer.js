import React from 'react'
import {connect} from 'react-redux'
import SignIn from './SignIn'



class SignInContainer extends React.Component {
  
 componentDidMount =() => {
  
  }

  render() {

    return <SignIn />

}
}

const mapStateToProps = state => ({
  events: state
})

export default connect(mapStateToProps, {})(SignInContainer)
