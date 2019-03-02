import * as React from 'react'


export default function TicketFraudCheck(props) {
    return(

        <div> 
            <h3>TicketFraudCheck</h3>
            {/* <button  onClick={() => props.fraudChecker()}>Check</button> */}
            <p>Score: {props.score}</p>

        </div>
    )
    
}