import React from 'react'
import {connect} from 'react-redux'
// import {addCommentToDB} from '../actions/comments'
import Commments from './Comments'
import CommentForm from './CommentForm'

class CommentsCotainer extends React.Component {
  
    state = {
        comment: '',
        user: '',
        ticket: this.props.ticket.id
    }

    
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  onSubmit = (event) => {
      console.log(this.props.ticket.id)
    // if (this.props.currentUser === null) {
    //   alert("To add a comment you need to login first")}
    // else {
    event.preventDefault()
    this.setState({
        comment: '',
        user: '',
        ticket:  this.props.ticket.id
    })
    // this.props.addCommentToDB(this.state)
// }
  }

  render() {
    return (
        <div>
    <Commments
        comments={this.props.ticket.comments}/>
    <CommentForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
    </div>)
  }
  
}

const mapStateToProps = state => (
  {
    ticket: state.ticket,
    currentUser: state.currentUser
  })


export default connect(mapStateToProps, {})(CommentsCotainer)
