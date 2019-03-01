import React from 'react'
import {connect} from 'react-redux'
import {addCommentToDB, loadComments} from '../actions/comments'
import Commments from './Comments'
import CommentForm from './CommentForm'
import store from '../store';


class CommentsCotainer extends React.Component {
  
    state = {
        comment: '',
        user: '',
        ticket: this.props.ticketID
    }
  
  
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  onSubmit = (event) => {
    // if (this.props.currentUser === null) {
    //   alert("To add a comment you need to login first")}
    // else {
    event.preventDefault()
    this.setState({
        comment: '',
        user: '',
        ticket: this.props.ticketID
    }
    )
    this.props.addCommentToDB(this.state)
    
  // } 
  }


  componentDidMount = () => {
    console.log(this.props.ticketID)
      console.log('from CommentContainer', this.props.ticket.id)
      this.props.loadComments(this.props.ticketID)
  }

  render() {
    
    if (!this.props.ticket.id) return null
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
    comments: state.comments,
    currentUser: state.currentUser
  })

export default connect(mapStateToProps, {loadComments, addCommentToDB})(CommentsCotainer)
