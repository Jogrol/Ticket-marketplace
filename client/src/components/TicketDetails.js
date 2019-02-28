import * as React from 'react'
import Typography from '@material-ui/core/Typography';

export default function TicketDetails(props) {
    
    return(
      
        <div> 
            <Typography component="h2" variant="h2" gutterBottom>
             Ticket details
            </Typography>
            <Typography component="h3" variant="h3" gutterBottom>
             Name: {props.ticket.name}
             </Typography>
        </div>
    )
    
}

