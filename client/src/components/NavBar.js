import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const styles = {
  buttonDecoraction: {
    textDecoration: "none", 
    color: '#fff'
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Button color="inherit"><Link to = {"/"} className={classes.buttonDecoraction}>Events</Link></Button>
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            UberForTickets
          </Typography>
         <Button color="inherit" ><Link to = {"/login"} className={classes.buttonDecoraction}>Login</Link></Button>
         <Link  to = {"/sigin" } className={classes.buttonDecoraction}><Button color="inherit">Register</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);