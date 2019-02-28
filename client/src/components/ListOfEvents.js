import * as React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

export default function ListOfEvents (props) {

  return(<div>
             <Typography component="h2" variant="h2" gutterBottom>
              Events
            </Typography>
          <ol>
            {props.events.map((event) => 
            <li key={event.id}><Link to = {`/events/${event.id}`}>
            Name: {event.name} 
            Description: {event.description} 
            Start date: {event.start_date} 
            End date: {event.end_date} </Link></li>)}
          </ol>
            <button  onClick={() => props.goBack()}>Back</button>
            <button  onClick={() => props.nextPage()}>Next</button>
          </div>)
            

}