import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function EventForm (props) {

    return(<div>
          <Typography component="h2" variant="h2" gutterBottom>
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







// import * as React from 'react'
// // import TextField from '@material-ui/core/TextField';


// export default function EventForm (props) {
//     return(<div>
//         <h1>Add Event</h1>
       
//         <form onSubmit={props.onSubmit} >
        
//             <label >Name: </label>
//             <input type ='text' name="name" value={props.values.name} onChange={props.onChange}></input>
//             <br/>
//             <label>Start date: </label>
//             <input type ='date' name='start_date'value={props.values.start_date} onChange={props.onChange}></input>
//             <label>End date: </label>
//             <input type ='date' name='end_date'value={props.values.end_date} onChange={props.onChange}></input>
//             <br/>
//             <label>Desription: </label>
//             <textarea type='text' name='description' value={props.values.description} onChange={props.onChange}></textarea>
//             <br/>
//             <label>Image: </label>
//             <textarea type='text' name='image' value={props.values.image} onChange={props.onChange}></textarea>
//             <button type="submit">Submit</button>
//         </form>
//     </div>
//     )
// } 

