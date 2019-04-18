import React from 'react'
import {connect} from 'react-redux'
import {addCommentToDB} from '../actions/comments'
import Commments from './Comments'
import CommentForm from './CommentForm'


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
    event.preventDefault()
    this.setState({
        comment: '',
        user: '',
        ticket: this.props.ticketID
    }
    )
    this.props.addCommentToDB(this.state)
  }

  render() {
    if (!this.props.ticket.id) return null
    return (
      <div>
       <Commments
        comments={this.props.ticket.comments}
        currentUser={this.props.currentUser}/>
    
      <CommentForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        currentUser={this.props.currentUser}
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

export default connect(mapStateToProps, {addCommentToDB})(CommentsCotainer)
