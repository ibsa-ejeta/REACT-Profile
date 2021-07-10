import React from "react";
import {
  Grid,
  CardMedia,
  Card,
  Container,
  Typography,
  Paper,
  makeStyles,
} from "@material-ui/core";

const TributeIntro = () => {
  return (
    <Container align="center">
      <Typography>Nikola Tesla</Typography>
      <Typography>The man who invented the twentieth century</Typography>
      <CardMedia
        component="img"
        title="Nikola Tesla"
        image="https://www.elitereaders.com/wp-content/uploads/2016/04/nikola-tesla-feat.jpg"
        alt="Nikola Tesla"
        height="500"
      />
    </Container>
  );
};

export default TributeIntro;
