import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      backgrounColor: 'white',
    },
  }));
const ShowNote = (props) => {
    const classes = useStyles();
return (
    <>
    <div className="card mr-3 mt-3 shadow-lg border border-primary" style={{
        width: '20rem', display:'inline-block'
    }}>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    
    <div className="text-right"> 
    <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick = {()=>{props.d_Data(props.id)}}
    >
        Delete
      </Button>
    </div>
  </div>
</div>
    </>
);
}

export default ShowNote;