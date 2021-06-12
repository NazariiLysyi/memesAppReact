import React from 'react';
import './Buttons.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(0),
    },
  },

  button: {
    margin: theme.spacing(1),
  },


  
}));

export default function Buttons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="text" color="primary" aria-label="large outlined primary button group">
      <NavLink to='/regular'><Button><p className="text">Regular</p></Button></NavLink>
      <NavLink to='/hot'><Button><p className="text"> Hot</p></Button></NavLink>
      </ButtonGroup>
    </div>
  );
}




