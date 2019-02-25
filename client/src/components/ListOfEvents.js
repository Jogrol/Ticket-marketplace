import * as React from 'react'
import { Link } from 'react-router-dom'

export default function ListOfEvents (props) {
  console.log(props.pagenumber)

  return(<div>
          <h1>Events</h1>
          <ol>
            {props.events.map((event) => 
            <li key={event.id}><Link to = {`/event/${event.id}`}>Name: {event.name} Description: {event.description} Start date: {event.start_date} End date: {event.end_date} </Link></li>)}
          </ol>
            {props.pagenumber.map((pagenumber => 
            <button  onClick={props.nextPage}
            key={pagenumber}
            value={pagenumber}
            id={pagenumber}>{pagenumber}</button>
              ))}
          </div>)
}