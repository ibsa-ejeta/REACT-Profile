import React from "react";
import Header from "../sharedComponents/Header";
import LandingBody from "./LandingBody";
import SignIn from "./SignIn";
import Footer from "../sharedComponents/Footer";
import ListIcon from "@material-ui/icons/List";
import { Container } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const Landing = () => {
  return (
    <Container>
      <Header
        pageLogo="Landing Page"
        first="FEATURES"
        second="HOW IT WORKS"
        third="PRICING"
        fourth="Log In"
        src="/images/OtromBone.png"
        alt="trombone"
        icon1={<ListIcon fontSize="large" />}
        icon2={<VideoLibraryIcon fontSize="large" />}
        icon3={<AttachMoneyIcon fontSize="large" />}
        icon4={<LockOpenIcon fontSize="large" />}
        path1="#features"
        path2="#howitworks"
        path3="#pricing"
        path4="#login"
      />
      <LandingBody />
      <SignIn />
      <Footer />
    </Container>
  );
};

export default Landing;
