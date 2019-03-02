import * as React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
  });

function Tickets (props) {
    
    // const { classes } = this.props;

    if (!props.tickets) return <p>No tickets avalaible</p>

    let filteredTicket = props.tickets.filter(ticket => ticket.event.id == props.eventId)

    return( <div> 
                <br/>
                <Typography component="h3" variant="h3" gutterBottom>
                Avalaible tickets
                </Typography>
                <div>
                <List> 
                {filteredTicket.map((ticket) => 
                <ListItem key={ticket.id}>
                   <Typography component="p">
                     €{ticket.price} 
                     </Typography>
                    <Link to = {`/events/${props.eventId}/ticket/${ticket.id}`}>
                    {ticket.name}
                    </Link>
                </ListItem>)}
                </List>   
           </div>
        </div>
    )

    
}


export default withStyles(styles)(Tickets);