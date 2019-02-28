import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function TicketForm (props) {

    return(<div>
          <Typography component="h2" variant="h2" gutterBottom>
                Add Ticket
            </Typography>
        <form onSubmit={props.onSubmit} >
            <TextField
                id="outlined-with-placeholder"
                label="Name"
                placeholder="Name"
                name="name" value={props.values.name}
                onChange={props.onChange}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <TextField
                id="outlined-with-placeholder"
                label="Description"
                placeholder="Description"
                name="description" 
                value={props.values.description}
                onChange={props.onChange}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <TextField
                id="outlined-with-placeholder"
                label="Image"
                placeholder="Image"
                name='image' value={props.values.image}
                onChange={props.onChange}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <TextField
                id="outlined-with-placeholder"
                label="Price"
                placeholder="Price"
                name='price' value={props.values.price}
                onChange={props.onChange}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <Button type="submit" variant="contained">
            Submit
            </Button>
        </form>
    </div>
    )
} 
