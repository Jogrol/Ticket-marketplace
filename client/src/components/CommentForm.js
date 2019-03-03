import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export default function CommentForm (props) {

    return(<div> <Card>
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
            <Button>Add</Button>
        </form>
        </CardContent>
        </Card>
    </div>
    )
} 
