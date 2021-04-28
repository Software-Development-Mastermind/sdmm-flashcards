import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./HomePage.css";
import SDMM_LOGO from "../../assets/SDMM_LOGO.jpeg";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles(() => ({
  typography: {
    fontFamily: "Poppins",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    padding: "40px 100px",
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  social: {
    position: "absolute",
    zIndex: 10,
    bottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  button: {
    fontSize: "1em",
    background: "#000",
    padding: "10px 30px",
    fontWeight: "500",
    marginTop: "2.5em",
    letterSpacing: "0.25em",
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <section class="showcase">
        <div className={classes.header}>
          <Typography variant="h4" className={classes.typography}>
            SDMM
          </Typography>
          <div class="toggle"></div>
        </div>

        <div class="overlay"></div>
        <div class="text">
          <Typography variant="h2" className={classes.typography}>
            Never
          </Typography>
          <Typography variant="h3" className={classes.typography}>
            Stop Learning
          </Typography>
          <p>
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
            <GitHubIcon color="secondary" />
          </IconButton>
          <IconButton>
            <FacebookIcon color="secondary" />
          </IconButton>
          <IconButton>
            <TwitterIcon color="secondary" />
          </IconButton>
        </div>
      </section>

      <div class="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
