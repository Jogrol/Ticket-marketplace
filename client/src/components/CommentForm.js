import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function CommentForm (props) {

    return(<div>
          <Typography component="h2" variant="h2" gutterBottom>
                Add comment
            </Typography>
        <form onSubmit={props.onSubmit} >
            <TextField
                id="outlined-with-placeholder"
                label="Comment"
                placeholder="Comment"
                name="comment" value={props.values.comment}
                onChange={props.onChange}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <Button type="submit" variant="contained">
            Submit comment
            </Button>
        </form>
    </div>
    )
} 
