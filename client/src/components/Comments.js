import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button';

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

function Comments (props) {
   
    const { classes } = props;
    
    if (!props.comments) return  <div><h2>Comments</h2> <p>No comments</p></div>

    return(
        <div> 
        <br />
        <Typography component="h5" variant="h5" gutterBottom>
         Comments
        </Typography>
           {props.comments.map((comment) => <Card key={comment.id}>
           <CardContent>
           <Typography component="p">
            {comment.comment}
           </Typography>
           <Typography className={classes.title} color="textSecondary" gutterBottom>
           {comment.user.userName}
            </Typography>
           </CardContent>
           </Card>)}
        </div>
    )
}
export default withStyles(styles)(Comments);