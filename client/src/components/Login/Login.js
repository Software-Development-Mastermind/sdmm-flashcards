import {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import "./Login.css";



const useStyles = makeStyles(theme => ({
  appBar: { 
    top: 'auto', 
    bottom: 0,
    height: "56px",
  }
}))




export default function Login() { 
  const classes = useStyles();

  return(<>
    <div>Login</div>
    <AppBar position="fixed" color="primary" className={classes.appBar}></AppBar>
  </>)
}