import React from "react";
import TechnicalTable from "./TechnicalTable";
import TechnicalSection1 from "./TechnicalSection1";
import TechnicalSection2 from "./TechnicalSection2";
import TechnicalSection3 from "./TechnicalSection3";
import TechnicalRef from "./TechnicalRef";
import Footer from "../sharedComponents/Footer";
import {
  Container,
  Typography,
  makeStyles,
  Button,
  Drawer,
  MenuItem,
  Grid,
} from "@material-ui/core";

const Technical = () => {
  return (
    <Container>
      <Grid container>
        <Grid item sm={12} md={2}>
          <TechnicalTable />
        </Grid>
        <Grid item sm={12} md={10}>
          <TechnicalSection1 />

          <TechnicalSection2 />

          <TechnicalSection3 />
          <TechnicalRef />
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default Technical;
