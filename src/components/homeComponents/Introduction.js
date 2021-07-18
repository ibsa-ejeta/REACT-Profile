import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Paper,
  Grid,
} from "@material-ui/core";

const Introduction = () => {
  return (
    <Box id="Home" component="div" className="homeIntroduction">
      <Grid container spacing={3}>
        <Grid item sm={12} md={5}>
          <Typography variant="h3">Ibsa Ejeta</Typography>
          <Typography variant="h5">a Web Developer</Typography>

          <Typography variant="body1" component="">
            I'm a creative full stack web developer, with Network Engineering
            background, dedicated to building and optimizing the performance of
            user-centric, high-impact websites.
          </Typography>
        </Grid>
        <Grid item sm={12} md={7}>
          <img src="images/clipart.png" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
