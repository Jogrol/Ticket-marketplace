import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import TicketForm from '../components/Ticketform'
import TicketFraudCheckContainer from './TicketFraudCheckContainer'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      maxWidth: 345,
      witdh: 200,
    },
    media: {
      height: 140,
    },
  };


function TicketDetails(props) {

    const { classes } = props;

    return(<div> 
         <Typography component="h2" variant="h2" gutterBottom>
         Ticket Details
        </Typography>
        {props.editMode && <div>
            <Card>
            <CardContent>
                <br/>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.ticket.name}
                  </Typography>
                  <Typography component="p">
                  {props.ticket.description}
                  </Typography>
                  </CardContent>
                  <CardMedia
                  className={classes.media}
                  image={props.ticket.image}
                  title="image ticket"
                  />
                <Button onClick={() => props.onEdit()}>Edit</Button>
            <TicketFraudCheckContainer />
        </Card>
                <Typography component="h4" variant="h4" gutterBottom>
                  Change details
                 </Typography>
                <TicketForm onSubmit={props.onSubmit} onChange={props.onChange} values={props.formValues} /> </div>}
        {!props.editMode && <div>
            <Card>
            <CardContent>
                <br/>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.ticket.name}
                  </Typography>
                  <Typography component="p">
                  {props.ticket.description}
                  </Typography>
                  </CardContent>
                  <CardMedia
                  className={classes.media}
                  image={props.ticket.image}
                  title="image ticket"
                  />
                <Button onClick={() => props.onEdit()}>Edit</Button>
            <TicketFraudCheckContainer />
        </Card>
         </div>}
    </div>
      
    )
    
}
export default withStyles(styles)(TicketDetails);

