import {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TypoGraphy from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./Login.css";



const useStyles = makeStyles(theme => ({
  backgroundColor: { 
    backgroundColor: "#F5F5F5"
  },
  headerContainer: { 
    height: "20vh",
  },
  loginContainer: { 
    height: "80vh",
  }, 
  paper: {
    width: "352px", 
    height: "322px",
  }, 
  appBar: { 
    top: 'auto', 
    bottom: 0,
    height: "56px",
  }, 
  
}))


export default function Login() { 
  const classes = useStyles();

  return(<>
    <div className={classes.backgroundColor}>
      <Grid 
          container
          className={classes.headerContainer}
          justify="center"
          alignItems="center"
        >
          <Grid 
            item
            >
            <TypoGraphy 
              variant="h6" component="h1">
              SDMM FLASH CARDS
            </TypoGraphy>
          </Grid>
        </Grid>
      <Grid 
        container 
        className={classes.loginContainer}
        justify="flex-start"
        direction="column"
        alignItems="center"
      >
        
        <Grid item>
          <Card className={classes.paper}>
          <Grid
            container
            justify="center">
              <Grid item>
                  <TypoGraphy>
                    Log In
                  </TypoGraphy>
              </Grid>
          </Grid>

          <form>
            <Grid
              container
              justify="center">
                <Grid 
                  item
                  xs={11}>
                  <TextField 
                  id="filled-basic" 
                  label="Email" 
                  variant="filled" 
                  size="small"
                  fullWidth/>
                </Grid>
            </Grid>
           

            <Grid
              container
              justify="center">
                <Grid 
                  item
                  xs={11}>
                  <TextField 
                  id="filled-basic" 
                  label="Password" 
                  variant="filled" 
                  size="small"
                  fullWidth/>
                </Grid>
            </Grid>
            
              <Button 
                variant="contained" 
                color="primary" 
                href="#contained-buttons">
                LOG IN
              </Button>

          </form>
          
         
          
          </Card>
        </Grid>
      </Grid>
      <AppBar position="fixed" color="primary" className={classes.appBar}></AppBar>
    </div>
  </>)
}