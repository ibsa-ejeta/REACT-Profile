import React from "react";
import {
  Grid,
  Container,
  Paper,
  Button,
  Typography,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";

const LandingPrice = () => {
  return (
    <Grid
      id="pricing"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12} md={6} lg={4}>
        <Typography>TENOR TROMBONE</Typography>
        <Typography>$600</Typography>
        <List>
          <ListItem>Quick, sensitive response</ListItem>
          <ListItem>2 interchangeable leadpipes</ListItem>
          <ListItem>8" bell, Medium shank, Gold brass leadpipe</ListItem>
          <ListItem>
            Drawn one-piece brass outer slide, Nickel-plated pistons
          </ListItem>
        </List>
        <Button>SELECT</Button>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Typography>BASS TROMBONE</Typography>
        <Typography>$900</Typography>
        <List>
          <ListItem>
            Clear lacquer finish, Chrome-plated nickel silver inner slide
          </ListItem>
          <ListItem>Yellow brass body and one piece yellow brass bell</ListItem>
          <ListItem>Excellent student or professional instrument</ListItem>
        </List>
        <Button>SELECT</Button>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Typography>VALVE TROMBONE</Typography>
        <Typography>$1200</Typography>
        <List>
          <ListItem>Plays similar to a Trumpet</ListItem>
          <ListItem>Great for Jazz Bands</ListItem>
          <ListItem>Tubular braces, Balancer, Pressure formed tubing</ListItem>
          <ListItem>
            Pluzuma welded bell, Bracing guards, Medium 0.5" bore
          </ListItem>
        </List>
        <Button>SELECT</Button>
      </Grid>
    </Grid>
  );
};

export default LandingPrice;
