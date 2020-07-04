import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Note(props) {
  const classes = useStyles();
  const addDataNote = (form_d) => {
    props.passNoteData(form_d);
  }
  return (
   <div className=" mt-3 text-center">
        <Card className={classes.root} style={{
            margin: '0 auto'
        }}>
      <CardContent className=" shadow-lg">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Form passNote = {addDataNote}/>
        </Typography>
      </CardContent>
    </Card>
   </div>
  );
}
