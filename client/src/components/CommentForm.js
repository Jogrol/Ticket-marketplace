import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

export default function CommentForm (props) {
    if (props.currentUser === null) return <div>
    <Typography component="h5" variant="h5" gutterBottom>
      Add comment
    </Typography>
      You need to login first to add a comment.
      <br/>
      <Link to = {"/login"}>Login here</Link>
    </div>

    return(
        <div> 
            <Card>
               <CardContent>
                <form onSubmit={props.onSubmit} >
                    <TextField
                        id="outlined-with-placeholder"
                        label="Add comment"
                        placeholder="Add comment"
                        name="comment" value={props.values.comment}
                        onChange={props.onChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </form>
                </CardContent>
            </Card>
        </div>
    )
} 
