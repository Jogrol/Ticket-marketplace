import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function EventForm (props) {

    return(<div>
          <Typography component="h4" variant="h4" gutterBottom>
                Add Event
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
                id="date"
                label="Start date"
                type="date"
                name="start_date"
                value={props.values.start_date}
                onChange={props.onChange}
                defaultValue="2017-05-24"
                InputLabelProps={{
                shrink: true,
                }}
             />
            <br/>
            <TextField
                id="date"
                label="End date"
                name='end_date'
                type="date"
                value={props.values.end_date}
                onChange={props.onChange}
                defaultValue="2017-05-24"
                InputLabelProps={{
                shrink: true,
                }}
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
            <Button type="submit" variant="contained">
            Submit
            </Button>
        </form>
    </div>
    )
} 
