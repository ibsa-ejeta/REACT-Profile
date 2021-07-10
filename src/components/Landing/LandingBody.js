import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  Container,
  Typography,
  CardMedia,
  CardActions,
  Paper,
} from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import HighQualityIcon from "@material-ui/icons/HighQuality";
import HdrStrongIcon from "@material-ui/icons/HdrStrong";

const useStyles = makeStyles(() => ({
  landingBody: {
    paddingTop: "9rem",
    textAlign: "center",
    marginBottom: "15rem",
  },
}));

const LandingBody = () => {
  const classes = useStyles();
  return (
    <Card className={classes.landingBody}>
      <Card id="features">
        <Typography>Handcrafted, home-made masterpieces</Typography>
        <Typography>
          {" "}
          <HdrStrongIcon fontSize="large" />
          &nbsp;&nbsp;Premium Materials
        </Typography>
        <Typography>
          Our trombones use the shiniest brass which is sourced locally. This
          will increase the longevity of your purchase.
        </Typography>

        <Typography>
          <LocalShippingIcon fontSize="large" />
          &nbsp;&nbsp;Fast Shipping
        </Typography>
        <Typography>
          We make sure you recieve your trombone as soon as we have finished
          making it. We also provide free returns if you are not satisfied.
        </Typography>

        <Typography>
          <HighQualityIcon fontSize="large" /> &nbsp;&nbsp;Quality Assurance
        </Typography>
        <Typography>
          For every purchase you make, we will ensure there are no damages or
          faults and we will check and test the pitch of your instrument.
        </Typography>
      </Card>

      <Card className="video" id="howItWorks">
        <iframe
          src="https://www.youtube.com/embed/y8Yv4pnO7qc"
          title="trombone demo"
        ></iframe>
      </Card>
    </Card>
  );
};

export default LandingBody;
