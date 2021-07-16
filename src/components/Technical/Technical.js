import React, { useEffect, useState } from "react";
import TechnicalTable from "./TechnicalTable";
import TechnicalSection1 from "./TechnicalSection1";
import TechnicalSection2 from "./TechnicalSection2";
import TechnicalSection3 from "./TechnicalSection3";
import TechnicalRef from "./TechnicalRef";
import Footer from "../sharedComponents/Footer";
import {
  Container,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
  Button,
  Drawer,
  Grid,
} from "@material-ui/core";

const large = (
  <Drawer variant="permanent" anchor="left">
    <TechnicalTable />
  </Drawer>
);

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Technical = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const small = (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        JS Documentation
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <TechnicalTable />
        </MenuItem>
      </Menu>
    </div>
  );
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Container>
      <Grid>
        {/* <Drawer variant="permanent" anchor="left">
          <TechnicalTable />
        </Drawer> */}
        {windowDimensions.width > 960 ? large : small}

        <TechnicalSection1 />

        <TechnicalSection2 />

        <TechnicalSection3 />
        <TechnicalRef />
      </Grid>
      <Footer />
    </Container>
  );
};

export default Technical;
