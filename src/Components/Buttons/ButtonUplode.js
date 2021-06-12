import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  export default function ButtonUplode() {
    const classes = useStyles();
  
    return (
      <div>
        <NavLink to='/upload'><Button
          variant="contained"
          color="secondary"
          size="small"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload </Button>
        </NavLink>
       </div>
         );
        }