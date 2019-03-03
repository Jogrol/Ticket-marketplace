import * as React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });

function Tickets (props) {
    
    if (!props.tickets) return  (<Typography component="h4" variant="h4" gutterBottom>
    No tickets avalaible
    </Typography>)

    let filteredTicket = props.tickets.filter(ticket => ticket.event.id == props.eventId)

    return(
        <div>
        <Typography component="h3" variant="h3" gutterBottom>
        Avalaible tickets
        </Typography>
        <div>
          <List>
        {filteredTicket.map((ticket) =><ListItem key={ticket.id}>
        <Link to = {`/events/${props.eventId}/tickets/${ticket.id}`}><Button>
                Buy
            </Button></Link>
       <ListItemText inset primary={ticket.price}
                    insert secondary={ticket.name}/>
        </ListItem>
        )}
        </List>
        </div>
        </div>);
}
    
export default withStyles(styles)(Tickets);  
    