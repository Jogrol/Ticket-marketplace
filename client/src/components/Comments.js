import * as React from 'react'


export default function Comments (props) {
    
    if (!props.comments) return  <div><h2>Comments</h2> <p>No comments</p></div>

    return(
      
        <div> 
            <h2>Comments</h2>
            <ol>
           {props.comments.map((comment) => <li key={comment.id}>{comment.comment} by {comment.user.userName}</li>)}
           </ol>
        </div>
    )

    
}