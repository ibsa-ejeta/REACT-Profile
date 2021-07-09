import React from "react";
import {
  Grid,
  Container,
  Typography,
  Paper,
  makeStyles,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
const useStyles = makeStyles(() => ({
  blogAbout: {
    paddingTop: "9rem",
    textAlign: "center",
    marginBottom: "15rem",
  },
}));

const Blogabout = () => {
  const classes = useStyles();
  return (
    <Container className={classes.blogAbout}>
      <Typography variant="h2">About</Typography>
      <Typography variant="body1">
        I am a Web Developer experienced in using programming languages and
        libraries such as HTML5, CSS3, JavaScript, React and Python to create
        various features for websites. In addition to my experience, I have a
        solid educational background and a passion for programming. Personally,
        I am a motivated person who can work towards a goal with patience and
        persistance. If you are interested, please contact me either by email or
        phone.
      </Typography>

      <Typography variant="h3">Contact</Typography>

      <a href="https://github.com/ibsa-ejeta/" target="_blank" rel="noreferrer">
        <Typography variant="h4">
          <GitHubIcon fontSize="large" /> GitHub Profile
        </Typography>
      </a>
      <a
        href="https://www.linkedin.com/in/ibsaejeta/"
        target="_blank"
        rel="noreferrer"
      >
        <Typography variant="h4">
          <LinkedInIcon fontSize="large" /> LinkedIn Profile
        </Typography>
      </a>
      <a href="mailto:ibsa.ej@gmail.com" target="_blank" rel="noreferrer">
        <Typography variant="h4">
          <EmailIcon fontSize="large" /> Send an email
        </Typography>
      </a>
      <a href="tel:1-416-919-3074" target="_blank" rel="noreferrer">
        <Typography variant="h4">
          <PhoneIphoneIcon fontSize="large" /> Call 416-919-3074
        </Typography>
      </a>
    </Container>
  );
};

export default Blogabout;
