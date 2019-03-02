import * as React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

function EventDetails(props) {
    
    const { classes } = props;

    return(
      
        <div> 
            

            <Typography component="h3" variant="h3" gutterBottom>
            
             </Typography>
             <Card>
             <Typography component="h2" variant="h2" gutterBottom>
             Event details
            </Typography>
                <CardContent>
                  <CardMedia
                      className={classes.media}
                      image={props.event.image}
                      title="image Event"
                      />
                    <br/>
                    <Typography gutterBottom variant="h5" component="h2">
                        Name: {props.event.name}
                      </Typography>
                      <Typography component="p">
                        Description: {props.event.description} 
                      <br/>
                      <br/>
                      <b>Start date:</b> {props.event.start_date} <b> End date:</b> {props.event.end_date}
                      </Typography>
                      </CardContent>
            </Card>
        </div>
    )
    
}

export default withStyles(styles)(EventDetails);
