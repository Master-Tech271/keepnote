import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
const Footer = () => {
    const classes = useStyles();
    return (
        <div className="">
            <div className={classes.root} style={{position: 'relative',
  'top': '19rem', 'width': '100%'}}>
          <AppBar position="static" color="default">
            <Toolbar>
              
              <Typography variant="h6" className={classes.title} style={
                  {
                      textAlign : 'center',
                      color:'black'
                  }
              }>
                &copy; Copy Right 2020
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        </div>
      );
}
export default Footer;