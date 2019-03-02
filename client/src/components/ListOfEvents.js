import * as React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const styles = {
  card: {
    maxWidth: 345,
    witdh: 200,
  },
  media: {
    height: 140,
  },
};

function ListOfEvents (props) {

  const { classes } = props;
  return(<div>
             <Typography component="h2" variant="h2" gutterBottom>
                Events
              </Typography>
              {props.events.map((event) => 
              <Card key={event.id}>
                <CardContent>
                  <CardMedia
                      className={classes.media}
                      image={event.image}
                      title="image Event"
                      />
                    <Typography gutterBottom variant="h5" component="h2">
                      {event.name} 
                      </Typography>
                      <Typography component="p">
                        Description: {event.description} 
                      <br/>
                      <b>Start date:</b> {event.start_date} <b>End date:</b> {event.end_date}
                      </Typography>
                      </CardContent>
                      <CardActions>
                  <Link to = {`/events/${event.id}/`}><Button>
                    Go to event
                  </Button></Link>
                  </CardActions>
              </Card>)}
              <Button  onClick={() => props.goBack()}>Back</Button>
              <Button  onClick={() => props.nextPage()}>Next</Button>
              </div> )
    
}

export default withStyles(styles)(ListOfEvents);