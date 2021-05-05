import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import blue from "@material-ui/core/colors/blue";

import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import "./HomePage.css";
import SDMM_LOGO from "../../assets/SDMM_LOGO.svg";
import BACKGROUND_IMG from "../../assets/background_image.jpeg";

/*
REFERENCES:

https://stackoverflow.com/questions/52484812/reactjs-material-ui-breakpoints
https://blog.logrocket.com/3-ways-to-add-custom-fonts-to-your-material-ui-project/
*/

const useStyles = makeStyles((theme) => ({
  section: {
    position: "absolute",
    right: 0,
    width: "100%",
    minHeight: "100vh",
    padding: "4em 8em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#054771",
    transition: "0.5s",
    zIndex: 2,
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      height: "100vh",
      width: "100vw",
      padding: "1em",
      alignContent: "center",
      justifyContent: "center",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${BACKGROUND_IMG})`,
    mixBlendMode: "overlay",
  },
  h2: {
    fontFamily: "Poppins",
    fontWeight: 800,
    fontSize: "5em",
    lineHeight: "1em",
    textTransform: "uppercase",
    color: blue[50],
    [theme.breakpoints.down("xs")]: {
      fontSize: "3em",
    },
  },
  h3: {
    fontFamily: "Poppins",
    fontSize: "4em",
    fontWeight: 700,
    lineHeight: "1em",
    textTransform: "uppercase",
    color: blue[50],
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.4em",
    },
  },
  p: {
    fontFamily: "Poppins",
    fontSize: "1.1em",
    margin: "2em 0",
    fontWeight: 400,
    maxWidth: "50%",
    color: blue[50],
    [theme.breakpoints.down("md")]: {
      maxWidth: "90%",
    },
  },
  header: {
    position: "absolute",
    padding: "4em 8em",
    top: 0,
    left: 0,
  },
  social: {
    position: "absolute",
    bottom: "4em",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      bottom: "2em",
    },
  },
  socialColor: {
    color: blue[50],
  },
  button: {
    fontFamily: "Poppins",
    fontSize: "1em",
    background: "#000",
    padding: "1em 3em",
    fontWeight: "500",
    marginTop: "2.5em",
    letterSpacing: "0.25em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1.5em",
    },
  },
  img: {
    width: "20em",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "10em",
      height: "auto",
    },
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <section className={classes.section}>
        <div className={classes.header}>
          <img src={SDMM_LOGO} alt="SDMM Logo" className={classes.img} />
        </div>

        <div className={classes.overlay}></div>
        <div>
          <Typography variant="h2" className={classes.h2}>
            Never
          </Typography>
          <Typography variant="h3" className={classes.h3}>
            Stop Learning
          </Typography>
          <p className={classes.p}>
            Flash Cards for serious learners. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolorem fugit nihil aut debitis magni
            nisi natus temporibus sapiente veniam quasi! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dicta delectus ipsam illum
            voluptatum! Vero, incidunt eaque sint dolor ex quaerat?
          </p>
          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
            startIcon={<LockOpenIcon />}
          >
            Login
          </Button>
        </div>

        <div className={classes.social}>
          <IconButton>
            <GitHubIcon className={classes.socialColor} />
          </IconButton>
          <IconButton>
            <FacebookIcon className={classes.socialColor} />
          </IconButton>
          <IconButton>
            <TwitterIcon className={classes.socialColor} />
          </IconButton>
        </div>
      </section>
    </>
  );
}

export default HomePage;
