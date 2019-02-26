import * as React from 'react'
import { Link } from 'react-router-dom'

export default function ListOfEvents (props) {

  return(<div>
          <h1>Events</h1>
          <ol>
            {props.events.map((event) => 
            <li key={event.id}><Link to = {`/event/${event.id}`}>
            Name: {event.name} 
            Description: {event.description} 
            Start date: {event.start_date} 
            End date: {event.end_date} </Link></li>)}
          </ol>
            <button  onClick={() => props.goBack()}>Back</button>
            <button  onClick={() => props.nextPage()}>Next</button>
          </div>)
            

}