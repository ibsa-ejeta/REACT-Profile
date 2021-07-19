import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Contactinfo from "./Contactinfo";
import Footer from "../sharedComponents/Footer";
import { Grid, Container, Paper, Box, makeStyles } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const details = require("./details.json");

const useStyles = makeStyles(() => ({}));

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
        pageLogo="Ibsa"
        first="Home"
        second="Projects"
        third="Contact"
        icon1={<HomeIcon fontSize="small" />}
        icon2={<AccountTreeIcon fontSize="small" />}
        icon3={<ContactMailIcon fontSize="small" />}
        path1="#"
        path2="#projects"
        path3="#contact"
        imgAlt="Ibsa Ejeta"
        imgSrc="/images/ibsa.JPG"
      />
      <Box component="div" className="homePage">
        <Introduction />
        <Container id="projects">
          {details.map((detail) => (
            <Projects
              keys={detail.key}
              titles={detail.titles}
              projectDescription={detail.projectDescription}
              images={detail.images}
              sites={detail.sites}
              urls={detail.urls}
              alts={detail.alts}
            ></Projects>
          ))}
        </Container>
        <Contactinfo />
      </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Home;
