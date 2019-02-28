import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import TicketForm from '../components/Ticketform'

export default function TicketDetails(props) {
    return(

        <div> 
            {props.editMode && <TicketForm onSubmit={props.onSubmit} onChange={props.onChange} values={props.formValues} />}
            
            {!props.editMode && <div>
            <Typography component="h2" variant="h2" gutterBottom>
             Ticket details
            </Typography>
            <Typography component="h3" variant="h3" gutterBottom>
             Name: {props.ticket.name}
             </Typography>
             <button onClick={() => props.onEdit()}>Edit</button>
             </div>}
        </div>
    )
    
}

