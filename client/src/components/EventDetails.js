import * as React from 'react'
// import EventForm from './EventForm'
import Typography from '@material-ui/core/Typography';
export default function EventDetails(props) {
    
    return(
        <div> 
            <Typography component="h2" variant="h2" gutterBottom>
             Event details
            </Typography>
            <Typography component="h2" variant="h2" gutterBottom>
             {props.event.name}}
            </Typography>
            {/* <h1>{props.event.name}</h1>
            <i>{props.event.date}</i>
            <p>{props.event.description}</p> */}
        </div>


        
    )
}

