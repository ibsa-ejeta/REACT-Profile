import React from "react";
import { Typography, Container, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  blogHome: {
    paddingTop: "9rem",
    textAlign: "center",
    marginBottom: "15rem",
  },
}));

const Bloghome = () => {
  const classes = useStyles();
  return (
    <Container className={classes.blogHome}>
      <Typography variant="h2">Introduction</Typography>
      <Typography variant="h5">
        In this journal, you can create and publish your own daily journals on
        subjects such as Web Development. Go to 'COMPOSE' to enter the Journal's
        Title and Content on the space provided and click 'Publish'. Your
        Journal will be visible in the 'Home' page.
      </Typography>
    </Container>
  );
};

export default Bloghome;
