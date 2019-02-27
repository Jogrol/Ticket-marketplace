import * as React from 'react'
// import { Link } from 'react-router-dom'
// import EventForm from './EventForm'
import Typography from '@material-ui/core/Typography';
export default function EventDetails(props) {
    

    return(
      
        <div> 
            <Typography component="h2" variant="h2" gutterBottom>
             Event details
            </Typography>
            <Typography component="h3" variant="h3" gutterBottom>
             Name: {props.event.name}
             </Typography>
        </div>
    )
    
}

