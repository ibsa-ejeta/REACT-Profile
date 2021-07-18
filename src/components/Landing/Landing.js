import React from "react";
import Header from "../sharedComponents/Header";
import LandingBody from "./LandingBody";
import LandingPrice from "./LandingPrice";
import SignIn from "./SignIn";
import Footer from "../sharedComponents/Footer";
import ListIcon from "@material-ui/icons/List";
import { Box, makeStyles } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FlightLandIcon from "@material-ui/icons/FlightLand";

const useStyles = makeStyles(() => ({
  landing: {
    paddingTop: "9rem",
    textAlign: "center",
    marginBottom: "15rem",
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        pageLogo="Landing Page"
        first="FEATURES"
        second="HOW IT WORKS"
        third="PRICING"
        fourth="LOG IN"
        src="/images/OtromBone.png"
        alt="trombone"
        icon1={<ListIcon fontSize="small" />}
        icon2={<VideoLibraryIcon fontSize="small" />}
        icon3={<AttachMoneyIcon fontSize="small" />}
        icon4={<LockOpenIcon fontSize="small" />}
        path1="#features"
        path2="#howItWorks"
        path3="#pricing"
        path4="#login"
        imgAlt="Trombone"
        imgSrc="<FlightLandIcon/>"
      />
      <Box>
        <LandingBody />
        <LandingPrice />
        <SignIn />
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
