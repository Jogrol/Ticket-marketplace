import React from 'react'
import {connect} from 'react-redux'
import {addCommentToDB} from '../actions/comments'
import Commments from './Comments'
import CommentForm from './CommentForm'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

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
    if (this.props.currentUser === null) return <div>
      <Typography component="h5" variant="h5" gutterBottom>
        Add comment
      </Typography>
        You need to login first to add a comment.
        <br/>
        <Link to = {"/login"}>Login here</Link>
      </div>

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

export default connect(mapStateToProps, {addCommentToDB})(CommentsCotainer)
