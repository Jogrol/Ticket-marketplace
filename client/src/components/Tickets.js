import * as React from 'react'
import { Link } from 'react-router-dom'


export default function Tickets (props) {
    
    

    if (!props.tickets) return 'loading'
    return(
      
        <div> 
            <ol>
           {props.tickets.map((ticket) => 
           <li key={ticket.id}><Link to = {`/event/${props.eventId}/ticket/${ticket.id}`}>
           Name: {ticket.name}</Link>
           </li>)}
           </ol>
        </div>
    )

    
}


