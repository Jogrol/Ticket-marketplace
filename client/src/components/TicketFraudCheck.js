import * as React from 'react'
import Typography from '@material-ui/core/Typography';

export default function TicketFraudCheck(props) {
    return(<div>
                <Typography component="p">
                  We calculated that the risk of this ticket being a fraud is {props.score}%. 
                  </Typography>
            </div>
    )
    
}