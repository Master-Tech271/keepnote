import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}));
const Form = (props) => {
    const [form_d, setform_d] = useState({
        title: '',
        desc: ''
    });
    const classes = useStyles();
    const [hide_d, sethide_d] = useState('none');
    const show_desc_d = (event) => {
        const { name, value } = event.target;
        if (name === "title") {
            if (value !== '') {
                sethide_d('inline-block');
            }
            else {
                sethide_d('none');
            }
        }
        setform_d((prev_value) => {
            return {
                ...prev_value,
                [name]: value
            };
        });
    }

     const check_t_d =  () => {
        if(!(form_d.title!=='')) {
            if(!(form_d.desc!=='')) {
                swal({
                    title: "Oops",
                    text: "Title and Description is empty!..",
                    icon: "warning",
                    dangerMode: true,
                  });
                }
         else{
            swal({
                title: "Oops",
                text: "Title is empty!..",
                icon: "warning",
                dangerMode: true,
              });
         }
        } 
        else if(!(form_d.desc!=='')) {
            swal({
                title: "Oops",
                text: "Description is empty!..",
                icon: "warning",
                dangerMode: true,
              });
        }
        else {
            props.passNote(form_d);
            setform_d({
               title : '',
               desc : '' 
            });
            sethide_d('none');
        }
    }
    return (
        <>
            <form>
                <TextField multiline="true" id="standard-basic" label="Title" onChange={show_desc_d} name="title" value={form_d.title} autoComplete="off"/>
                <TextField multiline="true" id="standard-basic" label="Description" style={{ display: hide_d }} onChange={show_desc_d} name="desc" value={form_d.desc} autoComplete="off"/>
                <div className="text-right add_b">
                    <Tooltip title="Add" aria-label="add" onClick={check_t_d}>
                        <Fab color="primary" className={classes.fab}>
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </div>
            </form>
        </>
    );

}
export default Form;