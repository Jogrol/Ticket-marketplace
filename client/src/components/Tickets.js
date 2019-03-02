import * as React from 'react'
import { Link } from 'react-router-dom'


export default function Tickets (props) {
    
    

    if (!props.tickets) return 'loading'
    const filteredTicket = props.tickets.filter(ticket => ticket.event.id === props.eventId)
        
    return(
       
        <div> 
            <h2>Avalaible tickets</h2>
            <ol>
           {filteredTicket.map((ticket) => 
           <li key={ticket.id}><Link to = {`/events/${props.eventId}/ticket/${ticket.id}`}>
           Name: {ticket.name}</Link>
           </li>)}
           </ol>
        </div>
    )

    
}


