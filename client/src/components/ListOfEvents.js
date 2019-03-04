import * as React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddEventContainer from './AddEventContainer';


const styles = {
  buttonDecoraction: {
    textDecoration: "none", 
    color: '#fff'
  },
  homeScreen: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    AlignContent: "center",
  },
  navigationButtons:{
    display: "inline_block",
  },
  cardContainer: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    AlignContent: "center",
  },
  card: {
    margin: "10px",
    display: "flex",
    maxWidth: "400px",
    maxHeight: "400px"
  },
  media: {
    height: 140,
    witdh: "100%",
  },
};

function ListOfEvents (props) {

  const { classes } = props;
  return(
    <div className={classes.homeScreen}>
          <br/>
        <Typography component="h2" variant="h2" gutterBottom>
                Events
        </Typography>
        <div className={classes.cardContainer}>
        {props.events.map((event) => 
          <Card key={event.id} className={classes.card}>
            <CardContent>
              <CardMedia
                className={classes.media}
                image={event.image}
                title="image Event"
                />
                  <br/>
              <Typography gutterBottom variant="h5" component="h2">
                {event.name} 
                </Typography>
              <Typography component="p">
                {/* Description: {event.description} 
                <br/> */}
                <b>Start date:</b> {event.start_date} <b>End date:</b> {event.end_date}
                </Typography>
                <Link to = {`/events/${event.id}/`} className={classes.buttonDecoraction}><Button>
                More info
                </Button></Link>
              </CardContent>
              <br/>

            </Card>)}
          </div>
            <div className={classes.navigationButtons}>
              <Button  onClick={() => props.goBack()}>Back</Button>
              <Button  onClick={() => props.nextPage()}>Next</Button>
             
            </div>
          <br/>
          <div>
          <AddEventContainer /> 
          </div>
        </div> )
    
}

export default withStyles(styles)(ListOfEvents);