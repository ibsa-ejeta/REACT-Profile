import React from "react";
import TributeIntro from "./TributeIntro";
import TributeCalc from "./TributeCalc";
import TributeBody from "./TributeBody";
import Footer from "../sharedComponents/Footer";
import { Grid, Container, Paper, makeStyles } from "@material-ui/core";

const Tribute = () => {
  return (
    <Container>
      <TributeIntro />
      <Grid container spacing={3}>
        <Grid item container sm={12} md={3}>
          <TributeCalc />
        </Grid>
        <Grid item container sm={12} md={6}>
          <TributeBody />
        </Grid>
        <Grid item container sm={12} md={3}>
          <TributeCalc />
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default Tribute;
