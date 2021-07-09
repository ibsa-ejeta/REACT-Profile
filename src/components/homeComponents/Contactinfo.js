import React from "react";
import {
  Card,
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
  projectContact: {
    paddingTop: "9rem",
    textAlign: "center",
    marginBottom: "15rem",
  },
}));

const Contactinfo = () => {
  const classes = useStyles();
  return (
    <Container id="contact">
      <Paper className={classes.projectContact}>
        <Typography variant="h2">Let's work together...</Typography>
        <Typography variant="h3">
          Available for full-time, part-time and freelance jobs
        </Typography>

        <a
          href="https://github.com/ibsa-ejeta/"
          target="_blank"
          rel="noreferrer"
        >
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
      </Paper>
    </Container>
  );
};

export default Contactinfo;
