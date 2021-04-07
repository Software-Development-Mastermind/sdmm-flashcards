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
  itemPaper: { 
    height: "45%",
  },
  paper: {
    height: "100%",
  }, 
  loginHeaderContainer: { 
    height: "20%"
  },
  formControls: {
    height: "80%"
  },
  appBar: { 
    top: 'auto', 
    bottom: 0,
    height: "56px",
  }, 
  button: { 
    marginRight: "4vw"
  }
  
}))


export default function Login() { 
  const classes = useStyles();

  return(<>
    <div className={classes.backgroundColor}>
      <Grid 
        container
        className={classes.headerContainer}
        justify="center"
        alignItems="center">
        <Grid item>
          <TypoGraphy variant="h6" component="h1">
            SDMM FLASH CARDS
          </TypoGraphy>
        </Grid>
      </Grid>

      <Grid 
        container 
        className={classes.loginContainer}
        justify="center"
        alignItems="flex-start">
        
        <Grid item className={classes.itemPaper} xs={11}>
          <Card className={classes.paper}>
            <Grid 
              container 
              justify="center"
              alignItems="center"
              className={classes.loginHeaderContainer}>
              <TypoGraphy align="center">Log In</TypoGraphy>
            </Grid>
          
            <form className={classes.formControls}>
              <Grid 
                container 
                direction="column" 
                justify="space-between"
                className={classes.formControls}>

                <Grid item container justify="center">
                    <Grid  item xs={11}>
                      <TextField 
                        id="filled-basic" 
                        label="Email" 
                        variant="filled" 
                        size="small"
                        fullWidth/>
                    </Grid>
                </Grid>
            
                <Grid item container justify="center">
                    <Grid item xs={11}>
                      <TextField 
                        id="filled-basic" 
                        label="Password" 
                        variant="filled" 
                        size="small"
                        fullWidth/>
                    </Grid>
                </Grid>

                <Grid 
                  item 
                  container 
                  justify="flex-end">
                    <Grid item>
                      <Button 
                        variant="contained" 
                        color="primary"
                        className={classes.button}>
                        LOG IN
                      </Button>
                    </Grid>
                </Grid>

              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
      <AppBar position="fixed" color="primary" className={classes.appBar}></AppBar>
    </div>
  </>)
}